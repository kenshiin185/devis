const Entete = require('../models/Entete');


exports.createEntete = (req, res, next) => {

    delete req.body._id;
    const entete = new Entete({
        ...req.body
    });
    entete.save()
        .then(() => res.status(201).json({ message: 'entête sauvegardée' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyEntete = (req, res, next) => {
    const enteteObject = { ...req.body };
    Entete.updateOne({ _id: req.params.id }, { ...enteteObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Entête modifiée !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteEntete = (req, res, next) => {
    Entete.findOne({ _id: req.params.id })
        .then(entete => {
            Entete.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: ' Entête supprimée !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getSingleEntete = (req, res, next) => {
    Entete.findOne({ _id: req.params.id })
        .then(entete => res.status(200).json(entete))
        .catch(error => res.status(400).json({ error }));
};

exports.getEntetes = (req,res,next) => {
    Entete.find()
    .then( entetes => res.status(200).json(entetes))
    .catch(error => res.status(400).json({ error }));
}