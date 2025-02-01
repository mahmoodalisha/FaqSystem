const FAQ = require("../models/faqModel");
const client = require("../config/redis");
const axios = require("axios");


const API_URL = "https://microsoft-translator-text-api3.p.rapidapi.com/largetranslate";

const headers = {
  'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
  'Content-Type': 'application/json',
};

async function translateText(text, targetLanguage) {
  try {
    const body = { Text: text };

    const response = await axios.post(API_URL, body, {
      headers: headers,
      params: {
        to: targetLanguage,
        "api-version": "3.0",
        from: "en",
      },
    });

    return response.data[0].translations[0].text; 
  } catch (error) {
    console.error("Error during translation:", error);
    throw new Error("Translation failed");
  }
}


exports.createFAQ = async (req, res) => {
  console.log(req.body);
  const { question, answer } = req.body;

  try {
    
    const frTranslation = await translateText(question, "fr");
    const esTranslation = await translateText(question, "es");

    
    const newFaq = new FAQ({
      question,
      answer,
      translations: {
        fr: { question: frTranslation, answer },
        es: { question: esTranslation, answer },
      },
    });

    
    await newFaq.save();
    res.status(201).json(newFaq);
  } catch (error) {
    res.status(500).json({ message: "Error translating or saving FAQ", error: error.message });
  }
};

exports.getFAQs = async (req, res) => {
  const lang = req.query.lang || "en";

  // Check Redis Cache
  const cachedData = await client.get(`faqs_${lang}`);
  if (cachedData) {
    return res.json(JSON.parse(cachedData)); // Return from cache
  }

  // If cache miss, fetch from MongoDB
  const faqs = await FAQ.find({});
  const translatedFAQs = faqs.map((faq) => ({
    question: faq.translations[lang]?.question || faq.question,
    answer: faq.translations[lang]?.answer || faq.answer,
  }));

  // Cache the result for future requests
  await client.setEx(`faqs_${lang}`, 3600, JSON.stringify(translatedFAQs)); // Cache for 1 hour
  res.json(translatedFAQs);
};
