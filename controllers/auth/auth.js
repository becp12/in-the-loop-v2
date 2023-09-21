const jwt = require('jsonwebtoken');
const queryString = require('query-string');
const axios = require('axios');

module.exports = {
    authorizeURL,
    getToken,
    loggedInState,
    logout
}

const config = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    redirectUrl: process.env.REDIRECT_URL,
    clientUrl: process.env.CLIENT_URL,
    tokenSecret: process.env.TOKEN_SECRET,
    tokenExpiration: 36000,
    postUrl: 'https://jsonplaceholder.typicode.com/posts' //might not need this line
  };
  
const authParams = queryString.stringify({
    client_id: config.clientId,
    redirect_uri: config.redirectUrl,
    response_type: 'code',
    scope: 'openid profile email',
    access_type: 'offline',  
    state: 'standard_oauth',
    prompt: 'consent',
  });

const getTokenParams = (code) => queryString.stringify({
client_id: config.clientId,
client_secret: config.clientSecret,
code,
grant_type: 'authorization_code',
redirect_uri: config.redirectUrl,
});

async function authorizeURL(req, res) {
    res.json({
        url: `${config.authUrl}?${authParams}`,
      });
}

async function getToken(req, res) {
    const { code } = req.query;
    if (!code) return res. status(400).json({ message: 'Authorization code must be provided' });
    try {
      // Get all parameters needed to hit authorization server
      const tokenParam = getTokenParams(code);
      // Exchange authorization code for access token (id token is returned here too)
      const { data: { id_token} } = await axios.post(`${config.tokenUrl}?${tokenParam}`);
      if (!id_token) return res.status(400).json({ message: 'Auth error' });
      // Get user info from id token
      const { email, name, picture } = jwt.decode(id_token);
      const user = { name, email, picture };
      // Sign a new token
      const token = jwt.sign({ user }, config.tokenSecret, { expiresIn: config.tokenExpiration });
      // Set cookies for user
      res.cookie('token', token, { maxAge: config.tokenExpiration, httpOnly: true,  })
      // You can choose to store user in a DB instead
      res.json({
        user,
      })
    } catch (err) {
      console.error('Error: ', err);
      res.status(500).json({ message: err.message || 'Server error' });
    }
  };

async function loggedInState(req, res) {
    try {
    // Get token from cookie
    const token = req.cookies.token;
    if (!token) return res.json({ loggedIn: false });
    const { user } = jwt.verify(token, config.tokenSecret);
    const newToken = jwt.sign({ user }, config.tokenSecret, { expiresIn: config.tokenExpiration });
    // Reset token in cookie
    res.cookie('token', newToken, { maxAge: config.tokenExpiration, httpOnly: true,  })
    res.json({ loggedIn: true, user });
    } catch (err) {
        res.json({ loggedIn: false });
    }
};

async function logout(req, res) {
    res.clearCookie('token').json({ message: 'Logged out' });
}