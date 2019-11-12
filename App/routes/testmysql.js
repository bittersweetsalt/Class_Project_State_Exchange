var express = require('express');
var router = express.Router();
const path = require('path');
var db = require("../db/connection");

/* GET vertical prototype */
router.get('/testmysql', (req, res, next) => {

    db.getConnection( (err, connection) => {

        var search_function = req.body.query;
        var search_string = `SELECT Name, Category FROM Posting WHERE Name, Category LIKE '%${search_function}'`;

        db.query(search_string, (error, results, fields) => {
            console.log(req.query.query);
            if(error){
                console.log(error);
            } else{
                res.send(results);
            }
        })
        db.release();
    })
});

module.exports = router;
