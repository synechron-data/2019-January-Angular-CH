const express = require('express');
const app = express();

let employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
});

app.get('/api/data', function (req, res) {
    res.json(employees);
});

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Express Server Started...");
});