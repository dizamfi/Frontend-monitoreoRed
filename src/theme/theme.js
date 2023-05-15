// #2e7d32

import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

// green accent
// #0f2922

export const tonalidad = (mode) => ({
  ...(mode === "dark"
    ? {
        yellow: {
            100: "#fcead0",
            200: "#f9d6a1",
            300: "#f5c171",
            400: "#f2ad42",
            500: "#ef9813",
            600: "#bf7a0f",
            700: "#8f5b0b",
            800: "#603d08",
            900: "#301e04"
        },

        primary: {
          100: "#d1d0d0",
          200: "#a3a1a1",
          300: "#747272",
          400: "#464343",
          500: "#181414",
          600: "#131010",
          700: "#0e0c0c",
          800: "#0a0808",
          900: "#050404"
        },


        green: {
          100: "#d5e5d6",
          200: "#abcbad",
          300: "#82b184",
          400: "#58975b",
          500: "#2e7d32",
          600: "#256428",
          700: "#1c4b1e",
          800: "#123214",
          900: "#09190a",
        },

        white: {
          100: "#fcfdfe",
          200: "#fafbfd",
          300: "#f7f9fb",
          400: "#f5f7fa",
          500: "#f2f5f9",
          600: "#c2c4c7",
          700: "#919395",
          800: "#616264",
          900: "#303132",
        },
      }
    : {
        yellow: {
          100: "#301e04",
          200: "#603d08",
          300: "#8f5b0b",
          400: "#bf7a0f",
          500: "#ef9813",
          600: "#f2ad42",
          700: "#f5c171",
          800: "#f9d6a1",
          900: "#fcead0",
        },

        primary: {
          100: "#050404",
          200: "#0a0808",
          300: "#0e0c0c",
          400: "#131010",
          500: "#181414",
          600: "#464343",
          700: "#747272",
          800: "#a3a1a1",
          900: "#d1d0d0",
        },


        green: {
          100: "#09190a",
          200: "#123214",
          300: "#1c4b1e",
          400: "#256428",
          500: "#2e7d32",
          600: "#58975b",
          700: "#82b184",
          800: "#abcbad",
          900: "#d5e5d6",
        },

        white: {
          100: "#303132",
          200: "#616264",
          300: "#919395",
          400: "#c2c4c7",
          500: "#f2f5f9",
          600: "#f5f7fa",
          700: "#f7f9fb",
          800: "#fafbfd",
          900: "#fcfdfe",
        },
      }),
});

// Configuración del tema
export const themeConf = (mode) => {
  const colors = tonalidad(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
          primary: {
            main: colors.primary[500]
          },
          secondary: {
            main: colors.yellow[500]
          },
          background: {
            default: colors.primary[500]
          }
        
        }
      : {
        primary: {
          main: colors.primary[100]
        },
        secondary: {
          main: colors.yellow[500]
        },
        background: {
          default: colors.white[500]
        }
      
      })
    },

    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14
      }
    }
  }
}

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"))
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeConf(mode)), [mode]);

  return [theme, colorMode];
};