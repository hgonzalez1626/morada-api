const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify');
const { RegisterFavorites } = require('../controllers/favoritesCtrl');

router.post('/:idProperty', authVerify, RegisterFavorites);


module.exports = router;