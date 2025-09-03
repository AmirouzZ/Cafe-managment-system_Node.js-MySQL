import http from "http";
import app from "./app.js";

import dotenv from "dotenv";
dotenv.config();

const server = http.createServer(app);

let port = process.env.PORT || 5000;

server.listen(port, (error) => {
  if (error) {
    console.log("Server not started:", error.message);
  }
  console.log("Server is running on port:", port);
});
