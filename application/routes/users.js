var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var db = require("../db/connection");
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.get('/details', function(req, res, next) {

  res.send('Details of resource here resource...');
  res.end();
  
});

router.post('/register', function(req, res) {

  bcrypt.hash(req.body.password, 10).then( hash => {
    let data = {   
      email: req.body.email,
      password: hash,
      //password: req.body.password,
      name: req.body.name
    }
    
    let sql = "INSERT INTO User SET ?";
  
    db.connect(function(err) {
  
      db.query(sql, [data], function (err, result) {
  
          var resObj = {status: "ok", message: ''};
  
          if (err) {
            resObj.status = "error: user.js";
            resObj.message = err.message;
          } else {
            resObj.status = "ok";
            resObj.message = "Registration successfull!";
          }
  
          res.send(resObj);
  
      })
  
    })
  })
})

router.post('/getUserID', (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    var decoded = jwt.decode(token, {
        complete: true
    });

    let sql = `SELECT name from User where ID = ${decoded.payload.id}`

    db.connect(err => {
        db.query(sql, (err, result) => {
            if(err){ 
                console.log("/users/getUserID", err)
                res.end()
            }
            
            res.send(result)
        })
    })
})

module.exports = router;
