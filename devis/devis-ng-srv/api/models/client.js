const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    _idUtilisateur:String,
    raisonSocialeClient:String,
    civiliteClient:String,
    nomClient:String,
    prenomClient:String,
    adresseClient:String,
    codePostalClient:String,
    villeClient:String,
    paysClient:String,
    telClient:String,
    clientCreatedDate:Date
});

module.exports = mongoose.model('client', clientSchema);