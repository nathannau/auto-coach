import createError from 'http-errors';
import morgan from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

import apiRouter from './api';

var app = express();
var port = process.env.PORT || 3000;

app.use(morgan('combined'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))

app.get("/", function(req, res) { res.end(JSON.stringify( { "Hello":"World ! 2" })); });
app.use("/api", apiRouter);

// 404 error handler
app.use(function(req, res, next) { next(createError(404)); });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port);
console.log('RESTful API server started on: ' + port);

export default app;
