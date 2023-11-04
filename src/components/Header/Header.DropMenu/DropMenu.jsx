import allSvg from "svg/otherSvg";

export default function DropMenu() {
  return (
    <div id="drop-menu">
      <div className="drop-menu-wrapper">
        <div className="drop-menu-nav-links">
          <a href="/#welcome-screen">Home</a>
          <a href="/#coin-list-page">Market</a>
          <a href="/#choose-us-screen">Choose Us</a>
          <a href="/#join-us-screen">Join</a>
        </div>
        <div className="drop-menu-social">
          <a href="#">{allSvg(10).twitter}</a>
          <a href="#">{allSvg(10).youTube}</a>
        </div>
      </div>
    </div>
  );
}
