const express = require('express');
const router = require('./api/v1/index');
const app = express();
const api = require('./api/v1/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./auth/routes');
const mongoose = require('mongoose');
const connection = mongoose.connection;
app.set('port', (process.env.port || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({credentials:true, origin:'http://localhost:4200'}));


/*****PASSPORT AUTHENTICATION **************/
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Strategy = require('passport-local').Strategy;

const Utilisateur = require('./auth/models/utilisateur');


app.use(cookieParser());
app.use(session({
    secret:'53CR37P455F0R4u7H',
    resave:true,
    saveUninitialized:true,
    name: 'devis-cookie'
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

passport.use(new Strategy({
    usernameField:'mailUtilisateur',
    passwordField:'passwordUtilisateur'
}, (name, pwd, cb) => {
    Utilisateur.findOne({mailUtilisateur: name}, (err, user) => {
        if (err) {
            console.log(`${name} n\'a pas été trouvé dans la base de données :(`, err);
        }
        if (user.passwordUtilisateur !== pwd) {

            console.log('C\'est pas le bon mot de passe');
        }else {
            console.log(`Vous êtes authentifié avec succès ${name} `);
            cb(null, user);
        }
    });
}));


/*********************************** */

app.use('/api/v1', api); // localhost:3000/api/v1
app.use('/auth', auth);
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



