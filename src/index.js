const express = require("express");
require("express-async-errors");
require("dotenv").config();
const bodyParser = require("body-parser");
const transactionRoutes = require("./routes/transactionRoutes");
const connectDB = require("./config/database");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes for transaction management
app.use("/transaction", transactionRoutes);
app.use(errorHandler);

// Start the server
const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = server;
