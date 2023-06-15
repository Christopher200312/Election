const osas = require("express");

require("./config/database");
const port = 2003;
const app = osas();

app.use(osas.json());

// default get

app.get("/", (req, res) => {
  res.status(200).json({
    message: "osas election get server is up and running",
  });
});

app.listen(port, () => {
  console.log("osas election server is ready");
});
