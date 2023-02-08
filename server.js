"use strict";
const path = require("path");

//* Requiring environment variables using dotenv *//
require("dotenv").config({ path: path.join(__dirname, ".env") });

//* Requiring additional npm modules *//
const express = require("express");
const logger = require("morgan");

const exampleRouter = require("./routes/example.routes");

const app = express();

const SETUP = {
  ip: process.env.IP || "127.0.0.1",
  port: process.env.PORT || 3000,
};

app.use(logger("dev"));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use("/", express.static(path.join(__dirname, "static")));

//* API Routes *//
app.use("/api/example", exampleRouter);

//* Initializing server *//
app.listen(SETUP.port, SETUP.ip, () => {
  console.log(`Backend Server started on ${SETUP.ip}:${SETUP.port}`);
});
