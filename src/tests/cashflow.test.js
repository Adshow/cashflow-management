const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connection.dropCollection("transactions");
});
afterAll(async () => {
  await mongoose.connection.close();
  await app.close();
});

describe("Transaction API", () => {
  it("should add a new debit transaction", async () => {
    const transactionData = {
      type: "debit",
      amount: 100,
    };

    const response = await request(app)
      .post("/transaction")
      .send(transactionData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("type", "debit");
    expect(response.body).toHaveProperty("amount", 100);
  });

  it("should add a new credit transaction", async () => {
    const transactionData = {
      type: "credit",
      amount: 200,
    };

    const response = await request(app)
      .post("/transaction")
      .send(transactionData);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("type", "credit");
    expect(response.body).toHaveProperty("amount", 200);
  });

  it("should get the daily balance", async () => {
    const response = await request(app).get("/transaction");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("totalDebits", 100);
    expect(response.body).toHaveProperty("totalCredits", 200);
    expect(response.body).toHaveProperty("consolidatedBalance", 100);
  });
});
