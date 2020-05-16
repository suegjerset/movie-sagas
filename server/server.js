const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moviesRouter = require('./routes/movies.router');
const detailsRouter = require('./routes/details.router');

const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/movies', moviesRouter);
app.use('/details', detailsRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});