import { Link } from "react-router-dom";
import CoinPrice from "API/FetchCoinPrice";
import { welcomeCoins } from "common/data/coinsData";

export default function Welcome() {
  function Coins() {
    return Object.keys(welcomeCoins).map((key) => {
      const el = welcomeCoins[key];
      return (
        <Link to={`/coin/${key}`}>
          <img src={el.img} alt={el.name}></img>
          <div>{el.name}</div>
          <h3>
            <CoinPrice crypto={el.sigh} />
          </h3>
        </Link>
      );
    });
  }

  return (
    <div id="welcome-screen">
      <div className="wrapper welcome-wrapper">
        <div className="welcome-message">
          <h2>TRACK AND TRADE</h2>
          <h2>CRYPTO CURRENCIES</h2>
        </div>
        <div className="welcome-crypto">
          <Coins />
        </div>
      </div>
    </div>
  );
}
