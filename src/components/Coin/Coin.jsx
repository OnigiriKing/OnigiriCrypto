import { useParams } from "react-router-dom";
import { coinList } from "common/data/coinsData";
import CoinPrice from "common/api/getCoinPrice";

export default function Coin() {

     const { coinType } = useParams();
     const coin = coinType.toUpperCase();
     const element = coinList[coin];

   return (
     <div id="coin-page">
       <div className="wrapper coin-page-wrapper">
         <div className="coin-page-image">
           <img src={element.img}></img>
           <h3>{element.name}</h3>
           <h3>Rank #1</h3>
         </div>
         <div className="coin-page-info">
           <div className="coin-page-price">
             <h3>
               Price: $<CoinPrice crypto={coin} />
             </h3>
             <h3>
               24h Change: <CoinPrice crypto={coin} type="4" />%
             </h3>
             <h3>
               Volume: $<CoinPrice crypto={coin} type="7" />
             </h3>
           </div>
           <div className="coin-page-des">{element.des}</div>
         </div>
       </div>
     </div>
   );
}