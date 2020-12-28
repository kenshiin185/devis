const express = require('express');

const router = express.Router();
const clientCtrl = require('../controllers/client');
// const auth = require('../middleware/auth');

router.post('/', clientCtrl.createClient);

router.delete('/:id', clientCtrl.deleteClient);

router.put('/:id', clientCtrl.modifyClient);

router.get('/:id', clientCtrl.getSingleClient);

router.get('/', clientCtrl.getClients);

module.exports = router;