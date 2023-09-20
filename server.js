// import 'dotenv/config';
require('dotenv').config();
//import express from 'express';
const express = require('express');
// import cors from 'cors';
// import axios from 'axios';
// import queryString from 'query-string';
// import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';

const cors = require('cors');
const axios = require('axios');
const queryString = require('query-string');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const path = require('path');
const logger = require('morgan');
// const favicon = require('serve-favicon');

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

const app = express();

// Resolve CORS
app.use(cors({
  origin: [
    config.clientUrl,
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
    jwt.verify(token, config.tokenSecret);
    return next();
  } catch (err) {
    console.error('Error: ', err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

//Add the following endpoint (/auth/url) to return the authorization URL to the frontend
app.get('/auth/url', (_, res) => {
  res.json({
    url: `${config.authUrl}?${authParams}`,
  });
});

//Then add another endpoint (/auth/token) that will get an authorization code from the frontend and verify it
app.get('/auth/token', async (req, res) => {
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
});

//Add the /auth/logged_in endpoint to check the logged-in state of a user
app.get('/auth/logged_in', (req, res) => {
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
});

//Then add the /auth/logout endpoint to log out a user in session
app.post("/auth/logout", (_, res) => {
  // clear cookie
  res.clearCookie('token').json({ message: 'Logged out' });
});

//Finally, add the resource endpoint
app.get('/user/posts', auth, async (_, res) => {
  try {
    const { data } = await axios.get(config.postUrl);
    res.json({ posts: data?.slice(0, 5) });
  } catch (err) {
    console.error('Error: ', err);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Express Server listening on port ${PORT}`));

// Connect to the database
// require('./config/database');

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


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// app.listen(port, function() {
//     console.log(`Express app running on port ${port}`);
// });