const express = require("express");
const router = express.Router();

const petsData = [
  { name: "Buddy", owner: "John", type: "Dog" },
  { name: "Whiskers", owner: "Alice", type: "Cat" },
  { name: "Goldie", owner: "Steve", type: "Fish" },
];

router.get("/", (req, res) => {
  res.json(petsData);
});

router.get("/:name", (req, res) => {
  const pet = petsData.find((p) => p.name === req.params.name);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).send("Pet not found");
  }
});

router.get("/owner", (req, res) => {
  const ownerName = req.query.name;
  const pet = petsData.find((p) => p.owner === ownerName);
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).send("Pet not found for given owner");
  }
});

module.exports = router;
