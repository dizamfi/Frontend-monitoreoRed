import {
  Box,
  Button,
  IconButton,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tonalidad } from "../../theme/theme";
import { useContext, useRef, useState } from "react";
import AnnouncementRoundedIcon from "@mui/icons-material/AnnouncementRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/authentication/thunks";
import { Link } from "react-router-dom";

export const TopBar = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tonalidad(mode);
  const modeColor = useContext(ColorModeContext);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const IconButtonRef = useRef(null);

  const onLogout = () => {
    dispatch(logoutUser());
  };

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

        <IconButton onClick={handleOpen} ref={IconButtonRef}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Popover
          // id={id}
          open={isOpen}
          anchorReference="anchorEl"
          anchorEl={IconButtonRef.current}
          onClose={handleClose}
          PaperProps={{style: {backgroundColor: colors.primary[900]}}}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{ minWidth: "400px", minHeight: "200px" }}

          // style={{ width: '800px', height: '200px' }}
        >
          <Box width={258}>
            <Box maxHeight={200} overflow="auto" p={1}>
              {/* Contenido de las notificaciones */}

              <Button
                variant="contained"
                // color= {colors.yellow[700]}
                startIcon={<AnnouncementRoundedIcon />}
                // onClick={}
                LinkComponent={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Aterta de seguridad en la 1</Typography>
              </Button>

              <Button
                variant="contained"
                // color= {colors.yellow[700]}
                startIcon={<AnnouncementRoundedIcon />}
                onClick={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Aterta de seguridad en la 1</Typography>
              </Button>

              <Button
                variant="contained"
                // color= {colors.yellow[700]}
                startIcon={<AnnouncementRoundedIcon />}
                onClick={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Aterta de seguridad en la 1</Typography>
              </Button>

              <Button
                variant="contained"
                // color= {colors.yellow[700]}
                startIcon={<AnnouncementRoundedIcon />}
                onClick={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Aterta de seguridad en la 1</Typography>
              </Button>

              <Button
                variant="contained"
                // color= {colors.yellow[700]}
                startIcon={<AnnouncementRoundedIcon />}
                onClick={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Aterta de seguridad en la 1</Typography>
              </Button>
            </Box>
          </Box>
        </Popover>
        <IconButton onClick={onLogout}>
          <LogoutOutlinedIcon sx={{ color: "#FF0000" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
