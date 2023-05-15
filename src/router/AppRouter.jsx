import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../Authentication/routes/AuthRoutes";
import { MonitoringRoutes } from "../Monitoring/routes/MonitoringRoutes";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../Authentication/components/CheckingAuth";
import { useEffect } from "react";
import { checkAutentication } from "../store/authentication/thunks";

export const AppRouter = () => {
  // const status = "no-authenticated";
  const dispatch = useDispatch();
  const { estado } = useSelector((state) => state.authentication);

  useEffect(() => {
    dispatch( checkAutentication() );
  }, [] )
  

  if (estado === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {estado === "authenticated" 
        ? <Route path="/*" element={<MonitoringRoutes />} />
        : <Route path="/auth/*" element={<AuthRoutes />} />
      }

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
