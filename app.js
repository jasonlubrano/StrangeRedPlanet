const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require('formidable');

const server = http.createServer(function(req, res) {
    let path = url.parse(req.url, true);
    if(req.method.toUpperCase() == "POST") {
        let form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            if(err) {
                console.error(err.message);
                return;
            }
            res.writeHead(200, "OK", {'Content-Type':'text/plain'});
            res.write("POST output \n\n");
            res.end(util.inspect({fields:fields, files:files}));
        });
    } else if (req.method.toUpperCase() == "GET" ) {
        res.writeHead(200, "OK", {'Content-Type':'text/plain'});
        res.write("GET output \n\n");
        res.write( util.inspect(path.query) + "\n\n");
        res.end("End of message to user");
    }
});

server.listen(3030, function() {
    console.log("Listening on port 3030");
});