const express = require('express');
const router = express.Router();
const path = require('path');
const db = require("../db/connection");

router.post('/newpost', (req, res) => {
    let pathNames = [];

    //check to make sure files are not empty
    if(!req.files){
        console.log("missing files")
        res.status(409).send({error: "missing files"});
    }
    
    //loop through keys in req.files obj and move each file to public directory, push filepath to pathnames array
    for(var key in req.files){
        let photo = req.files[key];
        photo.mv(path.join(__dirname, '../', 'public', 'images', 'post_img', photo.name));
        pathNames.push(path.join('images', 'post_img', photo.name));
    }

    //send pathnames of all uploaded images back to client
    res.send(pathNames);
})

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
module.exports = router;