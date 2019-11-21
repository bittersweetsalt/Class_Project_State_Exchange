const express = require('express');
const router = express.Router();
const path = require('path');
const db = require("../db/connection");


// we are going to generate the ids of the post  by passing parameters here in the future
router.post('/newpost', (req, res) => {
    if(!req.files){
        console.log("missing files")
        res.status(409).send({error: "missing files"});
    }else{
        let photo = req.files.photos;
        photo.mv(path.join(__dirname, '../', 'public', 'images', 'post_img', photo.name));
        res.send(path.join('images', 'post_img', photo.name));
    }
})

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