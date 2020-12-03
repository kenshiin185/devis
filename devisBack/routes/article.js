const express = require('express');

const router = express.Router();
const articleCtrl = require('../controllers/article');
// const auth = require('../middleware/auth');

router.post('/', articleCtrl.createArticle);

router.delete('/:id', articleCtrl.deleteArticle);

router.put('/:id', articleCtrl.modifyArticle);

router.get('/:id', articleCtrl.getSingleArticle);

router.get('/', articleCtrl.getArticles);

module.exports = router;