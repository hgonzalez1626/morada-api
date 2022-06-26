const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify');
const {Authenticate, getUser, Register, Confirm, forgetPassword, checkToken, resetPassword, Update, Inactive} = require('../controllers/usersCtrl');

router.post('/signup', Register);
router.get('/confirm/:token', Confirm);
router.post('/login', Authenticate);
router.get('/info', authVerify, getUser);
router.post('/login/forgetPassword', forgetPassword);
router.route('/login/forgetPassword/:token').get(checkToken).post(resetPassword);
router.put('/signup', Update);
router.put('/signup/:token', Inactive);

module.exports = router;
