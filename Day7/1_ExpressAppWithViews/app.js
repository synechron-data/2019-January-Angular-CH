const express = require('express');
const app = express();

const empArr = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { ptitle: "Express" });
});

app.get('/employees', (req, res) => {
    res.render('employees', { ptitle: "Employees View", empList: empArr });
});


app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Express Server Started...");
})