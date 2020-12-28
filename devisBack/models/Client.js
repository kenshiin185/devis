const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    _idUtilisateur: { type: String },
    raisonSocialeClient: { type: String },
    civiliteClient: { type: String },
    nomClient: { type: String },
    prenomClient: { type: String },
    adresseClient: { type: String },
    codePostalClient: { type: String },
    villeClient: { type: String },
    paysClient: { type: String },
    telClient: { type: String },
    dateCreationClient: { type: Date }
});

module.exports = mongoose.model('client', clientSchema);