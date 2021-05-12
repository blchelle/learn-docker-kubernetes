const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
  host: "redis-server",
});

client.set("visits", 0);

app.get("/", (_, res) => {
  console.log("Receiving Request");
  client.get("visits", (_, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set("visits", parseInt(visits) + 1);
  });
});

let PORT = 8081;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
