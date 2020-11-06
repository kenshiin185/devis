const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    _idArticle:String,
    _idDevis:String,
    _idClient:String,
    _idUtilisateur:String,
    typeArticle:String,
    refArticle:String,
    libelle:String,
    prix:Number,
    unite:Number,
    coefficient:Number
});

module.exports = mongoose.model('article', articleSchema);

