import React from "react";
import "./style.css";
import lnkdin from "./img/lnkdin.png";
import inst from "./img/inst.png";
import facebook from "./img/facebook.png";

export default function Footer() {
  const links = {
    linkedinLink: "https://www.linkedin.com/in/onigiriking/",
    instLink: "https://instagram.com/onigiri_king",
    fbLink: "https://www.facebook.com/profile.php?id=100079879942721",
  };


  return (
    <footer className="footerWrapper">
      <div className="cypywrite">
        Copyright © 2023 OnigiriKing. All rights reserved.
      </div>

      <div className="footerLinks">
        <span>
          <a href={links.linkedinLink}>
            <img src={lnkdin} />
          </a>
          <a href={links.instLink}>
            <img src={inst} />
          </a>
          <a href={links.fbLink}>
            <img src={facebook} />
          </a>
        </span>
      </div>
    </footer>
  );
}
