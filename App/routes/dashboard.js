var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/dashboard', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/dashboard.html'));
});

module.exports = router;