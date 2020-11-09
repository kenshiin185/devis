const express = require('express');
const router = express.Router();

/*************************************************** */
const Article = require('../models/article');
const Utilisateur = require('../models/utilisateur');
const Client = require('../models/client');
const Entete = require('../models/entete');
const { json } = require('body-parser');
/************************************************** */

router.get('/allo', (req, res) => {
    res.status(200).json({ msg: ' à l\'huile!!! :)', date: new Date() });
}); // localhost:3000/test

router.get('/articles', (req, res) => {
    const articles = [
        {
            id: 1,
            ref: 'articleRef1',
            designation: 'article 1',
            prix: 80
        },
        {
            id: 2,
            ref: 'articleRef2',
            designation: 'article 2',
            prix: 50
        },
        {
            id: 3,
            ref: 'articleRef3',
            designation: 'article 3',
            prix: 800
        },
        {
            id: 4,
            ref: 'articleRef4',
            designation: 'article 4',
            prix: 150
        },
    ];
    res.status(200).json({ msg: 'voici la liste de vos articles ', articles });
});

router.post('/article', (req,res) => { //créer un article
    console.log('req.body', req.body); //TODO effacer cette ligne
    const article = new Article(req.body);
    article.save((err, article) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(article);
    });
});

router.post('/utilisateur', (req,res) => { //créer un utilisateur
    const utilisateur = new Utilisateur(req.body);
    utilisateur.save((err, utilisateur) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(utilisateur);
    });
});

router.post('/client', (req,res) => { // créer un client
    console.log('req.body', req.body); //TODO effacer cette ligne
    const client = new Client(req.body);
    client.save((err, client) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(201).json(client);
    });
});

router.post('/entete', (req,res) => { // créer une entête
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