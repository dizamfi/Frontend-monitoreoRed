import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tonalidad } from "../../theme/theme";
import { useContext } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/authentication/thunks";

export const TopBar = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tonalidad(mode);
  const modeColor = useContext(ColorModeContext);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        {/* <IconButton >
          <ArrowBackIosRoundedIcon />
        </IconButton> */}
      </Box>

      <Box display="flex">
        <IconButton onClick={modeColor.toggleColorMode}>
          {mode === "dark" ? (
            <LightModeTwoToneIcon />
          ) : (
            <NightsStayOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton onClick={onLogout} >
          <LogoutOutlinedIcon sx={{ color: "#FF0000" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
