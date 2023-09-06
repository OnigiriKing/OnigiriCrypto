import React from "react";

export default function Footer() {
  const links = {
    linkedinLink: "https://www.linkedin.com/in/onigiriking/",
    instLink: "https://instagram.com/onigiri_king",
    fbLink: "https://www.facebook.com/profile.php?id=100079879942721",
  };


  return (
    <footer id="footer-page">
      <div className="wrapper footer-wrapper">
        <img></img>
        <div className="footer-all-links">
          <div className="footer-social">
            <a></a>
            <a></a>
            <a></a>
            <a></a>
          </div>
          <div className="footer-terms">
            <a>Privacy</a>
            <a>Terms of Use</a>
          </div>
        </div>
        <img></img>
      </div>
    </footer>
  );
}
