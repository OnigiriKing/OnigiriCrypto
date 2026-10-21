import { Link, useParams } from "react-router-dom";
import { coinList } from "common/data/coinsData";
import CoinStats from "hooks/CoinStats";
import otherSvg from "svg/otherSvg";

export default function Coin() {
  const { coinType } = useParams();
  const coin = coinType.toUpperCase();
  const element = coinList[coin];

  if (!element) {
    return (
      <div id="coin-page">
        <div className="wrapper coin-page-wrapper">
          <Link to="/" className="coin-page-home-btn">
            {otherSvg(30).rightArrow}Home
          </Link>
          <div className="coin-not-found">
            <h1>Coin not found</h1>
            <p>Choose a coin from the market list on the home page.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="coin-page">
      <div className="wrapper coin-page-wrapper">
        <Link to={"/"} className="coin-page-home-btn">
          {otherSvg(30).rightArrow}Home
        </Link>
        <div className="coin-page-info-wrapper">
          <div className="coin-page-image">
            <img src={element.img} alt={element.name}></img>
            <h3>{element.name}</h3>
            {element.rank && <h3>Rank #{element.rank}</h3>}
          </div>
          <div className="coin-page-info">
            <CoinStats key={element.sigh} crypto={element.sigh} />
            <div className="coin-page-des">{element.des}</div>
            <a
              href={`https://trading.bitfinex.com/t/${coin}:USD?type=exchange`}
              target="_blank"
              rel="noreferrer"
              className="coin-page-buy"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
