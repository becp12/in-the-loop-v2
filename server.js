require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const queryString = require('query-string');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
// const favicon = require('serve-favicon');

const app = express();

// Resolve CORS
app.use(cors({
  origin: [
    // config.clientUrl,
    process.env.CLIENT_URL,
  ],
  credentials: true,
}));

// Parse Cookie
app.use(cookieParser());

// Verify auth
const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    jwt.verify(token, process.env.TOKEN_SECRET);
    return next();
  } catch (err) {
    console.error('Error: ', err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

//Finally, add the resource endpoint
app.get('/user/posts', auth, async (_, res) => {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json({ posts: data?.slice(0, 5) });
  } catch (err) {
    console.error('Error: ', err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Express Server listening on port ${PORT}`));

// Connect to the database
require('./config/database');

app.use(logger('dev'));
// Process data in body of request if 
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// app.use(require('./config/checkToken'));



// const ensureLoggedIn = require('./config/ensureLoggedIn');

// Put API routes here, before the "catch all" route
// Protect the api routes below from anon users
app.use('/auth', require('./routes/auth'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// app.listen(port, function() {
//     console.log(`Express app running on port ${port}`);
// });