const express = require('express')
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.tabs.index)

router.get('/:index/delete', ctrl.tabs.renderDelete)
router.delete('/:index', ctrl.tabs.deleteTab)
router.get('/new', ctrl.tabs.renderNew)

router.get('/:index/edit', ctrl.tabs.renderEdit)
router.put('/:index', ctrl.tabs.editTab)

router.post('/', ctrl.tabs.postTab)
router.get('/:index', ctrl.tabs.show)

router.get('/profile/:index', ctrl.users.renderProfile)

module.exports = router;
