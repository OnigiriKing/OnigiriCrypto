const axios = require("axios");
const express = require("express");
const cors = require("cors");


const app = express();
const port = 3000;

// wont work without cors
app.use(cors());

// Define your server routes and middleware here
// get crypto price
app.get("/api/:symbol-price", async (req, res) => {
  const symbol = req.params.symbol.toUpperCase();
  try {
    const response = await axios.get(
      `https://api.bitfinex.com/v2/ticker/t${symbol}USD`
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Get API status
app.get("/api/status", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api-pub.bitfinex.com/v2/platform/status`
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// get wallet information with API keys
app.get("/api/:cryptoType-:timeCandles-candles", async (req, res) => {
  const cryptoType = req.params.cryptoType.toUpperCase();
  const timeCandles = req.params.timeCandles;
  try {
    const response = await axios.get(
      `https://api-pub.bitfinex.com/v2/candles/trade:${timeCandles}:t${cryptoType}USD/hist`
    );
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
