const express = require("express");
const router = express.Router();

//start adding edpoints to our default router
router.get("/", function(req, res){
    res.send("hello world")
})

router.get("/welcome", function(req, res){
    res.send("Welcome to the /welcome route")
})

module.exports = router;