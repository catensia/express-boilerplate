var express = require("express");
var router = express.Router();

console.log("index.js");
/* GET home page. */
router.get("/", function (req, res, next) {
    //res.render("index", { title: "Express" });
    console.log("router");
    res.sendFile(path.resolve(__dirname, "../../client/dist/index.html"));
});

module.exports = router;
