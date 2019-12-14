const passport = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
var db = require('../db/connection');
const bcryptjs = require("bcryptjs");


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb) => {

    var sql = `SELECT password, email, id FROM User WHERE email= '${email}'`;
    
    db.connect(function (err) {
        db.query(sql, function (err, result) {
            //////
            console.log("results", result[0]['password']);
            try{
                if(bcryptjs.compare(password, result[0]['password']))  {
                    
                    if (err) return cb(err);
    
                    //converting result into simple object for passing to cb
                    var user = {};
                    user.email = result[0]['email'];
                    user.id = result[0]['id'];
    
                    return cb(null, user, {
                        message: 'Logged In Successfully'
                    });
                  }
                else {
                    return cb(null, false, {
                        message: 'Incorrect email or password.'
                    });
                }
            }
            catch(e){
                console.log(e)
            }
            
        });
    });
}));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'your_jwt_secret'
    },
    function (jwtPayload, cb) {

        //find the user in db if needed with jwtPayload.id
        // DB query goes here..
        return cb(null, {});
    }
));

passport.serializeUser((user, done) => {
    return done(null, user)
})
passport.deserializeUser((user, done) => {
    return done(null, user)
})