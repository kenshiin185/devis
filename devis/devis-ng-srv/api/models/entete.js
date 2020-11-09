const mongoose = require('mongoose');

const enteteSchema = new mongoose.Schema({
    _idUtilisateur:String,
    logo:String,
    raisonSociale:String,
    adresse:String,
    codePostal:String,
    ville:String,
    tel:String,
    capitalSocial:String,
    siret:String
});

module.exports = mongoose.model('entete', enteteSchema);