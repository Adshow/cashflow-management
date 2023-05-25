const Transaction = require("../models/Transaction");

const getDailyTransactions = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return await Transaction.find({
    timestamp: { $gte: today },
  });
};

const addTransaction = async (type, amount) => {
  return await Transaction.create({ type, amount });
};

module.exports = {
  addTransaction,
  getDailyTransactions,
};
