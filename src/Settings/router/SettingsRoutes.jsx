import { Navigate, Route, Routes } from "react-router-dom";
import { SettingsNetPage } from "../pages/SettingsNetPage";


export const SettingsRoutes = () => {
  return (
      <Routes>
        <Route path="network" element={<SettingsNetPage />} />
        
        {/* <Route path="/*" element={ <Navigate to="/auth/login"/>} /> */}
      </Routes>
  );
};
