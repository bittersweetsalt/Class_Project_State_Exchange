var express = require('express');
var app = express();
var router = express.Router();
const path = require('path');
var db = require("../db/connection");

// we are going to generate the ids of the post  by passing parameters here in the future

let id = 5;
router.post(`/insertPost/id:${id}` ,(req, res) => {

    // this is the data we are going to be sending 
    let data = { 
        Title: req.body.Title, 
        Category: req.body.Category,
        Price: req.body.price,
        Desc: req.body.desc
        
    }

    let sql = "INSERT INTO Posting SET ?";


    db.getConnection((err, connection) => {

        db.query(sql, data, (err, res, fields) => {
            console.log(req.query.query);

            if(error){
                console.log(error);
            }
            else{
                res.status(201).send(`Post added with ID: ${res.ID}`);
                res.redirect('/newPosting.html');
            }
           
        })
       
    })
})


//grabbing th endpoint created by vue 
app.post('', function(req,res){
    console.log(req.body);
    res.send('POST request received successfully');
})

module.exports = router;