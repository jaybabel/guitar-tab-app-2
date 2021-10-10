const express = require('express')
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.tabs.index)
router.delete('/:index', ctrl.tabs.deleteTab)
router.get('/new', ctrl.tabs.renderNew)

router.get('/:index/editTab', ctrl.tabs.renderEdit)
router.put('/:index', ctrl.tabs.editTab)

router.post('/', ctrl.tabs.postTab)
router.get('/:index', ctrl.tabs.show)

module.exports = router;
