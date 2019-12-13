const express = require('express');
const app = express();
app.use(express.json());
const db = require("../db/connection");
var router = express.Router();
const jwt = require('jsonwebtoken');

// getting the users postings 
router.post('/postings',( req, res)  => {
    
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    var decoded = jwt.decode(token, {
        complete: true
    });

    let sql = `SELECT * FROM posting WHERE UserID = '${decoded.payload.id}'`

    db.connect( err => {
        db.query(sql, (err, result) => {
            if(err){ 
                console.log(err)
                res.end()
            }
            
            res.send(result)
        })
    })
});

// updating a post that the user already had 
// router.get('/update',(req,res) => {})

// // creating a new post , which redirects to newposting
// router.get('/create',(req,res) => {
//     res.redirect('/newpost');
// });

// // delete a post from the user
// router.get('/delete',(req,res) => {
//     const querystring = ""
//     .then(() => {
//         res.json();
//     })
//     .catch((e) => {
//         res.json({status:'error'});
//     })
// });

module.exports = router;