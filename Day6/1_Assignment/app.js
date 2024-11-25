const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    // if (req.url != '/favicon.ico') {
    //     var filePath = `${process.cwd()}${req.url}.pdf`;

    //     var readStream = fs.createReadStream(filePath);
    //     res.setHeader("content-type", "application/pdf");

    //     readStream.on('data', (chunk) => {
    //         res.write(chunk);
    //     });

    //     readStream.on('end', () => {
    //         res.end();
    //     });

    //     readStream.on('error', (err) => {
    //         res.setHeader("content-type", "text");
    //         res.end("Error Reading File....");
    //     });
    // }

    fs.readFile('./index.html', (err, html)=>{
        if(err) throw err;

        res.setHeader("content-type", "text/html");
        res.write(html);
        res.end();
    })
});

server.listen(3000, () => {
    console.log("Server Started...");
});