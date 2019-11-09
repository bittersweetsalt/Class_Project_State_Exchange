var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/newpost', (req, res, next) => {
    res.sendFile('../views/newpost.html');
});

module.exports = router;
