const transactionFacade = require("../facades/transactionFacade");
const { StatusCodes } = require("http-status-codes");

async function addTransaction(req, res) {
  const { type, amount } = req.body;

  const transaction = await transactionFacade.addTransaction(type, amount);

  return res.status(StatusCodes.CREATED).json(transaction);
}

async function getDailyBalance(req, res) {
  const balance = await transactionFacade.getDailyBalance();
  return res.status(StatusCodes.OK).json(balance);
}

module.exports = {
  addTransaction,
  getDailyBalance,
};
