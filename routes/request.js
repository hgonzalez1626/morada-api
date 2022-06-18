const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify');
const { RegisterRequest } = require('../controllers/requestCtrl');

router.post('/:idProperty', authVerify, RegisterRequest);


module.exports = router;