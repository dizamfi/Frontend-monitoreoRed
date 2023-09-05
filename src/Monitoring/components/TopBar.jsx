import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Popover,
  Radio,
  RadioGroup,
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
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/authentication/thunks";
import { Link } from "react-router-dom";
import { onSettings } from "../../store/platform/platformSlice";

export const TopBar = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tonalidad(mode);
  const modeColor = useContext(ColorModeContext);
  const dispatch = useDispatch();

  const { settings, settingsDefect } = useSelector((state) => state.platform);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(settings);
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [selected, setSelected] = useState(settingsDefect);

  const handleOpenSettings = () => {
    setIsSettingsOpen(true);
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(onSettings(event.target.value));
    handleCloseSettings();
  };

  const handleOpenAlerts = () => {
    setIsAlertsOpen(true);
  };

  const handleCloseAlerts = () => {
    setIsAlertsOpen(false);
  };

  const IconButtonRefSettings = useRef(null);
  const IconButtonRefAlerts = useRef(null);

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">

        
          <IconButton onClick={handleOpenSettings} ref={IconButtonRefSettings}>
          <SettingsOutlinedIcon />
        </IconButton>
        <Popover
          open={isSettingsOpen}
          anchorReference="anchorEl"
          anchorEl={IconButtonRefSettings.current}
          onClose={handleCloseSettings}
          PaperProps={{style: {backgroundColor: colors.primary[900]}}}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ minWidth: "400px", minHeight: "200px" }}
        >
          <Box width={258}>
            <Box maxHeight={200} overflow="auto" p={1}>
              {/* Contenido del popover de Settings */}
              <Typography>Configuración de la aplicación</Typography>
              <RadioGroup
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <FormControlLabel
                  value="SNMP"
                  control={<Radio  sx={{
                    color: selectedOption === "SNMP" ? colors.yellow[300] : colors.yellow[900],
                  }} />}
                  label="SNMP"
                />
                <FormControlLabel
                  value="SSH"
                  control={<Radio sx={{
                    color: selectedOption === "SNMP y SSH" ? colors.green[900] : colors.yellow[900],
                  }} />}
                  label="SSH"
                />

                <FormControlLabel
                  value="SNMP y SSH"
                  control={<Radio sx={{
                    color: selectedOption === "SNMP y SSH" ? colors.green[900] : colors.yellow[900],
                  }} />}
                  label="SNMP y SSH"
                />
              </RadioGroup>
              {/* Aquí coloca el contenido adicional de la configuración */}
            </Box>
          </Box>
        </Popover>
       

        
      </Box>

      <Box display="flex">   
        <IconButton onClick={modeColor.toggleColorMode}>
          {mode === "dark" ? (
            <LightModeTwoToneIcon />
          ) : (
            <NightsStayOutlinedIcon />
          )}
        </IconButton>

        <IconButton onClick={handleOpenAlerts} ref={IconButtonRefAlerts}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Popover
          open={isAlertsOpen}
          anchorReference="anchorEl"
          anchorEl={IconButtonRefAlerts.current}
          onClose={handleCloseAlerts}
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
        >
          <Box width={258}>
            <Box maxHeight={200} overflow="auto" p={1}>
              {/* Contenido del popover de Alerts */}
              <Button
                variant="contained"
                startIcon={<AnnouncementRoundedIcon />}
                LinkComponent={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Alerta de seguridad en la 1</Typography>
              </Button>

              <Button
                variant="contained"
                startIcon={<AnnouncementRoundedIcon />}
                LinkComponent={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Alerta de seguridad en la 1</Typography>
              </Button>

              <Button
                variant="contained"
                startIcon={<AnnouncementRoundedIcon />}
                LinkComponent={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Alerta de seguridad en la 1</Typography>
              </Button>

              <Button
                variant="contained"
                startIcon={<AnnouncementRoundedIcon />}
                LinkComponent={<Link to={"/alerts"} />}
                sx={{mb:1}}
              >
                <Typography>Alerta de seguridad en la 1</Typography>
              </Button>

              {/* Aquí coloca el contenido del popover de Alerts */}
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
