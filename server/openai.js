require('dotenv').config();
const express = require("express");
const  OpenAIApi  = require('openai');

const openai = new OpenAIApi({
    apiKey: ''
  });

const router = express.Router();



router.post("/", async (req, res) => {
console.log("Inside the controller");
  const { weight, height, activity } = req.body;

  const prompt = `Suggest a daily calorie intake and workout plan for a person with:
  - Weight: ${weight} kg
  - Height: ${height} cm
  - Activity Level: ${activity}`;

  console.log(prompt)

  try {
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt },
    ],
    });
    console.log(aiResponse.choices[0].message.content)
    res.json({ message: aiResponse.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
});

module.exports = router;