import React from "react";
import Welcome from "./HomeComp.Welcome/Welcome";
import JoinUs from "./HomeComp.JoinUs/JoinUs";
import ChooseUs from "./HomeComp.ChooseUs/ChooseUs";
import CoinList from "./HomeComp.CoinList/CoinList";

export default function HomeComp() {
  return (
    <div className="body-page">
    <Welcome />
    <CoinList />
    <ChooseUs />
    <JoinUs />
    </div>
  );
}
