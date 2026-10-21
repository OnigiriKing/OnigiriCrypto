import { coinList } from "common/data/coinsData";
import { useState } from "react";
import { animateScroll } from "react-scroll";
import CoinRow from "./CoinRow";

export default function CoinList() {
  const scrollToElement = (elementName) => {
    animateScroll.scrollTo(document.getElementById(elementName).offsetTop, {
      duration: 50,
    });
  };

  const [page, setPage] = useState([0, 6]);

  function PageElement() {
    const itemsPerPage = 6;
    const totalItems = Object.keys(coinList).length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
      <div>
        {Array.from({ length: totalPages }).map((_, index) => {
          const start = index * itemsPerPage;
          return (
            <button
              key={index}
              className={page[0] === start ? "btn-active" : ""}
              onClick={() => {
                scrollToElement("coin-list-page");
                setPage([start, start + itemsPerPage]);
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    );
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
            <h3 className="coin-list-volume">Volume</h3>
          </div>
          {Object.keys(coinList)
            .slice(...page)
            .map((coinKey) => (
              <CoinRow
                key={coinKey}
                coinKey={coinKey}
                coin={coinList[coinKey]}
              />
            ))}
        </div>
        <div className="coin-list-pages">
          <PageElement />
        </div>
      </div>
    </div>
  );
}
