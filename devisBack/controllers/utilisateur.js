const bcrypt = require('bcrypt');
const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/Utilisateur');

exports.signup = (req, res, next) => { // Création d'un utilisateur avec hash du mot de passe
    bcrypt.hash(req.body.passwordUtilisateur, 10)
        .then(hash => {
            const utilisateur = new Utilisateur({
                mailUtilisateur: req.body.mailUtilisateur,
                passwordUtilisateur: hash,
                raisonSocialeUtilisateur: req.body.raisonSocialeUtilisateur,
                civiliteUtilisateur: req.body.civiliteUtilisateur,
                nomUtilisateur: req.body.nomUtilisateur,
                prenomUtilisateur: req.body.prenomUtilisateur,
                adresseUtilisateur: req.body.adresseUtilisateur,
                codePostalUtilisateur: req.body.codePostalUtilisateur,
                villeUtilisateur: req.body.villeUtilisateur,
                telUtilisateur: req.body.telUtilisateur,
                capitalSocialUtilisateur: req.body.capitalSocialUtilisateur,
                siretUtilisateur: req.body.siretUtilisateur,
                sirenUtilisateur: req.body.sirenUtilisateur,
                actif: false,
                tvaIntraCommunautaire: req.body.tvaIntraCommunautaire,
                dateInscriptionUtilisateur: Date.now(),
                rgpd: req.body.rgpd
            });
            utilisateur.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
    Utilisateur.findOne({ mailUtilisateur: req.body.mailUtilisateur })
        .then(utilisateur => {
            if (!utilisateur) { // si utilisateur non trouvé en base ...
                return res.status(401).json({ message: 'Utilisateur non trouvé !' }); // fait péter erreur non trouvé !
            }
            bcrypt.compare(req.body.passwordUtilisateur, utilisateur.passwordUtilisateur) // si l'utilisateur est trouvé alors on compare les deux hashs
                .then(valid => { // est-il valide ??
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' }); // pas valid tu rentres pas !
                    }
                    res.status(200).json({ // valide ok on te fait un token 
                        userId: utilisateur._id,
                        token: jwt.sign(
                            { userId: utilisateur._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};