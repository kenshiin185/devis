const express = require('express');
const router = express.Router();
const utilisateurCtrl = require('../controllers/utilisateur');

router.post('/signup', utilisateurCtrl.signup);
router.post('/login', utilisateurCtrl.login);
router.post('/logout', utilisateurCtrl.logout);

module.exports = router;