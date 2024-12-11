import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import MotionPage from "./../pages/MotionPage";
import RipplePage from "./../pages/RipplePage";

import Layout from "./../layout/NavBarLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="motion" element={<MotionPage />} />
        <Route path="ripple" element={<RipplePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
