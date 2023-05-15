import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

export const AppTheme = ({ children }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
