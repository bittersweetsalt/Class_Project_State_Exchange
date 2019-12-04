var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
var db = require("../db/connection");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

/*Simple parameter mysql query fetch.*/
router.post('/testmysql', (req, res, next) => {
    console.log('Log of body: ', req.body.query);
    //const userID = req.params.id;
    const queryString = `SELECT * FROM Posting WHERE Name LIKE '%${req.body.query}%'`
    db.query(queryString, (err, rows, fields) => {
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


// Router. Sample data to insert into our database
// Modification to obtain query data is needed.
// Data ideally obtain from newpost.html via FORM
// Setup date: 11/14/2019
router.get('/insertPost', (req, res) => {

    // this dummy data we send
    let data = { 
        ID: '13',                   
        Name: 'Test_Name',
        category: 'Test_Cat',
        UserID: 000000000,
        Comment: 'Test Comment',
        price: 0,
    }

    let sql = "INSERT INTO Posting SET ?";
    db.query(sql, [data], (err, rows, fields) => {
        if (err){
            console.log("Failed: " + err);
            res.end();
            return;
        }
      
        console.log('Found database.... Insert Data');

        // A simple "Your item has been submitted" Response Page.
        // Setup Date: 11/14/2019
        res.send(rows);
    })
})

module.exports = router;
