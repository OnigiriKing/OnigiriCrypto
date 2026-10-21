import React from "react";
import axios from "axios";


export default function useCoinTicket(crypto) {
      const [price, setPrice] = React.useState(null);
      const [hasError, setHasError] = React.useState(false);

      React.useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(
              `https://onigiri-crypto.netlify.app/.netlify/functions/fetchCoin?crypto=${crypto}`,
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

      return {price, hasError}

}