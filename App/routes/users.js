var express = require('express');
var router = express.Router();
var db = require('../db/connection');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/details', function(req, res, next) {

  res.send('Details of resource here resource...');
  res.end();
  
});

router.post('/register', function(req, res, next) {

  var sql = "INSERT INTO `User`(`email`,`name`, `password`) VALUES('"+ req.body.email + "','" + req.body.name + "','" + req.body.password + "')";

        db.connect(function(err) {

            db.query(sql, function (err, result) {

                var resObj = {status: "ok", message: ''};

                if (err) {
                  resObj.status = "error";
                  resObj.message = err.message;
                } else {
                  resObj.status = "ok";
                  resObj.message = "Registration successfull!";
                }

                res.send(resObj);

            });

        });

});

module.exports = router;
