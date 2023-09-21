const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth/auth')
// const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/url', authCtrl.authorizeURL);

router.get('/token', authCtrl.getToken);

router.get('/logged_in', authCtrl.loggedInState);

router.post('/logout', authCtrl.logout);

module.exports = router;