const express = require('express');
const router = require('./api/v1/index');
const app = express();
const api = require('./api/v1/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connection = mongoose.connection;
app.set('port', (process.env.port || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/v1', api); // localhost:3000/api/v1
app.use((req, res) => {
    const err = new Error('404 - Impossible de trouver la page :(>'); // en cas d'erreur de saise dans l'url
    err.status = 500;
    res.json({ msg: '404 - Impossible de trouver la page :(>', err: err });
});

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



