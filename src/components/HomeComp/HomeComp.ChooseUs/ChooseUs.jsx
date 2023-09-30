import homeSvg from "svg/homeSvg";
import homeBtf from "img/homePage/homeBtf.png";
export default function ChooseUs() {
  return (
    <div id="choose-us-screen">
      <div className="wrapper choose-us-wrapper">
        <h2 className="choose-us-baner">
          WHY <b>CHOOSE US</b>
        </h2>
        <div className="choose-us-body">
          <div className="choose-us-reasons">
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).wallet}</div>
              <div className="choose-reason-text">
                <h3>EASY WALLET INTEGRATION</h3>
                <p>
                  Connect Trust Wallet, Metamask, or any popular wallet
                  effortlessly for a secure experience.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).btc}</div>
              <div className="choose-reason-text">
                <h3>DIVERSE CRYPTO SUPPORT</h3>
                <p>
                  Trade Bitcoin, Ethereum, and more - we support a variety of
                  cryptocurrencies.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).tool}</div>
              <div className="choose-reason-text">
                <h3>USER-FRIENDLY TOOLS</h3>
                <p>
                  Set quantities, customize listings, and control your crypto
                  experience with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="choose-us-img">
            <img src={homeBtf} />
          </div>
          <div className="choose-us-reasons">
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).nft}</div>
              <div className="choose-reason-text">
                <h3>RECEIVE YOUR OWN NFTS</h3>
                <p>Invest all your crypto at one place on one platform.</p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).global}</div>
              <div className="choose-reason-text">
                <h3>GLOBAL EXPOSURE</h3>
                <p>
                  Join a worldwide community of crypto enthusiasts to expand
                  your network.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(30).profit}</div>
              <div className="choose-reason-text">
                <h3>PROFIT OPPORTUNITIES</h3>
                <p>
                  Maximize profits with our platform, whether you're new to
                  trading or an expert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
