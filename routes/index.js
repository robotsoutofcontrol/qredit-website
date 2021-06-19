var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Qredit - All-in-one Crypto and Banking Platform",
    routename: "home",
    csrfToken: req.csrfToken()
  });
});

/* GET backup page. */
router.get("/index2", function (req, res, next) {
  res.render("index2", {
    title: "Qredit - Motion",
    routename: "index2",
    csrfToken: req.csrfToken()
  });
});

router.get("/altbckp", function (req, res, next) {
  res.render("altbckp", {
    title: "Qredit - Index Backup",
    routename: "altbckp",
    csrfToken: req.csrfToken()
  });
});

/* GET navbar pages. */
router.get("/motion", function (req, res, next) {
  res.render("motion", {
    title: "Qredit - Motion",
    routename: "motion",
    csrfToken: req.csrfToken()
  });
});





module.exports = router;
