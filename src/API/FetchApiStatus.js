import React from "react";
import axios from "axios";

export default function ApiStatus() {
  const [apiStatus, setStatus] = React.useState(1);

  async function fetchStatus() {
    try {
      const response = await axios.get(`http://localhost:3000/api/status`);
      setStatus(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="ApiStatus">
      <h3 className={apiStatus == 1 ? "ApiOnline" : "ApiOffline"}>•</h3>
      <h5>Server is {apiStatus == 1 ? "online" : "ofline"}</h5>
    </div>
  );
}


