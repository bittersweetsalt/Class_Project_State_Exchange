const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var db = require("./db/connection");
const fileUpload = require('express-fileupload')

//routes import
const fileRouter = require('./routes/files');
const testMySqlRouter = require('./routes/testmysql');
const newPostRouter = require('./routes/insertPost');


const app = express();


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


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

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
app.use('/', testMySqlRouter);
app.use('/', newPostRouter);


//making a new post
app.post('/newpost/12', function(req, res){
 
  // Prints post out in console 
  console.log('headersSent', res.headersSent);
  res.send('POST request has been made');
  console.log(req.body);

  let data = { 
    ID:0000000,                           
    Name: req.body.Title,
    category: req.body.category,
    UserID: req.body.UserID,
    Comment: req.body.Comment,
    Price: req.body.Price,
  }

  let sql = "INSERT INTO Posting SET ?";

  // Makes connection to DB 
  db.query(sql,[data],(err,results) =>{

    if(err){
      console.log("Insertion failed: " + err);
      if (err.fatal) {
        console.trace('fatal error: ' + err.message);
      }
      res.end();
      return;
    }else{
      res.send(data)
    }
    
  })
})


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
