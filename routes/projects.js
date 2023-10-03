const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/api/project')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, projectCtrl.index);

router.get('/new', ensureLoggedIn, projectCtrl.new);

router.post('/', ensureLoggedIn, projectCtrl.create);

router.get('/:projectId', projectCtrl.show);

module.exports = router;