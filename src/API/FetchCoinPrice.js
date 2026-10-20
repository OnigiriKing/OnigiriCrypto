import React from "react";
import axios from "axios";
import CoinValue from "components/CoinValue";

export default function CoinPrice({ crypto, type = 6 }) {
  const [price, setPrice] = React.useState(null);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://onigiri-crypto.netlify.app/.netlify/functions/fetchCoin?crypto=${crypto}`
        );
        setPrice(response.data);
        setHasError(false);
      } catch (error) {
        setHasError(true);
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

  if (hasError) {
    return <b>Unavailable</b>;
  }

  if (!price) {
    return <b>Loading...</b>;
  }

  return <CoinValue price={price} type={type} />;
}
