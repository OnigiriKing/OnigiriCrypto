import Header from "./Pages/Header/HeaderPage";
import HomePage from "./Pages/Body/HomePage";
import Footer from "./Pages/Footer/FooterPage";
import { Route, Routes } from "react-router-dom";

export default function App() {



  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />} />
        </Routes>
      <Footer />
    </>
  );
}
