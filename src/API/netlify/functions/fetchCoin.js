const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const crypto = event.queryStringParameters.crypto;

    const response = await axios.get(
      `https://api.bitfinex.com/v2/ticker/t${crypto}USD`
    );

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Methods": "GET",
      },
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", 
      },
      body: JSON.stringify(error),
    };
  }
};
