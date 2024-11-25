const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, html) => {
        if (err) throw err;

        res.writeHeader(200, { "content-type": "text/html" });
        res.write(html);
        res.end();
    });
});

server.listen(3000, () => {
    console.log("Server Started...");
});

const WebSocketServer = require('websocket').server;
const StringEmitter = require('./StringEmitter');

const wsServer = new WebSocketServer({
    httpServer: server
});

var sm = new StringEmitter();

var count = 0;
var clients = [];

sm.on('data', (s) => {
    if (clients.length > 0) {
        for (const c of clients) {
            c.sendUTF(s);
        }
    }
});

wsServer.on('request', function (req) {
    var connection = req.accept('echo-protocol');
    var id = count++;
    clients[id] = connection;
    console.log(`Connection Accepted [${id}]`);

    connection.on("close", function () {
        clients.splice(id, 1);
        console.log(`Connection Closed [${id}]`);
        // console.log(...clients);
    });
});

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr);
// arr.splice(2, 2);
// console.log(arr);
