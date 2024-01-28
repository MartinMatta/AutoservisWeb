import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import PriceList from "./Pages/PriceList";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import AirDetail from "./Pages/DetailsPage/AirDetail";
import BatteryDetail from "./Pages/DetailsPage/BatteryDetail";
import BrakeDetail from "./Pages/DetailsPage/BrakeDetail";
import DiagDetail from "./Pages/DetailsPage/DiagDetail";
import EngineDetail from "./Pages/DetailsPage/EngineDetail";
import GlassDetail from "./Pages/DetailsPage/GlassDetail";
import LightDetail from "./Pages/DetailsPage/LightDetail";
import OilDetail from "./Pages/DetailsPage/OilDetail";
import TiresDetail from "./Pages/DetailsPage/TiresDetail";
import Privacy from "./Pages/Privacy";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<AboutUs />} />
        <Route path="/cennik" element={<PriceList />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/klima" element={<AirDetail />} />
        <Route path="/elektronika" element={<BatteryDetail />} />
        <Route path="/brzdy" element={<BrakeDetail />} />
        <Route path="/diagnostika" element={<DiagDetail />} />
        <Route path="/motor" element={<EngineDetail />} />
        <Route path="/sklo" element={<GlassDetail />} />
        <Route path="/svetla" element={<LightDetail />} />
        <Route path="/olej" element={<OilDetail />} />
        <Route path="/pneumatiky" element={<TiresDetail />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
