const express = require('express')
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.tabs.index)
router.get('/showTab', ctrl.tabs.renderShowTab)


module.exports = router;
