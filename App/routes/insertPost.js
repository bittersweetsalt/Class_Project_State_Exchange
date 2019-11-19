var express = require('express');
var app = express();
var router = express.Router();
const path = require('path');
var db = require("../db/connection");
const axios = require('axios');

// we are going to generate the ids of the post  by passing parameters here in the future


router.post(`/newpost/12` ,(req, res) => {

        
        // this dummy data we send
        let data = { 
                              
            Title: req.body.Title,
            category: req.body.category,
            UserID: 91928395,
            Desc: req.body.Comment,
            Price: req.body.Price,
        }
  

        let sql = "INSERT INTO Posting SET ?";
        
        db.query(sql, [data], (err, results) => {
            
            if (err){
                console.log("Failed: " + err);
                res.end();
                return;
            }
              
            console.log('Found database.... 1 Record inserted');
        
                // A simple "Your item has been submitted" Response Page.
                // Setup Date: 11/14/2019
            res.send(rows);
            })

  })    
        

//grabbing th endpoint created by vue 
// app.post('', function(req,res){
//     console.log(req.body);
//     res.send('POST request received successfully');
// })

module.exports = router;