const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ message: "Hello from Netlify Lambda with CORS!" });
});

app.use('/.netlify/functions/createorder', router); // ✨ NEW MIDDLEWARE
module.exports.handler = serverless(app);