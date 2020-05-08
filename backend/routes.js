const router = require("express").Router();
const logger = require("morgan");

router.use(logger());

router.use("/", (req, res) => {
  res.json("Hi, from Routes Server files");
});

module.exports = router;
