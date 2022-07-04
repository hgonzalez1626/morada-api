const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify');
const { RegisterFavorites, SearchFavorites } = require('../controllers/favoritesCtrl');

router.post('/:idProperty', authVerify, RegisterFavorites);
router.get('/', authVerify, SearchFavorites);


module.exports = router;