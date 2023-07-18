import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { tonalidad } from "../../theme/theme";
import { StatBox } from "../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import { Header } from "../components/Header";
import { LineChart } from "../components/LineChart";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import RouterRoundedIcon from "@mui/icons-material/RouterRounded";
import OnlinePredictionRoundedIcon from "@mui/icons-material/OnlinePredictionRounded";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import WifiIcon from "@mui/icons-material/Wifi";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { registrosNmap } from "../../store/platform/thunks";
import { mactxrx, alerts } from "../../data/data";
import { PieChart } from "../components/PieChart";
import { Data2, Data3 } from "../../data/data";

export const DashboardPage = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

  const dispatch = useDispatch();

  // dispatch(registrosNmap());
  // const socket = io("http://localhost:5050");
  // console.log(socket);

  // useEffect(() => {
  //   // Conexión al servidor Socket.IO
  //   const socket = io("http://localhost:5050");
  //   console.log(socket);

  //   // Suscribirse al evento de actualización de registros
  //   socket.on("registroActualizado", (registroId) => {
  //     // Cuando se recibe un evento de cambio, realizar una solicitud a la API para obtener la información actualizada
  //     dispatch(registrosNmap());
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <Box m="20px">
      <Box
        display={smScreen ? "flex" : "block"}
        flexDirection={smScreen ? "row" : "column"}
        justifyContent={smScreen ? "space-between" : "start"}
        alignItems={smScreen ? "center" : "start"}
        m="10px 0"
      >
        <Header
          title="Panel principal"
          subtitle="Información general de la red"
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="155px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          sx={{ borderRadius: "8px" }}
        >
          <Box mt={1} ml={2}>
            <Typography
              color={colors.primary[100]}
              variant="h5"
              fontWeight="600"
            >
              Dispositivos conectados
            </Typography>
          </Box>

          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="100px"
            gap="30px"
          >
            <Box m={2} gridColumn="span 3">
              <Typography
                color={colors.green[200]}
                variant="h6"
                fontWeight="600"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={1}
              >
                Wifi
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <WifiIcon
                  sx={{
                    color: colors.green[600],
                    fontSize: "30px",
                    mr: "10px",
                  }}
                />

                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.yellow[600] }}
                >
                  7
                </Typography>
              </Box>
            </Box>

            <Box m={2} gridColumn="span 3">
              <Typography
                color={colors.green[200]}
                variant="h6"
                fontWeight="600"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={1}
              >
                Ethernet
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <SettingsEthernetIcon
                  sx={{
                    color: colors.green[600],
                    fontSize: "30px",
                    mr: "10px",
                  }}
                />

                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.yellow[600] }}
                >
                  3
                </Typography>
              </Box>
            </Box>

            <Box m={2} gridColumn="span 3">
              <Typography
                color={colors.green[200]}
                variant="h6"
                fontWeight="600"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={1}
              >
                Total
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <DevicesRoundedIcon
                  sx={{
                    color: colors.green[600],
                    fontSize: "30px",
                    mr: "10px",
                  }}
                />

                <Typography
                  variant="h5"
                  fontStyle="italic"
                  sx={{ color: colors.yellow[600] }}
                >
                  10
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          sx={{ borderRadius: "8px" }}
        >
          <Box mt={1} ml={2} display="flex" alignItems="center">
            <Typography
              color={colors.primary[100]}
              variant="h5"
              fontWeight="600"
              pr={4}
            >
              Estado de interfaces
            </Typography>

            {/* <RouterRoundedIcon
              sx={{ color: colors.green[600], fontSize: "30px" }}
            /> */}
          </Box>

          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="100px"
            gap="32px"
          >
            <Box gridColumn="span 3">
              <Box ml={2} mt={2} display="flex" alignItems="center">
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  wlan0_1
                </Typography>
                <ToggleOnIcon
                  sx={{ color: colors.green[600], fontSize: "30px" }}
                />

                {/* <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  
                >
                  up
                </Typography> */}
              </Box>

              <Box ml={2} display="flex" alignItems="center">
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  wlan1_1
                </Typography>
                <ToggleOnIcon
                  sx={{ color: colors.green[600], fontSize: "30px" }}
                />
              </Box>
              <Box ml={2} display="flex" alignItems="center">
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  wlan2_1
                </Typography>
                <ToggleOnIcon
                  sx={{ color: colors.green[600], fontSize: "30px" }}
                />
              </Box>
            </Box>

            <Box gridColumn="span 3">
              <Box ml={2} mt={2} display="flex" alignItems="center">
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  mon1
                </Typography>
                <ToggleOnIcon
                  sx={{ color: colors.green[600], fontSize: "30px" }}
                />
              </Box>

              <Box ml={2} display="flex" alignItems="center">
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  mon0
                </Typography>
                <ToggleOffIcon
                  sx={{ color: colors.red[700], fontSize: "30px" }}
                />
              </Box>
              <Box ml={2} display="flex" alignItems="center">
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  mon3
                </Typography>
                <ToggleOnIcon
                  sx={{ color: colors.green[600], fontSize: "30px" }}
                />
              </Box>
            </Box>

            <Box gridColumn="span 3">
              <Box mt={2} display="flex" alignItems="center">
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  eth0
                </Typography>
                <ToggleOnIcon
                  sx={{ color: colors.green[600], fontSize: "30px" }}
                />
              </Box>

              <Box display="flex" alignItems="center">
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  eth1
                </Typography>
                <ToggleOffIcon
                  sx={{ color: colors.red[700], fontSize: "30px" }}
                />
              </Box>
            </Box>

            {/* <Box gridColumn="span 3">
                <RouterRoundedIcon
                  sx={{ color: colors.green[600], fontSize: "30px" }}
                />

            </Box> */}
          </Box>

          {/* <StatBox
            title="Lorem.."
            subtitle="Lorem ipsum"
            progress="0.5"
            increase="20"
            icon={
              <RouterRoundedIcon
                sx={{ color: colors.green[600], fontSize: "30px" }}
              />
            }
          /> */}
        </Box>

        <Box
          gridColumn="span 6"
          backgroundColor={colors.primary[500]}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
          overflow="auto"
          
          sx={{ borderRadius: "8px" }}
        >
          <Box mt={1} ml={2} display="flex" alignItems="center">
            <Typography
              color={colors.primary[100]}
              variant="h5"
              fontWeight="600"
              mr={2}
            >
              Alertas de rendimiento y vulnerabilidad
            </Typography>
            <ErrorOutlineIcon sx={{ color: colors.green[500] }} />
          </Box>

          {/* <StatBox
            title="Prediction..."
            subtitle="Lorem ipsum"
            progress="0.5"
            increase="7"
            icon={
              <OnlinePredictionRoundedIcon
                sx={{ color: colors.green[600], fontSize: "30px" }}
              />
            }
          /> */}


          {alerts.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              // justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.primary[300]}`}
              pt={"15px"}
              pl={"15px"}
            >
              <Box>
                {/* <Typography
                  color={colors.primary[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography> */}

                <Typography color={colors.green[200]}>
                  {transaction.fecha}
                </Typography>
                <Typography color={colors.green[100]}>
                  {transaction.hora}
                </Typography>

              </Box>

              <Box display={"flex"} alignItems={"center"} ml={2}>
                <SettingsTwoToneIcon sx={{ color: colors.yellow[600] }} />
                <Typography color={colors.green[200]} ml={"5px"}>
                  {transaction.mac}
                </Typography>
              </Box>

              <Box>
                {/* <SouthRoundedIcon sx={{ color: colors.red[600] }} /> */}
                <Typography color={colors.yellow[100]} ml={2}>
                  {transaction.msg}
                </Typography>
              </Box>
            </Box>
          ))}

        </Box>

        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
          sx={{ borderRadius: "8px" }}
        >
          <Box mt={1} ml={2}>
            <Typography
              color={colors.primary[100]}
              variant="h5"
              fontWeight="600"
            >
              Distribución de frecuencias
            </Typography>
          </Box>

          <Box height="175px">
            <PieChart />
          </Box>
        </Box> */}

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          sx={{ borderRadius: "8px" }}
        >
          <Box
            mt="18px"
            p="0 30px"
            mb="10px"
            // display="flex" justifyContent="center" alignItems="center"
          >
            <Box>
              <Typography
                color={colors.primary[100]}
                variant="h5"
                fontWeight="600"
              >
                Paquetes transmitidos por interfaz
              </Typography>

              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.green[500]}
              >
                $59,342,32
              </Typography> */}
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart data={Data2} curve={"linear"} legendBottom={"Tiempo"} legendLeft={"Paquetes (Pkts)"} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          overflow="auto"
          sx={{ borderRadius: "8px" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`1px solid ${colors.primary[300]}`}
            // colors={colors.green[300]}
            p="15px"
          >
            <Typography
              color={colors.primary[100]}
              variant="h5"
              fontWeight="600"
            >
              Velocidad de subida y bajada
            </Typography>
          </Box>
          {mactxrx.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.primary[300]}`}
              p="15px"
            >
              <Box>
                {/* <Typography
                  color={colors.primary[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography> */}

                <Typography color={colors.yellow[100]}>
                  {transaction.mac}
                </Typography>
              </Box>

              <Box display={"flex"} alignItems={"center"} ml={5}>
                <NorthRoundedIcon sx={{ color: colors.green[500] }} />
                <Typography color={colors.yellow[100]} ml={"5px"}>
                  {transaction.rx}
                </Typography>
              </Box>

              <Box display={"flex"} alignItems={"center"}>
                <SouthRoundedIcon sx={{ color: colors.red[600] }} />
                <Typography color={colors.yellow[100]} ml={"5px"}>
                  {transaction.tx}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          // p="30px"
        >
          <Box mt={1} ml={2}>
            <Typography
              color={colors.primary[100]}
              variant="h5"
              fontWeight="600"
            >
              Distribución de frecuencias
            </Typography>
          </Box>
              
          

          <Box height="45vh">
            <PieChart />
          </Box>
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          sx={{ borderRadius: "8px" }}
        >
          <Box
            // mt="18px"
            // p="0 30px"
            // mb="10px"
            // display="flex" justifyContent="center" alignItems="center"
          >
            <Box ml={2} mt={1}>
              <Typography
                color={colors.primary[100]}
                variant="h5"
                fontWeight="600"
                mb={3}
              >
                Actividades de tráfico
              </Typography>

              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.green[500]}
              >
                $59,342,32
              </Typography> */}
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart data={Data3} curve={"natural"} legendBottom={"Tiempo"} legendLeft={""}/>
          </Box>
        </Box>

        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}

        {/*  */}
      </Box>
    </Box>
  );
};
