import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DemoPage from "../screens/DemoPage";
import LandingPage from "../screens/LandingPage/LandingPage";
import NotFoundPage from "../screens/NotFoundPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
