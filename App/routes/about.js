var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/about', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/about/about.html'));
});

router.get('/about/roderic', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/about/roderic.html'));
});

router.get('/about/chris', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/about/chris.html'));
});

router.get('/about/deep', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/about/deep.html'));
});

module.exports = router;
