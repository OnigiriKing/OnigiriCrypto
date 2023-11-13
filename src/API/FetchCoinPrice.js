import React from "react";
import axios from "axios";

export default function CoinPrice({ crypto, type=6 }) {
  const [price, setPrice] = React.useState(
    window.localStorage.getItem("TickerPrice") || 0
  );

  React.useEffect(() => {
    window.localStorage.setItem("TickerPrice", price);
    
  }, [price]);


  // it called first only once because of the [],
  // Then it called every 5 seconds
  React.useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(
            `https://api.bitfinex.com/v2/ticker/t${crypto}USD`
          );
          setPrice(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [crypto]);

  const percent = price[5];


  if (type === "5") {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 1,
    }).format(price[type] * 100);
    return (
      <b className={type === "5" && percent < 0 ? "price-red" : "price-green"}>
        {formattedNumber}%
      </b>
    );
  } else {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 2,
    }).format(price[type]);
    return <b>${formattedNumber}</b>;
  }
}
