// const http = require("http");
// const date = require("./myfirstmodule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("The date and time currently is:" + date.myDateTime());
//     res.end();
//   })
//   .listen(8080);
const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Kodi kargad mushaobs");
    res.end();
  })
  .listen(8080);
