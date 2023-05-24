const express = require("express");
const transactionController = require("../controllers/transactionController");

const router = express.Router();

// Routes for transaction management
router.post("/", transactionController.addTransaction);
router.get("/", transactionController.getDailyBalance);

module.exports = router;
