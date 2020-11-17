const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/utilisateur');
const passport = require('passport');
router.post('/register', (req,res) => {
    const newUtilisateur = new Utilisateur(req.body);
    newUtilisateur.save((err, user) => {
        if (err) {
            return res.status(500).json(err);
        }
        req.login(req.body, (err) => {
            if (err) {
                console.log('erreur :( | req.logIn()', err);
            }
            res.status(201).json(user);
        });
    });
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect:'/auth/failure'
}));
router.get('/logout', (req,res) => {
    req.logOut();
    res.status(200).json({ message: 'vous êtes maintenant déconnecté(e)'});
})

router.get('/success', (req, res) => {
    res.status(200).json({ message: 'loggé', user: req.user});
});

router.get('/failure', (req, res) => {
    res.status(500).json({ message:'pas loggé'});
});
module.exports = router;