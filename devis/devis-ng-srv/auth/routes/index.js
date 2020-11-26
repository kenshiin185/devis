const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/utilisateur');
const passport = require('passport');
var bcrypt = require('bcryptjs');
router.post('/register', (req, res) => {
    const newUtilisateur = new Utilisateur(req.body);
    newUtilisateur.save((err, user) => {
        if (err) {
            return res.status(500).json(err);
        }
        req.login(req.body, (err) => {
            if (err) {
                console.log('erreur :( | req.logIn()', err);
            }
            var bcrypt = require('bcryptjs');
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash("B4c0/\/", salt, function (err, hash) {
                    // Store hash in your password DB.
                });
            });
            res.status(201).json(user);
        });
    });
});

router.get('/utilisateur', (req, res) => { // afficher la liste des utilisateurs
    Utilisateur.find()
        .sort({ 'createdOn': -1 })
        .exec()
        .then(utilisateur => res.status(200).json(utilisateur))
        .catch(err => res.status(500).json({
            message: 'utilisateur introuvable (:(>',
            error: err
        }));
});

router.get('/utilisateur/:id', (req, res) => {
    const id = req.params.id
    Utilisateur.findById(id)
        .then(utilisateur => res.status(200).json(utilisateur))
        .catch(err => res.status(500).json({
            message: `utilisateur avec l'Id ${id} introuvable (:(>`,
            error: err
        }));
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure'
}));
router.get('/logout', (req, res) => {
    req.logOut();
    res.status(200).json({ message: 'vous êtes maintenant déconnecté(e)' });
})

router.get('/success', (req, res) => {
    res.status(200).json(req.user);
});

router.get('/failure', (req, res) => {
    res.status(500).json({ message: 'pas loggé' });
});
module.exports = router;