import express from "express";
import { createServer } from "node:http";
const app = express();
const server = createServer(app);
// console.log(app);
app.get("/", (req, res) => {
  res.send("Hello from our server/backend!");
});
server.listen(8080, () =>
  console.log("server running at http://localhost:8080")
);
