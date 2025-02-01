const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: {
    hi: { question: String, answer: String },
    bn: { question: String, answer: String },
  },
});

module.exports = mongoose.model("FAQ", FaqSchema);
