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
         <div>
           <img src={element.img}></img>
           <h3>{element.name}</h3>
           <h3></h3>
         </div>
         <div>
           <div>
             <h3>
               Price: <CoinPrice crypto={coin} />
             </h3>
             <h3>
               24h Change: <CoinPrice crypto={coin} type="4"/>%
             </h3>
             <h3></h3>
           </div>
           <div></div>
         </div>
       </div>
     </div>
   );
}