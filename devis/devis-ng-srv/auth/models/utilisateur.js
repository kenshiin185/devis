const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
    // username:{ type: String, required:true},
    // password: { type:String,required: true},
    // createdOn: { type: Date, default: Date.now },
    raisonSocialeUtilisateur: { type: String, required: true },
    civiliteUtilisateur: { type: String, required: true },
    nomUtilisateur: { type: String, required: true },
    prenomUtilisateur: { type: String, required: true },
    adresseUtilisateur: { type: String, required: true },
    codePostalUtilisateur: { type: String, required: true },
    villeUtilisateur: { type: String, required: true },
    telUtilisateur: { type: String, required: true },
    capitalSocialUtilisateur: { type: String, required: true },
    siretUtilisateur: { type: String, required: true },
    sirenUtilisateur: { type: String, required: true },
    mailUtilisateur: { type: String, required: true },
    passwordUtilisateur: { type: String, required: true },
    actif: { type: Boolean, required: true },
    tvaIntraCommunautaireUtilisateur: { type: String, required: true },
    dateInscriptionUtilisateur: { type: Date, default: Date.now() },
    // lastPaymentDate: Date,
    rgpd: { type: String, required: true },
});

module.exports = mongoose.model(' utilisateur ', utilisateurSchema);