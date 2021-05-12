const express = require("express");

const app = express();

app.get("/", (_, res) => {
  res.send("Hello my name is brock");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});


