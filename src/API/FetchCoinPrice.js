import CoinValue from "components/CoinValue";
import useCoinTicket from "hooks/useCoinTicker";

export default function CoinPrice({ crypto, type = 6 }) {
  const {price, hasError} = useCoinTicket(crypto)

  if (hasError) {
    return <b>Unavailable</b>;
  }

  if (!price) {
    return <b>Loading...</b>;
  }

  return <CoinValue price={price} type={type} />;
}
