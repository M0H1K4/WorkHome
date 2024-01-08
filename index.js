const express = require("express");
const app = express();
const port = 3000;

const cars = [
  { carNumber: 1, name: "Porsche", model: 911 },
  { carNumber: 2, name: "Porsche", model: 911 },
  { carNumber: 3, name: "Porsche", model: 911 },
  { carNumber: 4, name: "Porsche", model: 911 },
  { carNumber: 5, name: "Porsche", model: 911 },
  { carNumber: 6, name: "Porsche", model: 911 },
];

const car1 = cars[0];

app.get("/main", (req, res) => {
  res.json(cars);
});

app.get("/main/:id", (req, res) => {
  res.json(car1);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
