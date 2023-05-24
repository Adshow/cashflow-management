const mongoose = require("mongoose");
const { TRANSACTION_TYPES } = require("../constants");

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: Object.values(TRANSACTION_TYPES),
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
