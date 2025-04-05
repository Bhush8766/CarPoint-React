const express = require("express");
const router = express.Router();
const { validateCarPurchase } = require("../middlewares/car.middleware");
const carController = require("../controllers/car.controller");

// Purchase Route
router.post("/purchase", validateCarPurchase, carController.purchaseCar);

module.exports = router;
