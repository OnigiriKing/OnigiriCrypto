import React from "react";
import Welcome from "./Components/welcomeScreen";
import Join from "./Components/JoinUs";

export default function HomePage() {
  return (
    <div className="body-page">
    <Welcome />
    <Join />
    </div>
  );
}
