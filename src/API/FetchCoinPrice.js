import React from "react";
import axios from "axios";

export default function CoinPrice({ crypto, type = 6 }) {
  const [price, setPrice] = React.useState(
    window.localStorage.getItem("TickerPrice") || { [type]: 0, 5: 0 }
  );

  React.useEffect(() => {
    window.localStorage.setItem("TickerPrice", JSON.stringify(price));
  }, [price]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://onigiri-crypto.netlify.app/.netlify/functions/fetchCoin?crypto=${crypto}`
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

  if (type === 5) {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 1,
    }).format(percent * 100);
    return (
      <b className={percent < 0 ? "price-red" : "price-green"}>
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
