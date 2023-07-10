import React from "react";
import "./style.css";
import ApexChart from "../../../API/FetchCandls";

function Menu({ changeCrypto, changeTime }) {
  return (
    <nav className="left-side-menu">
      <div className="settings">
        <select
          className="select-crypto"
          onChange={(e) => changeCrypto(e.target.value)}
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
        </select>
        <select
          className="select-candle-time"
          onChange={(e) => changeTime(e.target.value)}
        >
          <option value="1h">1h</option>
          <option value="30m">30m</option>
          <option value="15m">15m</option>
        </select>
      </div>
    </nav>
  );
}

export default function CryptoGraph() {
  const [cryptoType, setType] = React.useState("BTC");
  const [candleTime, setTime] = React.useState("1h");

  return (
    <>
      <Menu changeCrypto={setType} changeTime={setTime} />
      <ApexChart crypto={cryptoType} period={candleTime} />
    </>
  );
}
