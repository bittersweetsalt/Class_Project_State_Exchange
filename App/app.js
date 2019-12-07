const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload')
const passport    = require('passport');
require('./auth/passport');
const app = express();

//routes import
const fileRouter = require('./routes/files');
const search_query = require('./routes/search_query');
const newPostRouter = require('./routes/insertPost');
const category_query = require('./routes/categories');
const usersRouter = require('./routes/users');
const messagingRouter = require('./routes/messaging');
const messagesIndexRouter = require('./routes/messaging-index');
const auth = require('./routes/auth');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

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



//routes for the files
app.use('/', fileRouter);
app.use('/', search_query);
app.use('/', newPostRouter);
app.use('/users', usersRouter); //passport.authenticate('jwt', {session: false}),


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

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


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
app.use('/auth', auth);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err)

  // render the error page
  res.status(err.status || 500);
  res.sendFile(path.join(__dirname, 'views/error.html'));
});


module.exports = app;