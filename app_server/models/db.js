var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/smr_pjt_loct';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function (err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});