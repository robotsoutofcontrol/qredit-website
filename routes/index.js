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
router.get("/motion-pricing-personal", function (req, res, next) {
  res.render("motion-pricing-personal", {
    title: "Qredit - Motion",
    routename: "motion-pricing-personal",
    csrfToken: req.csrfToken()
  });
});

router.get("/motion-pricing-corporate", function (req, res, next) {
  res.render("motion-pricing-corporate", {
    title: "Qredit - Motion",
    routename: "motion-pricing-corporate",
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

/* GET blockchain pages. */
router.get("/blockchain", function (req, res, next) {
  res.render("blockchain", {
    title: "Qredit - Blockchain",
    routename: "blockchain",
    csrfToken: req.csrfToken()
  });
});

router.get("/blockchain-wallets", function (req, res, next) {
  res.render("blockchain-wallets", {
    title: "Qredit - Blockchain",
    routename: "blockchain-wallets",
    csrfToken: req.csrfToken()
  });
});

router.get("/blockchain-explorer", function (req, res, next) {
  res.render("blockchain-explorer", {
    title: "Qredit - Blockchain",
    routename: "blockchain-explorer",
    csrfToken: req.csrfToken()
  });
});

router.get("/blockchain-qslp", function (req, res, next) {
  res.render("blockchain-qslp", {
    title: "Qredit - Blockchain",
    routename: "blockchain-qslp",
    csrfToken: req.csrfToken()
  });
});

router.get("/blockchain-faq", function (req, res, next) {
  res.render("blockchain-faq", {
    title: "Qredit - Blockchain",
    routename: "blockchain-faq",
    csrfToken: req.csrfToken()
  });
});

router.get("/blockchain-node", function (req, res, next) {
  res.render("blockchain-node", {
    title: "Qredit - Blockchain",
    routename: "blockchain-node",
    csrfToken: req.csrfToken()
  });
});

router.get("/blockchain-swap", function (req, res, next) {
  res.render("blockchain-swap", {
    title: "Qredit - Blockchain",
    routename: "blockchain-swap",
    csrfToken: req.csrfToken()
  });
});


router.get("/blockchain-old", function (req, res, next) {
  res.render("blockchain-old", {
    title: "Qredit - Blockchain",
    routename: "blockchain-old",
    csrfToken: req.csrfToken()
  });
});

/* GET developer pages. */
router.get("/developer-motion", function (req, res, next) {
  res.render("developer-motion", {
    title: "Qredit - Developer",
    routename: "developer-motion",
    csrfToken: req.csrfToken()
  });
});

router.get("/developer-altfenix", function (req, res, next) {
  res.render("developer-altfenix", {
    title: "Qredit - Developer",
    routename: "developer-altfenix",
    csrfToken: req.csrfToken()
  });
});

router.get("/developer-blockchain", function (req, res, next) {
  res.render("developer-blockchain", {
    title: "Qredit - Developer",
    routename: "developer-blockchain",
    csrfToken: req.csrfToken()
  });
});

router.get("/developer-api", function (req, res, next) {
  res.render("developer-api", {
    title: "Qredit - Developer",
    routename: "developer-api",
    csrfToken: req.csrfToken()
  });
});

router.get("/developer-documentation", function (req, res, next) {
  res.render("developer-documentation", {
    title: "Qredit - Developer",
    routename: "developer-documentation",
    csrfToken: req.csrfToken()
  });
});

/* GET about pages. */
router.get("/about-company", function (req, res, next) {
  res.render("about-company", {
    title: "Qredit - About",
    routename: "about-company",
    csrfToken: req.csrfToken()
  });
});

router.get("/about-licensing", function (req, res, next) {
  res.render("about-licensing", {
    title: "Qredit - About",
    routename: "about-licensing",
    csrfToken: req.csrfToken()
  });
});

router.get("/about-whitepaper", function (req, res, next) {
  res.render("about-whitepaper", {
    title: "Qredit - About",
    routename: "about-whitepaper",
    csrfToken: req.csrfToken()
  });
});

router.get("/about-partners", function (req, res, next) {
  res.render("about-partners", {
    title: "Qredit - About",
    routename: "about-partners",
    csrfToken: req.csrfToken()
  });
});

router.get("/about-amlgdpr", function (req, res, next) {
  res.render("about-amlgdpr", {
    title: "Qredit - About",
    routename: "about-amlgdpr",
    csrfToken: req.csrfToken()
  });
});

router.get("/about-disclaimer", function (req, res, next) {
  res.render("about-disclaimer", {
    title: "Qredit - About",
    routename: "about-disclaimer",
    csrfToken: req.csrfToken()
  });
});

router.get("/about-policy", function (req, res, next) {
  res.render("about-policy", {
    title: "Qredit - About",
    routename: "about-policy",
    csrfToken: req.csrfToken()
  });
});

/* GET support pages. */
router.get("/support", function (req, res, next) {
  res.render("support", {
    title: "Qredit - Support",
    routename: "support",
    csrfToken: req.csrfToken()
  });
});


module.exports = router;
