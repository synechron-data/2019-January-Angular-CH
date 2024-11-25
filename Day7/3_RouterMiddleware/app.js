const express = require('express');
const app = express();
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter =require('./routes/api');

app.set('view engine', 'pug');

app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;