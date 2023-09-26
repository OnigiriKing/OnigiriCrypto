import React from "react";
import Welcome from "./HomeComp.Welcome/Welcome";
import JoinUs from "./HomeComp.JoinUs/JoinUs";
import ChooseUs from "./HomeComp.ChooseUs/ChooseUs";

export default function HomeComp() {
  return (
    <div className="body-page">
    <Welcome />
    <ChooseUs />
    <JoinUs />
    </div>
  );
}
