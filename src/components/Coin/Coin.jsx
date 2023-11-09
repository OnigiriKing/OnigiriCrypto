import { Link, useParams } from "react-router-dom";
import { coinList } from "common/data/coinsData";
import CoinPrice from "API/FetchCoinPrice";
import otherSvg from "svg/otherSvg";

export default function Coin() {
  const { coinType } = useParams();
  const coin = coinType.toUpperCase();
  const element = coinList[coin];

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
            <h3>Rank #{element.rank}</h3>
          </div>
          <div className="coin-page-info">
            <div className="coin-page-price">
              <h3>
                Price: <CoinPrice crypto={element.sigh} />
              </h3>
              <h3>
                24h Change: <CoinPrice crypto={element.sigh} type="4" />
              </h3>
              <h3>
                Volume: <CoinPrice crypto={element.sigh} type="7" />
              </h3>
            </div>
            <div className="coin-page-des">{element.des}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
