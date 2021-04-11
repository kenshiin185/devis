const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const cors = require('cors');
const app = express();
const utilisateurRoutes = require('./routes/utilisateur');
const articleRoutes = require('./routes/article');
const enteteRoutes = require('./routes/entete');
const clientRoutes = require('./routes/client');
const path = require('path');

app.use(cors({credentials:true, origin:'http://localhost:4200'}));



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
app.use('/api/images', express.static(path.join(__dirname, 'images')));
app.use('/api/article/', articleRoutes);
app.use('/api/entete/', enteteRoutes);
// app.use('/api/utilisateur/', utilisateurRoutes);
app.use('/api/auth', utilisateurRoutes);
app.use('/api/client', clientRoutes)
module.exports = app;
