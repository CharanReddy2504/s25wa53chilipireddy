var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Require routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mydataRouter = require('./routes/mydata'); 
var express = require('express');
var app = express();
var computationRouter = require('./routes/computation'); // Path to your new computation route file

app.use('/computation', computationRouter); // Register the new endpoint

// Your existing routes and configurations...
 // Fixed duplicate declaration

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use the routers for each path
app.use('/', indexRouter);
app.use('/users', usersRouter);  // This was correct before, no change needed
app.use('/mydata', mydataRouter); 
app.use('/computation', computationRouter); // Correct usage

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
  res.render('error');
});

module.exports = app;

