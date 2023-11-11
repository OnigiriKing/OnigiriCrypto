import allSvg from "svg/otherSvg";
import { handleMenuClick } from "common/utils/changeClass";

export default function DropMenu() {
  return (
    <div id="drop-menu">
      <div className="drop-menu-wrapper">
        <div className="drop-menu-btn" onClick={() => handleMenuClick()}>
          {allSvg(40).closeBtn}
        </div>
        <div className="drop-menu-nav-links">
          <a href="/#welcome-screen" onClick={() => handleMenuClick()}>
            Home
          </a>
          <a href="/#coin-list-page" onClick={() => handleMenuClick()}>
            Market
          </a>
          <a href="/#choose-us-screen" onClick={() => handleMenuClick()}>
            Choose Us
          </a>
          <a href="/#join-us-screen" onClick={() => handleMenuClick()}>
            Join
          </a>
        </div>
        <div className="drop-menu-social">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            {allSvg(35).twitter}
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            {allSvg(35).youTube}
          </a>
        </div>
      </div>
    </div>
  );
}
