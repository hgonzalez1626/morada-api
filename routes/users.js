const express = require('express');
const router = express.Router();
const {login, getUser, Register, forgetPassword, resetPassword, Update, Inactive} = require('../controllers/usersCtrl');

router.post('/signup', Register);
router.post('/login', login);
router.get('/info', getUser);
router.get('/login/forget', forgetPassword);
router.put('/login/forget', resetPassword);
router.put('/signup', Update);
router.put('/signup/:token', Inactive);

module.exports = router;
