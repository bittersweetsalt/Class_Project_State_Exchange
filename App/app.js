const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var cors = require('cors');
var db = require("./db/connection");

//routes import
const fileRouter = require('./routes/files');
const prototypeRouter = require('./routes/prototype');
const testMySqlRouter = require('./routes/testmysql');
var usersRouter = require('./routes/users');

const passport    = require('passport');
require('./auth/passport');

const app = express();

const auth = require('./routes/auth');
app.use('/auth', auth);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

//middleware
// app.use(cors); // npm install --save cors
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes setup
app.use('/', fileRouter);
app.use('/', prototypeRouter);
app.use('/', testMySqlRouter);
//routes setup
app.use('/', fileRouter);
app.use('/', search_query);
app.use('/', newPostRouter);
app.use('/users', usersRouter); //passport.authenticate('jwt', {session: false}),




//making a new post
app.post('/newpost/12', function(req,res){
 

  console.log('headersSent', res.headersSent);
  res.send('POST request has been made');
  console.log(req.body);

  let data = { 
                              
    Title: req.body.Title,
    category: req.body.category,
    UserID: req.body.UserID,
    Desc: req.body.Comment,


  }

  let sql = "INSERT INTO Posting SET ?";
  
  db.query(sql,[data],(err,results) =>{

    if(err){
      console.log("Insertion failed: " + err);
      res.end();
      return;
    }
    res.send(data)
  })
})

  // Makes connection to DB 
  // db.query(sql,[data],(err,results) =>{

  //   if(err){
  //     console.log("Insertion failed: " + err);
  //     res.end();
  //     return;
  //   }else{
  //     res.send(data)
  //   }
    
  // })
})

app.use('/', category_query);
app.use('/users', usersRouter); //passport.authenticate('jwt', {session: false}),
app.use('/messaging', passport.authenticate('jwt', {session: false}), messagingRouter); //passport.authenticate('jwt', {session: false}),
app.use('/messaging-index', passport.authenticate('jwt', {session: false}), messagesIndexRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, 'views/error.html'));
});


module.exports = app;
