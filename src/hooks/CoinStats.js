import useCoinTicket from "./useCoinTicker";
import CoinValue from "components/CoinValue";

export default function CoinStats({ crypto }) {
  const { price, hasError } = useCoinTicket(crypto);

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
    <div className="coin-page-price">
      <h3>Price: {renderValue(6)}</h3>
      <h3>24h Change: {renderValue(5)}</h3>
      <h3>Volume: {renderValue(7)}</h3>
    </div>
  );
}
