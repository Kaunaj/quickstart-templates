"use strict";
//* Requiring npm modules *//
const express = require("express");
const router = express.Router();

//* Example GET Route *//
router.get("/", async (req, res) => {
  try {
    console.log(`GET / called`);
    return res.status(200).send({
      success: true,
      msg: "Success message",
      data: {}
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ success: false, msg: e.message || "Something went wrong", error: e });
  }
});

//* Example POST Route *//
router.post("/", async (req, res) => {
  try {
    console.log(`POST / called with request body`, req.body);
    return res.status(200).send({
      success: true,
      msg: "Success message",
      data: {}
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .send({ success: false, msg: e.message || "Something went wrong", error: e });
  }
});

module.exports = router;
