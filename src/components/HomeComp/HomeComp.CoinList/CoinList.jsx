export default function CoinList() {

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
             <div>
               <img />
               <h3></h3>
             </div>
             <h3></h3>
             <h3></h3>
             <h3></h3>
           </div>
         </div>
         <div className="coin-list-pages"></div>
       </div>
     </div>
   );
}