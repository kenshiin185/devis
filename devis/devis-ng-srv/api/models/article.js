const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    _idUtilisateur:String,
    typeArticle:String,
    refArticle:String,
    libelle:String,
    prix:Number,
    coefficient:Number
});

module.exports = mongoose.model('article', articleSchema);

