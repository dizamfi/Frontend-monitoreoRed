import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tonalidad } from "../../theme/theme";
import { useEffect, useState } from "react";
import { useProSidebar, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import SwitchLeftOutlinedIcon from "@mui/icons-material/SwitchLeftOutlined";
import SwitchRightOutlinedIcon from "@mui/icons-material/SwitchRightOutlined";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import SettingsInputSvideoIcon from "@mui/icons-material/SettingsInputSvideo";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import CampaignIcon from "@mui/icons-material/Campaign";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import LeaderboardRoundedIcon from "@mui/icons-material/LeaderboardRounded";
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.white[400] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
      // routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

export const MySideBar = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, broken, rtl } =
    useProSidebar();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 960) {
        collapseSidebar(true);
      } else {
        collapseSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        height: "100vh",
        top: 0,
        border: 0,
        zIndex: 10000,
      }}
    >
      <Sidebar
        width="30vh"
        rootStyles={{
          border: "none",
        }}
        backgroundColor={colors.primary[400]}
      >
        <Menu
          menuItemStyles={{
            button: ({ level, active }) => {
              if (level === 0)
                return {
                  color: active
                    ? `${colors.green[500]} !important`
                    : colors.white[100],
                  // backgroundColor: active
                  //   && colors.primary[500],

                  borderRadius: "30px",

                  "&:hover": {
                    backgroundColor: colors.primary[300],
                  },
                };
            },
          }}
        >
          {collapsed ? (
            <>
              <Box display="flex" justifyContent="center" margin="20px">
                <IconButton
                  onClick={() => collapseSidebar()}
                  sx={{ textAlign: "center" }}
                >
                  <MenuRoundedIcon
                    sx={{
                      fontSize: "30px",
                      color: `${colors.green[500]} !important`,
                    }}
                  />
                </IconButton>
              </Box>

              {/* <Box display="flex" justifyContent="center" margin="20px">
                <img
                  alt="logo"
                  width="60px"
                  height="60px"
                  src={"../../assets/WatchNet.svg"}
                  style={{ cursor: "pointer" }}
                />
              </Box> */}
            </>
          ) : (
            <>
            {/* <Box
                  pt={2}
                  // ml="55px"
                  display="flex"
                  justifyContent={"center"}
                  // flexGrow={1}
                >
                  <img
                    alt="logo"
                    width="90px"
                    height="90px"
                    src={"../../assets/WatchNet.svg"}
                    style={{ cursor: "pointer" }}
                  />
                </Box> */}

              <Box display="flex" justifyContent="end" margin="20px">
                <IconButton onClick={() => collapseSidebar()}>
                  <SwitchLeftOutlinedIcon
                    sx={{
                      fontSize: "30px",
                      color: `${colors.green[500]} !important`,
                    }}
                  />
                </IconButton>
            

                {/* <Box p={1} justifyContent="start"></Box> */}
              </Box>

              
            </>
          )}

          {/* <Box display="flex" justifyContent="center" margin="20px">
            
            <img
              alt="logo"
              width="100px"
              height="100px"
              src={"../../assets/WatchNet.png"}
              style={{ cursor: "pointer", borderRadius: "100%" }}
            />
          </Box> */}

          <Box pt={"60px"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<GridViewRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Typography
              variant="h6"
              color={colors.white[400]}
              sx={{ m: "15px 20px 5px 20px" }}
            >
              Data
            </Typography> */}

            <Item
              title="Dispositivos"
              to="/devices"
              icon={<PersonalVideoIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Puertos"
              to="/ports"
              icon={<SettingsInputSvideoIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Alertas"
              to="/alerts"
              icon={<CampaignIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>

          {/* <Box paddingTop="50px">
            <Typography
              // variant="h6"
              style={{ color: colors.white[700] }}
              sx={{ m: collapsed ? "0px 10px 10px" : "0px 27px 10px" }}
            >
              Estadística
            </Typography>

            <Item
              title="Line Chart"
              to="/"
              icon={<TimelineRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Gráficos"
              to="/devices"
              icon={<LeaderboardRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box> */}
        </Menu>
      </Sidebar>
    </Box>
  );
};
