const express = require('express');

const router = express.Router();
const articleCtrl = require('../controllers/article');
const auth = require('../middleware/auth');

router.post('/', auth, articleCtrl.createArticle);

router.delete('/:id', auth, articleCtrl.deleteArticle);

router.put('/:id', auth, articleCtrl.modifyArticle);

router.get('/:id', auth, articleCtrl.getSingleArticle);

router.get('/', auth, articleCtrl.getArticles);

module.exports = router;