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
          <a href="/#choose-us-screen">Features</a>
          <a href="/#join-us-screen">Explore</a>
        </div>
        <div className="header-menu-btn" onClick={() => handleMenuClick()}>
          <div>{allSvg(30).menu}</div>
        </div>
      </div>
    </header>
  );
}
