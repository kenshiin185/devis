const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    _idUtilisateur: { type: String },
    typeArticle: { type: String },
    refArticle: { type: String },
    libelle: { type: String },
    prix: { type: Number },
    coefficient: { type: Number }
});

module.exports = mongoose.model('article', articleSchema);