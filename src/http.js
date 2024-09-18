import { createServer } from "http";

createServer(function (req, res) {
    res.write("Hello world, descomplica");
    res.end();
}).listen(8080);
