const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const cors = require('cors');
const app = express();
const utilisateurRoutes = require('./routes/utilisateur');
const articleRoutes = require('./routes/article');
const path = require('path');
//TODO ajouter ici les imports de routes pour les différentes collections


/************************************************************************ */

/**********Connexion à la base de données****************************** */
mongoose.connect('mongodb://localhost:27017/devis', { useNewUrlParser: true });
connection.on('error', (err) => {
    console.error(`Echec de la connexion à la base de données :(> ${err.message}`);
});

connection.once('open', () => {
    console.log('Connexion à la base de données MongoDB réussie avec succès :)>');
    app.listen(app.get('port'), () => {
        console.log(`le serveur express écoute sur le port ${app.get('port')}`);
    });
});

/*****************UTILISATION DES MIDDLEWARES *************************/
app.get('/test', (req,res) => {
    res.status(200).json({ message: 'Connexion de test réussie :)'});
});

app.use(bodyParser.json());
app.use('/api/auth', utilisateurRoutes);
app.use('/api/auth', articleRoutes)

module.exports = app;
