var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/newpost', (req, res, next) => {
    res.render('newpost');
    // res.sendFile(path.join(__dirname, '../views/newpost.html'));
});

module.exports = router;
