const express = require('express');
const router = express.Router();
const utilisateurCtrl = require('../controllers/utilisateur');

router.post('/signup', utilisateurCtrl.signup);
router.post('/login', utilisateurCtrl.login);
router.get('/:id', utilisateurCtrl.getSingleUtilisateur);
router.post('/logout', utilisateurCtrl.logout);

module.exports = router;