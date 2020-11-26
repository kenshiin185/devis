const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const utilisateurSchema = mongoose.Schema({
    mailUtilisateur: { type: String, required: true, unique: true },
    passwordUtilisateur: { type: String, required: true },
    raisonSocialeUtilisateur: { type: String },
    civiliteUtilisateur: { type: String },
    nomUtilisateur: { type: String },
    prenomUtilisateur: { type: String },
    adresseUtilisateur: { type: String },
    codePostalUtilisateur: { type: String },
    villeUtilisateur: { type: String },
    telUtilisateur: { type: String },
    capitalSocialUtilisateur: { type: String },
    siretUtilisateur: { type: String },
    sirenUtilisateur: { type: String },
    actif: { type: Boolean },
    tvaIntraCommunautaire: { type: Number },
    dateInscriptionUtilisateur: { type: Date },
    rgpd: { type: String }
});

utilisateurSchema.plugin(uniqueValidator);

module.exports = mongoose.model('utilisateur', utilisateurSchema);