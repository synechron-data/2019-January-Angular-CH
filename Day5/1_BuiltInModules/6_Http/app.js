const http = require('http');

var emp = { id: 1, name: "Manish" };

var server = http.createServer((req, res, next) => {
    // console.log(req.headers);

    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(emp));
    // res.write("<h1>Response from the Node Http Server....</h1>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server Started....");
})