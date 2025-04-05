const mongoose = require("mongoose");
const connectDB = require("./db");
const { Car } = require("./models");

connectDB();

const seedCars = async () => {
    await Car.deleteMany(); // Clear existing data
    await Car.insertMany([
        { name: "Toyota Corolla", price: 20000 },
        { name: "Honda Civic", price: 22000 },
        { name: "Ford Mustang", price: 30000 },
    ]);
    console.log("Cars added!");
    mongoose.connection.close();
};

seedCars();
