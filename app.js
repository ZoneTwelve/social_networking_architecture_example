var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var helmet = require('helmet');


var index = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.disable('x-powered-by');

// Set the header based on a condition
app.use(helmet.hsts({
  maxAge: 1234000,
  setIf: function (req, res) {
    return req.secure || (req.headers['x-forwarded-proto'] === 'https')
  }
}))
// ALWAYS set the header
app.use(helmet.hsts({
  maxAge: 1234000,
  force: true
}))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(session({
	secret:'recommand 128 bytes random string',
	cookie:{maxAge: 24 * 60 * 60 * 1000}
}));
app.use(helmet());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	// res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
