const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const response = await axios.get(
      `https://api.bitfinex.com/v2/ticker/t${crypto}USD`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
