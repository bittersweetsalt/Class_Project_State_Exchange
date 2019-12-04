const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var db = require("./db/connection");
const fileUpload = require('express-fileupload')

const passport    = require('passport');
require('./auth/passport');

const app = express();

//routes import
const fileRouter = require('./routes/files');

const search_query = require('./routes/search_query');
const newPostRouter = require('./routes/insertPost');
const category_query = require('./routes/categories');
const prototypeRouter = require('./routes/prototype');
const search_query = require('./routes/search_query');

var usersRouter = require('./routes/users');
var messagingRouter = require('./routes/messaging');
var messagesIndexRouter = require('./routes/messaging-index');

var allowCrossDomain = function(req, res, next) {
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', '*');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
next();
}

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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



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

//middleware
// app.use(cors); // npm install --save cors
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(allowCrossDomain);

// app.use(formidable());
app.use(fileUpload({ createParentPath: true}));


//routes setup
app.use('/', fileRouter);
app.use('/', search_query);
app.use('/', newPostRouter);
app.use('/', category_query);
app.use('/users', usersRouter); //passport.authenticate('jwt', {session: false}),
app.use('/messaging', passport.authenticate('jwt', {session: false}), messagingRouter); //passport.authenticate('jwt', {session: false}),
app.use('/messaging-index', passport.authenticate('jwt', {session: false}), messagesIndexRouter);

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
