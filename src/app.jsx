import HeaderPage from "Pages/Header/HeaderPage";
import FooterPage from "Pages/Footer/FooterPage";
import HomePage from "Pages/Body/HomePage";
import { Route, Routes } from "react-router-dom";
import CoinPage from "Pages/Coin/CoinPage";

export default function App() {



  return (
    <>
      <HeaderPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
      </Routes>
      <FooterPage />
    </>
  );
}
