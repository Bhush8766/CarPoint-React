const express = require("express");
const app = express();

app.use(express.json()); // ✅ Parses JSON request body


const validateCarPurchase = (req, res, next) => {
    console.log("Request Body:", req.body); // ✅ Debugging line

    const { buyerName, buyerEmail, purchaseDate } = req.body;

    if (!buyerName || !buyerEmail || !purchaseDate) {
        return res.status(400).json({ message: "All fields are required" });
    }

    next();
};

module.exports = { validateCarPurchase };
