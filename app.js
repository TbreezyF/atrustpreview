require('./env');
require('ejs');
const express = require('express');
const app = express();
const index = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const fs = require('fs');
const https = require('https');

/*
const certOptions = {
    cert: fs.readFileSync(__dirname + '/smtp_server/sproft_cert.pem'),
    key: fs.readFileSync(__dirname + '/smtp_server/sproft_private.pem')
}
*/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', index);

app.listen(process.env.PORT || 8081, () => {
    console.log('[' + new Date() + '] INFO: Server started on [::]:' + process.env.PORT);
});

//https.createServer(certOptions, app).listen(443);