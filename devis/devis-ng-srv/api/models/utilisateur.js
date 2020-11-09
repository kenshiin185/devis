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
    etatUtilisateur: String,
    utilisateurCreatedDate: Date,
    lastPaymentDate: Date
});

module.exports = mongoose.model('utilisateur', utilisateurSchema);