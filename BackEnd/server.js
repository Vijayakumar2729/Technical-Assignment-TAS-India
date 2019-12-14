var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

var userApi = require("./routes/user-api");

let http = require("http");
let server = http.Server(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

console.log("Visit http://localhost:3000 in your browser");

app.use("/api", userApi);

module.exports = app;
