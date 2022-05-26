const express = require('express');
const router = express.Router();
const {login, Register, forgetPassword, resetPassword, Update, Inactive} = require('../controllers/usersCtrl');

router.post('/signup', Register);
router.get('/login', login);
router.get('/login/forget', forgetPassword);
router.put('/login/forget', resetPassword);
router.put('/signup', Update);
router.put('/signup/:token', Inactive);

module.exports = router;
