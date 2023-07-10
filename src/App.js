import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodyRouter from "./Body/BodyRouter";

export default function App() {



  return (
    <>
      <BrowserRouter>
        <Header />
          <BodyRouter />
        <Footer />
      </BrowserRouter>
    </>
  );
}
