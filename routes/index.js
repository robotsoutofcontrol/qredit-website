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


/* GET motion pages. */
router.get("/motion", function (req, res, next) {
  res.render("motion", {
    title: "Qredit - Motion",
    routename: "motion",
    csrfToken: req.csrfToken()
  });
});

router.get("/motion-features", function (req, res, next) {
  res.render("motion-features", {
    title: "Qredit - Motion",
    routename: "motion-features",
    csrfToken: req.csrfToken()
  });
});
router.get("/motion-pricing", function (req, res, next) {
  res.render("motion-pricing", {
    title: "Qredit - Motion",
    routename: "motion-pricing",
    csrfToken: req.csrfToken()
  });
});

router.get("/motion-faq", function (req, res, next) {
  res.render("motion-faq", {
    title: "Qredit - Motion",
    routename: "motion-faq",
    csrfToken: req.csrfToken()
  });
});

router.get("/motion-listing", function (req, res, next) {
  res.render("motion-listing", {
    title: "Qredit - Motion",
    routename: "motion-listing",
    csrfToken: req.csrfToken()
  });
});



/* GET altfenix pages. */
router.get("/altfenix", function (req, res, next) {
  res.render("altfenix", {
    title: "Qredit - Altfenix Exchange",
    routename: "altfenix",
    csrfToken: req.csrfToken()
  });
});

router.get("/altfenix-features", function (req, res, next) {
  res.render("altfenix-features", {
    title: "Qredit - Altfenix Exchange",
    routename: "altfenix-features",
    csrfToken: req.csrfToken()
  });
});

router.get("/altfenix-faq", function (req, res, next) {
  res.render("altfenix-faq", {
    title: "Qredit - Altfenix Exchange",
    routename: "altfenix-faq",
    csrfToken: req.csrfToken()
  });
});

router.get("/altfenix-listing", function (req, res, next) {
  res.render("altfenix-listing", {
    title: "Qredit - Altfenix Exchange",
    routename: "altfenix-listing",
    csrfToken: req.csrfToken()
  });
});


module.exports = router;
