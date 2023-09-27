import React from "react";
import allSvg from "svg/headerFooterSvg";
import bfxLogo from "img/footer/bfxLogo.png";

export default function Footer() {
  return (
    <footer id="footer-page">
      <div className="wrapper header-footer-wrapper">
        <img></img>
        <div className="footer-all-links">
          <div className="footer-social">
            <a href="#">{allSvg(10).twitter}</a>
            <a href="#">{allSvg(10).discord}</a>
            <a href="#">{allSvg(10).facebook}</a>
            <a href="#">{allSvg(10).youTube}</a>
          </div>
          <div className="footer-terms">
            <a href="#">Privacy</a>
            <a href="#">Terms of Use</a>
          </div>
          <h3>
            Powered by the
            <a href="https://www.bitfinex.com" target="_blank" rel="noreferrer">
              Bitfinex
            </a>{" "}
            API <img src={bfxLogo} />
          </h3>
        </div>
        <img></img>
      </div>
    </footer>
  );
}
