import homeSvg from "svg/homeSvg";
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
              <div className="choose-reason-svg">{homeSvg(20).wallet}</div>
              <div className="choose-reason-text">
                <h3>CONNECT YOUR WALLET</h3>
                <p>Use Trust Wallet, Metamask or to connect to the app.</p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(20).wallet}</div>
              <div className="choose-reason-text">
                <h3>SELECT YOUR QUANTITY</h3>
                <p>
                  Upload your crypto and set a title, description and price.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(20).wallet}</div>
              <div className="choose-reason-text">
                <h3>CONFIRM TRANSACTION</h3>
                <p>Earn by selling your crypto on our marketplace.</p>
              </div>
            </div>
          </div>
          <div className="choose-us-img">IMAGE</div>
          <div className="choose-us-reasons">
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(20).wallet}</div>
              <div className="choose-reason-text">
                <h3>RECEIVE YOUR OWN NFTS</h3>
                <p>Invest all your crypto at one place on one platform.</p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(20).wallet}</div>
              <div className="choose-reason-text">
                <h3>TAKE A MARKET TO SELL</h3>
                <p>
                  Discover, collect the right crypto collections to buy or sell.
                </p>
              </div>
            </div>
            <div className="choose-reason">
              <div className="choose-reason-svg">{homeSvg(20).wallet}
              </div>
              <div className="choose-reason-text">
                <h3>DRIVE YOUR COLLECTION</h3>
                <p>We make it easy to Discover, Invest and manage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
