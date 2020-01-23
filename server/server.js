const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 4172;

console.log("The server is running");
console.log("The public path is: ", publicPath);
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  console.log("publicPath");
  res.sendFile(path.join(publicPath, "index.html"));
  res.set("Connection", "close");
});

module.exports.server = app.listen(port);
