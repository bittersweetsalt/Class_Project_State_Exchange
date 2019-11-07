var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/prototype', (req, res, next) => {
    res.sendFile('../views/index.html');
});

module.exports = router;
