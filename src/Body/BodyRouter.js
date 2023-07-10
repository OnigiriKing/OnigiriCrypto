import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import CryptoGraph from "./BodyElements/CryptoGraph/Graph";
import AboutPage from "./BodyElements/AboutPage/About";
import NotFound from "./BodyElements/NotFound/NotFound";
import "./style.css";

export default function BodyRouter() {
  return (
    <div className="bodyWrapper">
      <Routes>
        <Route path="/t?">
          <Route path="graph" element={<CryptoGraph />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
