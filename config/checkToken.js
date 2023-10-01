const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // Check for the token being sent as a cookie
    const token = req.cookies.token;
    if (token) {
      // Check if token is valid and not expired
      jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
        // If valid token, decoded will be the token's entire payload
        // If invalid token, err will be set
        req.user = err ? null : decoded.user;  
        // If your app cares... (optional)
        req.exp = err ? null : new Date(decoded.exp * 1000);  
        return next();
      });
    } else {
      // No token was sent
      req.user = null;
      return next();
    }
  };