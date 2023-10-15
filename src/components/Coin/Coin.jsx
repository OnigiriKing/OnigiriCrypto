import { useParams } from "react-router-dom";
import CoinList from "components/HomeComp/HomeComp.CoinList/CoinList";

export default function Coin() {

     const { id } = useParams();

   return (
       <div id="coin-page" >
        <div className="wrapper coin-page-wrapper">
        <div>
            <img></img>
            <h3></h3>
            <h3></h3>
        </div>
        <div>
            <div>
                <h3></h3>
                <h3></h3>
                <h3></h3>
            </div>
            <div></div>
        </div>
        </div>
       </div>
    );
}