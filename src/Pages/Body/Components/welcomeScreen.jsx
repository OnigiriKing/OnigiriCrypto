import { Link } from "react-router-dom";

export default function Welcome() {

   return (
     <div id="welcome-screen">
       <div className="wrapper welcome-wrapper">
         <div className="welcome-message">
           <h2>TRACK AND TRADE</h2>
           <h2>CRYPTO CURRENCIES</h2>
         </div>
         <div className="welcome-crypto">
           <Link to="/">
            <img></img>
            <div>Bitcoin</div>
            <h3>2000</h3>
           </Link>
           <Link to="/">
            <img></img>
            <div>Ethereum</div>
            <h3>3000</h3>
           </Link>
           <Link to="/">
            <img></img>
            <div>Tether</div>
            <h3>1</h3>
           </Link>
           <Link to="/">
            <img></img>
            <div>Leo</div>
            <h3>20</h3>
           </Link>

         </div>
       </div>
     </div>
   );
}