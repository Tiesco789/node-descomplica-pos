import { createServer } from "http";
import { parse } from "path";

createServer(function (req, res) {
    const q = parse(req.url, true);
    const filename = '.' + q.pathname;
    res.write("hello wordl descomplica");
    return res.end();
}).listen(8080);
