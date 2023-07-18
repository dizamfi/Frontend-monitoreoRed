import { Navigate, Route, Routes } from "react-router-dom";
import { AppTheme } from "../../theme/AppTheme";
import { DashboardPage } from "../pages/DashboardPage";
import { DeviceConectedPage } from "../pages/DeviceConectedPage";
import { MySideBar } from "../components/MySideBar";
import { TopBar } from "../components/TopBar";
import { PortsPage } from "../pages/PortsPage";
import { AlertasPage } from "../pages/AlertasPage";

export const MonitoringRoutes = () => {
  return (
   

    <AppTheme>
      <div className="app">
        <MySideBar />

        <main className="content">
          <TopBar />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/devices" element={<DeviceConectedPage />} />
            <Route path="/ports" element={<PortsPage />} />
            <Route path="/alerts" element={<AlertasPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </AppTheme>
  );
};
