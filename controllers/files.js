const express = require('express');
const fileModel = require('../models/file');
const router = express.Router();

router.get('/', (req, res) => {
    fileModel.getPublicFiles(res);
});

router.get('/private', (req, res) => {
    fileModel.getPrivateFiles(res);
});

router.post('/add', (req, res) => {
    const file=req.body;
    fileModel.saveFile(res,file);
});

router.post('/exists', (req, res) => {
    const file = req.body;
    fileModel.checkIfExists(res, file);
});


module.exports = router;