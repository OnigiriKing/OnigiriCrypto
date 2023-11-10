import React from "react";
import otherSvg from "svg/otherSvg";
import bfxLogo from "img/footer/bfxLogo.png";
import ApiStatus from "API/FetchApiStatus";

export default function Footer() {
  return (
    <footer id="footer-page">
      <div className="wrapper header-footer-wrapper">
        <div className="footer-all-links">
          <div className="footer-social">
            <a href="#">{otherSvg(25).twitter}</a>
            <a href="#">{otherSvg(25).discord}</a>
            <a href="#">{otherSvg(25).facebook}</a>
            <a href="#">{otherSvg(25).youTube}</a>
          </div>
          <div className="footer-terms">
            <a href="#">Privacy</a>
            <a href="#">Terms of Use</a>
          </div>
          <h4>
            <ApiStatus />
          </h4>
          <h3>
            Powered by the
            <a href="https://www.bitfinex.com" target="_blank" rel="noreferrer">
              Bitfinex
            </a>
            API <img src={bfxLogo} alt="Logo" />
          </h3>
        </div>
      </div>
    </footer>
  );
}
