import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../screens/LandingPage/LandingPage";
import NotFoundPage from "../screens/NotFoundPage";
import DemoPage from "../screens/DemoPage"; // Import your new DemoPage component

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPage />} /> // Route for /demo
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
