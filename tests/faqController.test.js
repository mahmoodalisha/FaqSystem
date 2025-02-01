const { getFAQs, createFAQ } = require("../controllers/faqController");

describe("FAQ Controller", () => {
  test("getFAQs should return an empty array initially", async () => {
    const req = {};
    const res = { json: jest.fn() };

    await getFAQs(req, res);
    expect(res.json).toHaveBeenCalledWith([]);
  });

  test("createFAQ should return the created FAQ", async () => {
    const req = { body: { question: "Test?", answer: "Yes" } };
    const res = { json: jest.fn() };

    await createFAQ(req, res);
    expect(res.json).toHaveBeenCalledWith({ question: "Test?", answer: "Yes" });
  });
});
