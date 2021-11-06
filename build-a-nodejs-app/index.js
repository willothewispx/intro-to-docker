import http from "http";

http.createServer(function(request, response) {
  console.log("request received");
  response.write("hello world")
  response.end("hello world", "utf-8")
}).listen(3000);
console.log("server started")
