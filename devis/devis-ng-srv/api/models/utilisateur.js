const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    raisonSocialeUtilisateur: String,
    civiliteUtilisateur: String,
    nomUtilisateur: String,
    prenomUtilisateur: String,
    adresseUtilisateur: String,
    codePostalUtilisateur: String,
    villeUtilisateur: String,
    telUtilisateur: String,
    capitalSocialUtilisateur: String,
    siretUtilisateur: String,
    sirenUtilisateur: String,
    mailUtilisateur: String,
    passwordUtilisateur: String,
    actif: Boolean,
    tvaIntraCommunautaire: String,
    dateInscriptionUtilisateur: Date,
    // lastPaymentDate: Date,
    rgpd: String
});

module.exports = mongoose.model('utilisateur', utilisateurSchema);