const express = require('express');

const router = express.Router();
const enteteCtrl = require('../controllers/entete');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/',auth, multer, enteteCtrl.createEntete);

router.delete('/:id', enteteCtrl.deleteEntete);

router.put('/:id', enteteCtrl.modifyEntete);

router.get('/:id', enteteCtrl.getSingleEntete);

router.get('/', enteteCtrl.getEntetes);

module.exports = router;