import { readFile } from "fs";
import { createServer } from "http";
import { parse } from "url";

createServer(function (req, res) {
    const q = parse(req.url, true);
    const filename = "." + q.pathname;

    readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 not found");
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });

    res.write("Hello world, descomplica");
    res.end();
}).listen(8080);
