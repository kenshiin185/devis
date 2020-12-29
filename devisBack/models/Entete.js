const mongoose = require('mongoose');

const enteteSchema = mongoose.Schema({
    _idUtilisateur: { type: String },
   
    raisonSociale: { type: String },
    adresse: { type: String },
    codePostal: { type: String },
    ville: { type: String },
    tel: { type: String },
    capitalSocial: { type: String },
    siret: { type: String },
    siren: { type: String }
});

module.exports = mongoose.model('entete', enteteSchema);