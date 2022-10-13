const express = require('express');
const router = express.Router();
const  apiData = require("../api/db")
router.get('/', function(req, res, next) {
  res.send(apiData);
});

module.exports = router;
