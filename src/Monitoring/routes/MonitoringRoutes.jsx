import { Navigate, Route, Routes } from "react-router-dom";
import { AppTheme } from "../../theme/AppTheme";
import { DashboardPage } from "../pages/DashboardPage";
import { DeviceConectedPage } from "../pages/DeviceConectedPage";
import { MySideBar } from "../components/MySideBar";
import { TopBar } from "../components/TopBar";

export const MonitoringRoutes = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<DashboardPage />} />
    //   {/* <Route path="/devices" element={<DeviceConectedPage />} /> */}
    //   <Route path="/*" element={<Navigate to="/" />} />
    // </Routes>

    <AppTheme>
      <div className="app">
        <MySideBar />

        <main className="content">
          <TopBar />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/devices" element={<DeviceConectedPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </AppTheme>
  );
};
