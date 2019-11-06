var express = require('express');
var router = express.Router();
// const path = require('path');
var db = require("../db/index");

/* GET vertical prototype */
router.get('/prototype', (req, res, next) => {
    res.sendFile('../views/prototype.html');
});

module.exports = router;
