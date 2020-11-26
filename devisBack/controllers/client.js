const Client = require('../models/Client');


exports.createClient = (req, res, next) => {
    const clientObject = JSON.parse(req.body.client);
    delete clientObject._id;
    const client = new Client({
        ...clientObject
    });
    client.save()
        .then(() => res.status(201).json({ message: 'client sauvegardé' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyClient = (req, res, next) => {
    const clientObject = { ...req.body };
    Client.updateOne({ _id: req.params.id }, { ...clientObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Client modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteClient = (req, res, next) => {
    Client.findOne({ _id: req.params.id })
        .then(client => {
            Client.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: ' Client supprimé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getSingleClient = (req, res, next) => {
    Client.findOne({ _id: req.params.id })
        .then(client => res.status(200).json(client))
        .catch(error => res.status(400).json({ error }));
};

exports.getClients = (req,res,next) => {
    Client.find()
    .then(()=> res.status(200).json(articles))
    .catch(error => res.status(400).json({ error }));
}
