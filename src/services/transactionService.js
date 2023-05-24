const Transaction = require("../models/Transaction");

async function getDailyTransactions() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return await Transaction.find({
    timestamp: { $gte: today },
  });
}

async function addTransaction(type, amount) {
  return await Transaction.create({ type, amount });
}

module.exports = {
  addTransaction,
  getDailyTransactions,
};
