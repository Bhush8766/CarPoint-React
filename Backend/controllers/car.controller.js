const carModel = require("../models/car.model");

module.exports.purchaseCar = async (req, res) => {
    try {
        const { buyerName, buyerEmail, purchaseDate } = req.body;

        // Create a new purchase entry
        const carPurchased = await carModel.create({    
            buyerName,
            buyerEmail,
            purchaseDate,
        });

        res.status(201).json({ message: "Car purchase successful", carPurchased });
    } catch (error) {
        res.status(500).json({ message: "Error processing purchase", error: error.message });
    }
};
