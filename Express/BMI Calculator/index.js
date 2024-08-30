const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
  res.send("welcome to Cooding Jounery with abdullah :)");
});

app.get("/cal", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/cal", function (req, res) {
//   res.send("The Value is zero");

  console.log(req.body);

  let n1 = Number(req.body.v1);
  let n2 = Number(req.body.v2);

  let sum = n1 / (n2*n2);

  res.send("the sum of this number :" + sum)
});

app.listen(3000, function (requst, responce) {
  console.log("sever is runing in port 3000 :)");
});
