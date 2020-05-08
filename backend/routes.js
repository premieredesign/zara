const router = require("express").Router();
const logger = require("morgan");

router.use(logger());

const items = [
  {
    id: 1,
    product: "Zara hear me roar",
    price: "20.99",
    quantity: "20",
  },
  {
    id: 2,
    product: "Zara is amazing",
    price: "20.99",
    quantity: "20",
  },
  {
    id: 3,
    product: "Zara shooting for the stars",
    price: "20.99",
    quantity: "20",
  },
];

// Get all items
router.get("/api/items", (req, res) => {
  console.log("*** Query - Server ***", req.query);
  if (req.query) {
  }
  res.json(items);
});

// Get specific items
router.get("/api/items/:id", (req, res) => {
  const item = items.filter((x) => x.id === Number(req.params.id));
  console.log("item", item);
  res.json(item);
});

module.exports = router;
