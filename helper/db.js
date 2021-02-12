// requiremets
const mongoose = require('mongoose');
const config = require('../config.json');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected...");
});


module.exports = {
	dailyNotes: require('../models/notes.models.js'),
	// users: require('../models/users.models.js'),
	remainder: require('../models/remainder.models'),
}