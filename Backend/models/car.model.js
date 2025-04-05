const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema({
    carId: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() }, // Proper auto-generation
    buyerName: { type: String, required: true },
    buyerEmail: { type: String, required: true },
    purchaseDate: { type: Date, required: true }
});

const PurchaseModel = mongoose.model("Purchase", PurchaseSchema);
module.exports = PurchaseModel;
