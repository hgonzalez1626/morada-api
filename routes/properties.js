const express = require('express');
const router = express.Router();
const {SearchId, Register, RegisterComments, SearchTBT, Update, Delete} = require('../controllers/propertiesCtrl');

router.post('/', Register);
router.post('/:idUser/:idProperty', RegisterComments);
router.get('/:idProperty', SearchId);
router.get('/', SearchTBT);
router.put('/', Update);
router.delete('/:idUser/:idProperty', Delete);

module.exports = router;
