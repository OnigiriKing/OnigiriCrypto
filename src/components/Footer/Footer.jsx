import React from "react";
import bfxLogo from "img/footer/bfxLogo.png";
import ApiStatus from "API/FetchApiStatus";

export default function Footer() {
  return (
    <footer id="footer-page">
      <div className="wrapper header-footer-wrapper">
        <div className="footer-all-links">
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
