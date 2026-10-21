import homeSvg from "svg/homeSvg";
import homeBtf from "img/homePage/homeBft.png";
export default function ChooseUs() {
  return (
    <div id="choose-us-screen">
      <div className="wrapper choose-us-wrapper">
        <h1 className="choose-us-baner">
          MARKET AT <b>A GLANCE</b>
        </h1>
        <div className="choose-us-body">
          <div className="choose-us-reasons">
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).wallet}</div>
              <div className="choose-reason-text">
                <h2>NO SIGN-UP</h2>
                <p>
                  Check prices without creating an account or connecting a wallet.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).btc}</div>
              <div className="choose-reason-text">
                <h2>COMPARE COINS</h2>
                <p>
                  Browse Bitcoin, Ethereum, and other coins in one market list.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).tool}</div>
              <div className="choose-reason-text">
                <h2>AUTO UPDATES</h2>
                <p>
                  Prices refresh automatically while you browse.
                </p>
              </div>
            </div>
          </div>
          <div className="choose-us-img">
            <img src={homeBtf} alt="Home" />
          </div>
          <div className="choose-us-reasons">
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).nft}</div>
              <div className="choose-reason-text">
                <h2>COIN DETAILS</h2>
                <p>
                  Open a coin to see its description, price, and trading volume.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).global}</div>
              <div className="choose-reason-text">
                <h2>BITFINEX DATA</h2>
                <p>
                  View market prices quoted in US dollars from the Bitfinex API.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).profit}</div>
              <div className="choose-reason-text">
                <h2>24H CHANGES</h2>
                <p>
                  See each coin's daily percentage change, with gains and losses
                  in color.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
