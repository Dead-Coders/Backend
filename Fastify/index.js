const fastify = require("fastify")();
const app = fastify;

app.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
});

app.get("/", (req, res) => {
  return res.view("/templates/index.ejs");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
