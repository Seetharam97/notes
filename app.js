// requirements
const express = require('express');
const app = express();
const cors = require('cors');
const errorhandle = require('./helper/error-handler.js');
const jwt = require('./helper/jwt.js');
const db = require('./helper/db.js');
const os = require('os');
const bodyParser = require('body-parser');
const request_promise = require('request-promise');
const moment = require('moment');


NODE_TLS_REJECT_UNAUTHORIZED='0'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// api routes
app.use('/notesapi/users', require('./User/User.controller'));

// start server
const port = process.env.NODE_ENV == 'production' ? (process.env.PORT || 80) : 7000;
const server = app.listen(port, function () {
	console.log('Server listening on port ' + port);
});