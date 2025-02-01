const request = require("supertest");
const app = require("../server");

describe("FAQ Routes", () => {
  test("GET /api/faqs should return 200", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.statusCode).toBe(200);
  });

  test("POST /api/faqs should return 201", async () => {
    const res = await request(app)
      .post("/api/faqs")
      .send({ question: "Test Question?", answer: "Test Answer" });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("question", "Test Question?");
  });
});
