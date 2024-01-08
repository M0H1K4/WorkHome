// const http = require("http");
// const date = require("./myfirstmodule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time currently is:" + date.myDateTime());
//     res.end();
//   })
//   .listen(8080);

// const http = require("http");

// http
//   .createServer(function (req, res) {
//     res.write("Isev kargad mushaob dzmi<3");
//     res.end();
//   })
//   .listen(8080);

const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const q = url.parse(req.url, true).query;
    const txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);
