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

/*************************CLIENT****************************************** */
router.get('/client', (req,res) => {
    Client.find()
    .sort({ 'createdOn': -1})
    .exec().then(client => res.status(200).json(client))
    .catch(err => res.status(500).json({
        message: 'client introuvable (:(>',
        error:err
    }));
});

router.get('/client/:id', (req, res) => {
    const id = req.params.id;
    Client.findById(id)
        .then(client => res.status(200).json(client))
        .catch(err => res.status(500).json({
            message: `client avec l'Id ${id} introuvable (:(>`,
            error: err
        }));
});

/**************************ENTETE**************************************** */
router.get('/entete', (req,res) => {
    Entete.find()
    .sort({ 'createdOn': -1})
    .exec().then(entete => res.status(200).json(entete))
    .catch(err => res.status(500).json({
        message: 'entete introuvable (:(>',
        error:err
    }));
});

router.get('/entete/:id', (req, res) => {
    const id = req.params.id;
    Entete.findById(id)
        .then(entete => res.status(200).json(entete))
        .catch(err => res.status(500).json({
            message: `client avec l'Id ${id} introuvable (:(>`,
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

  /************************************************************************* */
 /**********************ROUTES PUT **************************************** */
/************************************************************************* */

/********************ARTICLE******************************************** */
router.put('/article/:id', (req,res) => {
    const id = req.params.id;
    const conditions = {_id: id };
    const article = { ...req.body };
    const update = { $set: article };
    const options = {
        upsert: true,
        new: true
    };
    Article.findOneAndUpdate(conditions, update, options, (err, response) => {
        if(err){return res.status(500).json({ message: 'échec de la mise à jour', error:err });} 
        res.status(200).json({ message: `l'article avec l'id ${id} a bien été mis à jour :)`});
    });
});

/********************CLIENT******************************************** */
router.put('/client/:id', (req,res) => {
    const id = req.params.id;
    const conditions = {_id: id };
    const client = { ...req.body };
    const update = { $set: client };
    const options = {
        upsert: true,
        new: true
    };
    Client.findOneAndUpdate(conditions, update, options, (err, response) => {
        if(err){return res.status(500).json({ message: 'échec de la mise à jour', error:err });} 
        res.status(200).json({ message: `le client avec l'id ${id} a bien été mis à jour :)`});
    });
});

/********************UTILISATEUR******************************************** */
router.put('/utilisateur/:id', (req,res) => {
    const id = req.params.id;
    const conditions = {_id: id };
    const utilisateur = { ...req.body };
    const update = { $set: utilisateur };
    const options = {
        upsert: true,
        new: true
    };
    Utilisateur.findOneAndUpdate(conditions, update, options, (err, response) => {
        if(err){return res.status(500).json({ message: 'échec de la mise à jour', error:err });} 
        res.status(200).json({ message: `l'utilisateur avec l'id ${id} a bien été mis à jour :)`});
    });
});

/********************ENTETE******************************************** */
router.put('/entete/:id', (req,res) => {
    const id = req.params.id;
    const conditions = {_id: id };
    const entete = { ...req.body };
    const update = { $set: entete };
    const options = {
        upsert: true,
        new: true
    };
    Entete.findOneAndUpdate(conditions, update, options, (err, response) => {
        if(err){return res.status(500).json({ message: 'échec de la mise à jour', error:err });} 
        res.status(200).json({ message: `l'en-tête avec l'id ${id} a bien été mis à jour :)`});
    });
});

  /********************************************************************** */
 /***********************ROUTES DELETE********************************** */
/********************************************************************** */

/************************ARTICLE************************************* */
router.delete('/article/:id', (req,res) => {
    const id = req.params.id;
    Article.findByIdAndDelete(id, (err,article) => {
        if (err) {
            return res.status(500).json({ message: `échec de la suppression de l'article avec l'id ${id} :(`});
        }
        res.status(202).json({ message: `Suppression de l'article avec l'id ${id} effectuée avec succès :)`});
    });
});

/************************CLIENT************************************* */
router.delete('/client/:id', (req,res) => {
    const id = req.params.id;
    Client.findByIdAndDelete(id, (err,client) => {
        if (err) {
            return res.status(500).json({ message: `échec de la suppression du client avec l'id ${id} :(`});
        }
        res.status(202).json({ message: `Suppression du client avec l'id ${id} effectuée avec succès :)`});
    });
});

/************************UTILISATEUR************************************* */
router.delete('/utilisateur/:id', (req,res) => {
    const id = req.params.id;
    Utilisateur.findByIdAndDelete(id, (err,utilisateur) => {
        if (err) {
            return res.status(500).json({ message: `échec de la suppression de l'utilisateur avec l'id ${id} :(`});
        }
        res.status(202).json({ message: `Suppression de l'utilisateur avec l'id ${id} effectuée avec succès :)`});
    });
});

/************************ENTETE************************************* */
router.delete('/entete/:id', (req,res) => {
    const id = req.params.id;
    Entete.findByIdAndDelete(id, (err,entete) => {
        if (err) {
            return res.status(500).json({ message: `échec de la suppression de l'en-tête avec l'id ${id} :(`});
        }
        res.status(202).json({ message: `Suppression de l'en-tête avec l'id ${id} effectuée avec succès :)`});
    });
});


module.exports = router;