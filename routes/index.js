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

/* GET navbar pages. */
router.get("/motion", function (req, res, next) {
  res.render("motion", {
    title: "Qredit - Motion",
    routename: "motion",
    csrfToken: req.csrfToken()
  });
});

router.get("/altfenix", function (req, res, next) {
  res.render("altfenix", {
    title: "Qredit - Altfenix",
    routename: "altfenix",
    csrfToken: req.csrfToken()
  });
});

router.get("/blockchain", function (req, res, next) {
  res.render("blockchain", {
    title: "Qredit - Blockchain",
    routename: "blockchain",
    csrfToken: req.csrfToken()
  });
});

router.get("/about", function (req, res, next) {
  res.render("about", {
    title: "Qredit - About",
    routename: "about",
    csrfToken: req.csrfToken()
  });
});



module.exports = router;
