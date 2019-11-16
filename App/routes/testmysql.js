var express = require('express');
var router = express.Router();
const path = require('path');
//const mysql = require('mysql');
var db = require("../db/connection");


/*Simple parameter mysql query fetch.*/
/*Able to only grab from Posting via ID only.*/
router.get('/testmysql/:id', (req, res, next) => {

    const userID = req.params.id;
    const queryString = 'SELECT * FROM Posting WHERE id = ?'
    connection.query(queryString, [userID], (err, rows, fields) => {
        if (err){
            console.log("Failed: " + err);
            res.end();
            return;
        }
      
        console.log('Found database fetch');
        res.send(rows);

    })
    //res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
