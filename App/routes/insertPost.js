const express = require('express');
const router = express.Router();
const path = require('path');
const db = require("../db/connection");
var mkdirp = require('mkdirp');

//new post router, id is a unique id generated on frontend for each post
router.post(`/newpost/:id`, (req, res) => {

    //encapsulate req data into object
    let data = {
        Name: req.body.title,
        Category: req.body.category,
        UserID: 123456789, //needs to be changed later, this is a test value
        posting_ID: req.params.id,
        Comment: req.body.desc,
        Price: req.body.price
    }

    //if photo was uploaded, move to public directory & add filepath to data object
    if (req.files != null) {
        let filePath = path.join(__dirname, '../', 'public', 'images', 'post_img', req.params.id)

        //create new directory based on unique post id
        mkdirp(filePath, (err) => {
            if(err) {console.log("mkdirp error: " + err) }
        });

        //update filepath with photoname
        filePath = path.join(filePath, req.files.photo.name)

        //move photo from req into new directory
        let photo = req.files.photo
        photo.mv(filePath)

        //add filepath to data object
        data.image_name = filePath
    }

    let sql = "INSERT INTO Posting SET ?";
        
    db.query(sql, [data], (err, rows, results) => {
        if (err){
            console.log(err);
            res.end();
            return;
        }

        res.send(rows);
        })

})


module.exports = router;