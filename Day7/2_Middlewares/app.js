const express = require('express');
const app = express();
const logger = require('morgan');

const empArr = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.set('view engine', 'pug');

app.use(logger('dev'));

// app.use(function (req, res, next) {
//     console.log("Request - Middleware 1");
//     next();
//     console.log("Response - Middleware 1");
// });

// app.use(function (req, res, next) {
//     console.log("Request - Middleware 2");
//     next();
//     console.log("Response - Middleware 2");
// });

// app.use(function (req, res, next) {
//     var stTime = (new Date()).getTime();
//     next();
//     var enTime = (new Date()).getTime();

//     var tTime = enTime - stTime;
//     console.log("Response Time: ", tTime, " ms");
// });

app.get('/', (req, res) => {
    // console.log("Get /");
    res.render('index', { ptitle: "Express" });
});

app.get('/employees', (req, res) => {
    res.render('employees', { ptitle: "Employees View", empList: empArr });
});


// app.get('*', (req, res) => {
//     res.redirect('/');
// });

app.listen(3000, () => {
    console.log("Express Server Started...");
})