import { Link } from "react-router-dom";
import useCoinTicker from "hooks/useCoinTicker";
import CoinValue from "components/CoinValue";

export default function CoinRow({ coin, coinKey }) {
  const { price, hasError } = useCoinTicker(coin.sigh);

  function renderValue(type) {
    if (hasError) {
      return <b>Unavailable</b>;
    }

    if (!price) {
      return <b>Loading...</b>;
    }
    return <CoinValue price={price} type={type} />;
  }

  return (
    <Link to={`/coin/${coinKey}`} className="coin-info">
      <div className="coin-info-img">
        <img src={coin.img} alt={coin.name} />
        <h3>{coin.name}</h3>
      </div>
      <h3>{renderValue(6)}</h3>
      <h3 className="coin-info-persantage">{renderValue(5)}</h3>
      <h3 className="coin-list-volume">{renderValue(7)}</h3>
    </Link>
  );
}
