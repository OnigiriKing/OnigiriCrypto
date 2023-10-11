import { Link } from "react-router-dom";
import btc from "img/crypto/btc.png"
import eth from "img/crypto/eth.png"
import usdt from "img/crypto/usdt.png"
import leo from "img/crypto/leo.png"
import CoinPrice from "common/api/getCoinPrice";
import { welcomeCoins } from "common/data/coinsData";

export default function Welcome() {

  function Coins() {
   return Object.keys(welcomeCoins).map((key) => {
      const el = welcomeCoins[key];
      return (
        <Link to="/">
          <img src={el.img}></img>
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
           {/* <Link to="/">
             <img src={btc}></img>
             <div>Bitcoin</div>
             <h3>
               <CoinPrice crypto="BTC" />
             </h3>
           </Link>
           <Link to="/">
             <img src={eth}></img>
             <div>Ethereum</div>
             <h3>
               <CoinPrice crypto="ETH" />
             </h3>
           </Link>
           <Link to="/">
             <img src={usdt}></img>
             <div>Tether</div>
             <h3>
               <CoinPrice crypto="USDT" />
             </h3>
           </Link>
           <Link to="/">
             <img src={leo}></img>
             <div>Leo</div>
             <h3>20</h3>
           </Link> */}
         </div>
       </div>
     </div>
   );
}