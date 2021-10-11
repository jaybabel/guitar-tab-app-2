const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.users.index);
router.delete('/:index', ctrl.users.deleteUser)
router.get('/signup', ctrl.users.renderNew);
router.get('/login', ctrl.users.renderLogin);
router.post('/', ctrl.users.login);
router.post('/signup', ctrl.users.addNew)

router.put('/:index', ctrl.users.editProfile)

router.get('/profile/:index', ctrl.users.renderProfile);

module.exports = router;
