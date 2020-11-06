const express = require('express');
const router = express.Router();
const Article = require('../models/article');
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

router.post('/article', (req,res) => {
    console.log('req.body', req.body);
    const article = new Article(req.body);
    article.save((err, article) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(article);
    });
});

module.exports = router;