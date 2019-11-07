const express = require('express');
const router  = express.Router();
const jwt      = require('jsonwebtoken');
const passport = require('passport');
const db = require('../db/config');

/* POST login. */
router.post('/login', function (req, res, next) {

    passport.authenticate('local', {session: false}, (err, user, info) => {
        
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }

            const token = jwt.sign(user, 'your_jwt_secret', {
                expiresIn: 604800 // 1 week
              });

            return res.json({token});
        });
    })
    (req, res);

});


router.post('/register', function(req, res, next) {


	var resObj  = {};
	resObj.status = "OK";
	resObj.message = "Registration Complete!";
	
	console.log(req.body);
	
	  
	var sql = "INSERT INTO User(email, password, name) VALUES('"+ req.body.data.email + "','" + req.body.data.password + "','" + req.body.data.name + "')";

	db.connect(function(err) {

		db.query(sql, function (err, result) {

			
			if (err) {
				
				// handle exception
				
			}
	
		

		});

	});
        
        
	  
	  
	  res.send(resObj);
	  res.end();
  
});

module.exports = router;
