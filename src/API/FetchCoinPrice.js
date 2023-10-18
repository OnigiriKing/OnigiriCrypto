import React from "react";
import axios from "axios";

export default function CoinPrice({ crypto, type=6 }) {
  const [price, setPrice] = React.useState(
    window.localStorage.getItem("TickerPrice") || 0
  );

  React.useEffect(() => {
    window.localStorage.setItem("TickerPrice", price);
  }, [price]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/${crypto}-price`
      );
      setPrice(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // it called first only once because of the [],
  // Then it called every 5 seconds
  React.useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [crypto]);

  const percent = price[4];

  if (type === "4") {
    return (
      <b className={type === "4" && percent < 0 ? "price-red" : "price-green"}>
        {price[type]}%
      </b>
    );
  } else {
    return (
      <b>
        ${price[type]}
      </b>
    );
  }
}
