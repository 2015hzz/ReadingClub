﻿var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');
var ctrlOthers = require('../controllers/other');

router.get('/', ctrlOthers.angularApp);

router.get('/about', homeController.about);
router.get('/books', homeController.books);
router.get('/book/create', homeController.bookcreateview);
router.post('/book/create', homeController.doBookCreate);
router.delete('/book/:id', homeController.delete);
router.post('/uploadImg', homeController.uploadImg);
router.get('/detail/:id', homeController.detail);


module.exports = router;


