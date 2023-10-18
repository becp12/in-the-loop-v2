const express = require('express');
const router = express.Router();
const yarnCtrl = require('../controllers/api/yarn')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/new', ensureLoggedIn, yarnCtrl.new);

router.post('/', ensureLoggedIn, yarnCtrl.create);

module.exports = router;