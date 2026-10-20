export default function CoinValue({ price, type = 6 }) {
  const percent = price[5];

  if (type === 5) {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 1,
    }).format(percent * 100);
    return (
      <b className={percent < 0 ? "price-red" : "price-green"}>
        {formattedNumber}%
      </b>
    );
  } else {
    const formattedNumber = new Intl.NumberFormat("en-US", {
      style: "decimal",
      maximumFractionDigits: 2,
    }).format(price[type]);
    return <b>${formattedNumber}</b>;
  }
}
