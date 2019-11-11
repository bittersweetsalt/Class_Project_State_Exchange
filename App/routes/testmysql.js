var express = require('express');
var router = express.Router();
const path = require('path');
var db = require("../db/connection");

/* GET vertical prototype */
router.get('/testmysql', (req, res, next) => {
    db.getConnection( (err, connection) => {
        db.query('SELECT * FROM Posting', (error, results, fields) => {
            console.log(req.query.query);
            if(error){
                console.log(error);
            } else{
                res.render('search', searchResults = {
                    query: req.query.query,
                    posts: data 
                })
            }
        })

        // connection.release();
    })
});

module.exports = router;
