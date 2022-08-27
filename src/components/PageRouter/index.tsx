import { Routes, Route, Navigate } from "react-router-dom";

import DashboardPage from "../../pages/DashboardPage";
import StatisticsPage from "../../pages/StatisticsPage";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route
        path="*"
        element={
          <div>
            <h2>404 Page not found</h2>
          </div>
        }
      />
    </Routes>
  );
};

export default PageRouter;
