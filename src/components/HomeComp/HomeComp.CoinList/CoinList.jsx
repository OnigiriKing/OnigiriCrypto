import CoinPrice from "API/FetchCoinPrice";
import { coinList } from "common/data/coinsData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CoinList() {

  const [page, setPage] = useState([0, 6])
  function DisplayCoins() {
    return Object.keys(coinList).slice(...page).map((key) => {
      const el = coinList[key];
      return (
        <Link to={`/coin/${key}`} className="coin-info">
          <div className="coin-info-img">
            <img src={el.img} alt={el.name} />
            <h3>{el.name}</h3>
          </div>
          <h3>
            <CoinPrice crypto={el.sigh} />
          </h3>
          <h3 className="coin-info-persantage">
            <CoinPrice crypto={el.sigh} type="4" />
          </h3>
          <h3>
            <CoinPrice crypto={el.sigh} type="7" />
          </h3>
        </Link>
      );
    });
  }

  return (
    <div id="coin-list-page">
      <div className="wrapper coin-list-wrapper">
        <h1>Market update</h1>
        <div className="coin-list-table">
          <div className="coin-list-table-banner">
            <h3>Coin</h3>
            <h3>Price</h3>
            <h3>24h Change</h3>
            <h3>Volume</h3>
          </div>
          <DisplayCoins />
        </div>
        <div className="coin-list-pages">
          <button
            className={page[0] == 0 ? "btn-active" : ""}
            onClick={() => setPage([0, 6])}
          >
            1
          </button>
          <button
            className={page[0] == 6 ? "btn-active" : ""}
            onClick={() => setPage([6, 12])}
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
}
