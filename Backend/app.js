const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoute = require('./routes/user.routes');
const carRoute = require('./routes/car.routes');

const cookieParser = require('cookie-parser');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req, res) => {
    res.send('Hello World');
});
app.use('/users', userRoute);
app.use('/car', carRoute);

module.exports = app;
