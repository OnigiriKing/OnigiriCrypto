import CoinPrice from "common/api/getCoinPrice";
import { coinList } from "common/data/coinsData";

export default function CoinList() {

  function DisplayCoins() {
    return Object.keys(coinList).map((key) => {
      const el = coinList[key];
      return (
        <div className="coin-info">
          <div className="coin-info-img">
            <img src={el.img} alt={el.name} />
            <h3>{el.name}</h3>
          </div>
          <h3>
            $<CoinPrice crypto={el.sigh} />
          </h3>
          <h3 className="coin-info-persantage">
            <CoinPrice crypto={el.sigh} type="4" />%
          </h3>
          <h3>
            $ <CoinPrice crypto={el.sigh} type="7" />
          </h3>
        </div>
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
           <button>1</button>
         </div>
       </div>
     </div>
   );
}