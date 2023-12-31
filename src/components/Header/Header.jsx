import React from "react";
import allSvg from "svg/otherSvg";
import { Link } from "react-router-dom";
import DropMenu from "./Header.DropMenu/DropMenu";
import { handleMenuClick } from "common/utils/changeClass";

export default function Header() {

  return (
    <header className="header-page">
      <DropMenu />
      <div className="wrapper header-footer-wrapper">
        <div className="header-name">
          <Link to={"/"}>Onigiri Crypto</Link>
        </div>
        <div className="header-links">
          <a href="/#welcome-screen">Home</a>
          <a href="/#coin-list-page">Market</a>
          <a href="/#choose-us-screen">Choose Us</a>
          <a href="/#join-us-screen">Join</a>
        </div>
        <div className="header-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            {allSvg(25).twitter}
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            {allSvg(25).youTube}
          </a>
        </div>
        <div className="header-menu-btn" onClick={() => handleMenuClick()}>
          <div>{allSvg(30).menu}</div>
        </div>
      </div>
    </header>
  );
}
