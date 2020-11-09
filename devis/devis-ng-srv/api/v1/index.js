const express = require('express');
const router = express.Router();


/*************************************************** */
const Article = require('../models/article');
const Utilisateur = require('../models/utilisateur');
const Client = require('../models/client');
const Entete = require('../models/entete');
const { json } = require('body-parser');
/************************************************** */



/************************************************************************ */
/**************ROUTES GET *********************************************** */
/************************************************************************ */

router.get('/allo', (req, res) => {
    res.status(200).json({ msg: ' à l\'huile!!! :)', date: new Date() });
}); // localhost:3000/test

/*************************ARTICLE**************************************** */
router.get('/article', (req, res) => { // afficher la liste des articles
    Article.find()
        .sort({ 'createdOn': -1 })
        .exec()
        .then(article => res.status(200).json(article))
        .catch(err => res.status(500).json({
            message: 'article introuvable (:(>',
            error: err
        }));

});

router.get('/article/:id', (req, res) => {
    const id = req.params.id;
    Article.findById(id)
        .then(article => res.status(200).json(article))
        .catch(err => res.status(500).json({
            message: `article avec l'Id ${id} introuvable (:(>`,
            error: err
        }));
});

/**************************UTILISATEUR****************************************** */
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
    const id = req.params.id;
    Utilisateur.findById(id)
        .then(utilisateur => res.status(200).json(utilisateur))
        .catch(err => res.status(500).json({
            message: `utilisateur avec l'Id ${id} introuvable (:(>`,
            error: err
        }));
});


/************************************************************************ */
/**************ROUTES POST *********************************************** /
/************************************************************************ */

router.post('/article', (req, res) => { //créer un article
    console.log('req.body', req.body); //TODO effacer cette ligne
    const article = new Article(req.body);
    article.save((err, article) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(article);
    });
});

router.post('/utilisateur', (req, res) => { //créer un utilisateur
    const utilisateur = new Utilisateur(req.body);
    utilisateur.save((err, utilisateur) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(utilisateur);
    });
});

router.post('/client', (req, res) => { // créer un client
    console.log('req.body', req.body); //TODO effacer cette ligne
    const client = new Client(req.body);
    client.save((err, client) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(client);
    });
});

router.post('/entete', (req, res) => { // créer une entête
    console.log('req.body', req.body); // TODO éffacer cette ligne
    const entete = new Entete(req.body);
    entete.save((err, entete) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(entete);
    });
});

module.exports = router;