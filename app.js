const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const openaiRoutes = require("./server/openai");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api/fitness", openaiRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the AI-Powered Fitness Tracker API!');
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));