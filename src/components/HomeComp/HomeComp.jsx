import React from "react";
import Welcome from "./HomeComp.Welcome/Welcome";
import JoinUs from "./HomeComp.JoinUs/JoinUs";

export default function HomeComp() {
  return (
    <div className="body-page">
    <Welcome />
    <JoinUs />
    </div>
  );
}
