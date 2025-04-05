const Purchase = require("../models/car.model");

module.exports.carModel = async ({
  carId,
  buyerName,
  buyerEmail,
  purchaseDate,
}) => {
  if (!buyerName || !buyerEmail || !purchaseDate) {
    throw new Error("All Fields are Required");
  }
  const car = Purchase.create({
    carId,
    buyerName,
    buyerEmail,
    purchaseDate,
  });
  return car;
};
