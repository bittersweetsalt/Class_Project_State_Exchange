var express = require('express');
var router = express.Router();
const path = require('path');
var db = require("../db/connection");

/* GET vertical prototype */
router.get('/prototype', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../views/html/prototype.html'));
});

module.exports = router;
