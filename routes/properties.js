const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify');
const {SearchId, GetAll, GetPropertiesOwner, Register, Update, Delete, uploadImage} = require('../controllers/propertiesCtrl');

router.post('/', authVerify, Register);
router.get('/', GetAll);
router.get('/Owner', authVerify, GetPropertiesOwner);
router.get('/:idProperty', SearchId);
router.delete('/:idUser/:idProperty', Delete);
router.put('/:idUser/:idProperty', Update);
router.post('/upload', uploadImage)


module.exports = router;
