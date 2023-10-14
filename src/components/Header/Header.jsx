import React from "react";
import allSvg from "svg/otherSvg";

export default function Header() {
  return (
    <header className="header-page">
      <div className="wrapper header-footer-wrapper">
        <div className="header-name">
          <h2>Onigiri Crypto</h2>
        </div>
        <div className="header-links">
          <a href="#">Home</a>
          <a href="#">Market</a>
          <a href="#">Choose Us</a>
          <a href="#">Join</a>
        </div>
        <div className="header-social">
          <a href="#">{allSvg(10).twitter}</a>
          <a href="#">{allSvg(10).youTube}</a>
        </div>
      </div>
    </header>
  );
}
