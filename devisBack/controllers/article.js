const Article = require('../models/Article');


exports.createArticle = (req, res, next) => {
    const articleObject = JSON.parse(req.body.article);
    delete articleObject._id;
    const article = new Article({
        ...articleObject
    });
    article.save()
        .then(() => res.status(201).json({ message: 'article sauvegardé' }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyArticle = (req, res, next) => {
    const articleObject = { ...req.body };
    Article.updateOne({ _id: req.params.id }, { ...articleObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Article modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteArticle = (req, res, next) => {
    Article.findOne({ _id: req.params.id })
        .then(article => {
            Article.deleteOne({ _id: req.params.id })
                .then(() => res.status(200).json({ message: ' Article supprimé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getSingleArticle = (req, res, next) => {
    Article.findOne({ _id: req.params.id })
        .then(article => res.status(200).json(article))
        .catch(error => res.status(400).json({ error }));
};

exports.getArticles = (req,res,next) => {
    Article.find()
    .then(()=> res.status(200).json(articles))
    .catch(error => res.status(400).json({ error }));
}
