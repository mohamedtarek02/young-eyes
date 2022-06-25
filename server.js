const express = require("express ");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();

app.use("/news", serveStatic(path.join(__dirname, "/dist")));

const port = process.env.PORTy || 8080;
app.listen(port);

console.log("listening on port: ", +port);
