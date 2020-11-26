const express = require('express');

const router = express.Router();
const clientCtrl = require('../controllers/client');
const auth = require('../middleware/auth');

router.post('/', auth, clientCtrl.createClient);

router.delete('/:id', auth, clientCtrl.deleteClient);

router.put('/:id', auth, clientCtrl.modifyClient);

router.get('/:id', auth, clientCtrl.getSingleClient);

router.get('/', auth, clientCtrl.getClients);

module.exports = router;