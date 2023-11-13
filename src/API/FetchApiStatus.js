import React from "react";
import axios from "axios";

export default function ApiStatus() {
  const [apiStatus, setStatus] = React.useState(1);

  async function fetchStatus() {
    try {
      const response = await axios.get(
        `https://api-pub.bitfinex.com/v2/platform/status`
      );
      setStatus(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="apiStatus">
      <h5>
        Server is
        <b className={apiStatus === 1 ? "apiOnline" : "apiOffline"}>
          {apiStatus === 1 ? " online" : " ofline"}
        </b>
      </h5>
    </div>
  );
}
