const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//*Tempelate engiens in express
app.set("view engine", "ejs")

//* static files send in Express sever
app.use(express.static('./pulic'))

//*Middle ware in Express js
app.use(function(res, req , next) {
   next();
})

//*Simple Routes in express js 
app.get("/", function (req, res) {
  res.send("welcome to Cooding Jounery with abdullah :)");
});

//* Dynamic router and router parmeters
app.get('/mm/:username', (req, res) => {
  res.send(`hellow ${req.params.username}`)
});

//*Simple and nesting routing i express js
// app.get("/cal", function (req, res //* Request and responce function) {
//   res.sendFile(__dirname + "/index.html");
// });


//* temleate engine configruation to which file is upload in sever
app.get(function(req, res) {
  res.render('index')
})
// app.post("/cal", function (req, res) {
// //   res.send("The Value is zero");


//   console.log(req.body);

//   let n1 = Number(req.body.v1);
//   let n2 = Number(req.body.v2);

//   let sum = n1 * n2;

//   res.send("the sum of this number :" + sum)
// });

app.listen(3000, function (requst, responce) {
  console.log("sever is runing in port 3000 :)");
});
