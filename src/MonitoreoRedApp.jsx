import { AppRouter } from "./router/AppRouter";
import { ProSidebarProvider } from "react-pro-sidebar";

export const MonitoreoRedApp = () => {
  return (
    <ProSidebarProvider>
      <AppRouter />
    </ProSidebarProvider>
  );
};
