var express = require('express');
var router = express();
var db = require('../db/connection');
const jwt = require('jsonwebtoken');

router.get('/:id', function(req, res, next) {

        

});

router.get('/details', function(req, res, next) {

  res.send('Details of resource here resource...');
  res.end();
  
});

router.post('/create', function(req, res, next) {

  console.log("#####-token-#######");
  
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  var decoded = jwt.decode(token, {complete: true});
  //console.log( decoded.payload.email );

  var sql_ = "SELECT * FROM `MessagesIndex` WHERE PostID=" + req.body.id;
  
  db.connect(function(err) {

    db.query(sql_, function (err, result) {

      console.log("res len: " + result.length)
        if (!err && result.length == 0) {
          
          var sql = "INSERT INTO `MessagesIndex`(`PostID`,`BuyerID`) VALUES('"+ req.body.id + "','" + decoded.payload.id + "')";

            db.connect(function(err) {

                db.query(sql, function (err, result_) {

                    //var resObj = {status: "ok", message: ''};
                    if (err) {
                      res.send({status: "error"});
                    } 

                    console.log("#######insertId########");
                    console.log(result_.insertId);
                    var id = null;
                    if(result_.insertId) {
                      id = result_.insertId;
                    }
                    res.send({status: "ok", id: id});
                });
            });


        } else if(result.length == 1){
          
          //res.send(resObj);
          res.send({status: "ok", id: result[0].ID});

        }

    });

  });
  

        

});

module.exports = router;
