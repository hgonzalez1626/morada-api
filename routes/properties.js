const express = require('express');
const router = express.Router();
const {SearchId, GetAll, Register, Update, Delete} = require('../controllers/propertiesCtrl');

router.post('/', Register);
router.get('/', GetAll);
router.get('/:idProperty', SearchId);
router.delete('/:idUser/:idProperty', Delete);
router.put('/:idUser/:idProperty', Update);


module.exports = router;
