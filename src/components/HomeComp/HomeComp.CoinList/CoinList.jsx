import btc from "img/crypto/btc.png"
import CoinPrice from "common/api/getCoinPrice";


export default function CoinList() {

  const element = (
    <div className="coin-info">
      <div>
        <img />
        <h3></h3>
      </div>
      <h3></h3>
      <h3></h3>
      <h3></h3>
    </div>
  );

   return (
     <div id="coin-list-page">
       <div className="wrapper coin-list-wrapper">
         <h1>Market update</h1>
         <div className="coin-list-table">
           <div className="coin-list-table-banner">
             <h3>Coin</h3>
             <h3>Price</h3>
             <h3>24h Change</h3>
             <h3>Market Cap</h3>
           </div>
           <div className="coin-info">
             <div className="coin-info-img">
               <img src={btc} alt="btc" />
               <h3>Bitcoin</h3>
             </div>
             <h3>$ 1,000</h3>
             <h3 className="coin-info-persantage">+1%</h3>
             <h3>$ 65,000,000</h3>
           </div>
         </div>
         <div className="coin-list-pages">
          <button>1</button>
         </div>
       </div>
     </div>
   );
}