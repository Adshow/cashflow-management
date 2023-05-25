const { TRANSACTION_TYPES } = require("../constants");
const transactionService = require("../services/transactionService");
const BadRequestApiError = require("../errors/badRequestApiError");

const addTransaction = async (type, amount) => {
  if (!Object.values(TRANSACTION_TYPES).includes(type)) {
    throw new BadRequestApiError(
      "Invalid transaction type. Please use debit or credit."
    );
  }
  const transaction = await transactionService.addTransaction(type, amount);
  return transaction;
};

const getDailyBalance = async () => {
  const dailyTransactions = await transactionService.getDailyTransactions();

  const initialValue = 0;
  const totalDebits = dailyTransactions
    .filter((transaction) => transaction.type === TRANSACTION_TYPES.DEBIT)
    .reduce(
      (accumulator, transaction) => accumulator + transaction.amount,
      initialValue
    );

  const totalCredits = dailyTransactions
    .filter((transaction) => transaction.type === TRANSACTION_TYPES.CREDIT)
    .reduce(
      (accumulator, transaction) => accumulator + transaction.amount,
      initialValue
    );

  const consolidatedBalance = totalCredits - totalDebits;

  return {
    totalDebits,
    totalCredits,
    consolidatedBalance,
  };
};

module.exports = {
  addTransaction,
  getDailyBalance,
};
