import {
  Box,
  Grid,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { tonalidad } from "../../theme/theme";
import { StatBox } from "../components/StatBox";
import EmailIcon from "@mui/icons-material/Email";
import { Header } from "../components/Header";
import { LineChart } from "../components/LineChart";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import RouterRoundedIcon from "@mui/icons-material/RouterRounded";
import OnlinePredictionRoundedIcon from "@mui/icons-material/OnlinePredictionRounded";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import WifiIcon from "@mui/icons-material/Wifi";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SouthRoundedIcon from "@mui/icons-material/SouthRounded";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { Data2 } from "../../data/data"
import {
  registrosTxRxByMac,
  registrosStateInterfaces,
  registrosTxPktsByInterfaces,
  registrosTraffic,
  registrosDevicesConnected,
  registrosFrecuency,
  registrosPktsTotal,
  registrosTotalDevices,
} from "../../store/platform/thunks";
import { mactxrx, alerts } from "../../data/data";
import { PieChart } from "../components/PieChart";

import { StateInterface } from "../components/StateInterface";
import { useState } from "react";

export const DashboardPage = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const dispatch = useDispatch();
  const {
    TxRxByMac,
    txPktsByInterfaces,
    traffic,
    settings,
    devicesConnected,
    frecuency,
    pktsTotal,
    totalDevices,
  } = useSelector((state) => state.platform);

  const [selectedChart, setSelectedChart] = useState("SNMP");
  const [selectedChartTraffic, setSelectedChartTraffic] = useState("actual");

  useEffect(() => {
    dispatch(registrosTxRxByMac());
    dispatch(registrosTxPktsByInterfaces());
    dispatch(registrosTraffic());
    dispatch(registrosDevicesConnected());
    dispatch(registrosFrecuency());
    dispatch(registrosTotalDevices());
    dispatch(registrosPktsTotal());

    // console.log(TxRxByMac);
    // console.log(txPktsByInterfaces);
    // console.log(traffic);

    // Conexión al servidor Socket.IO
    const socket = io("http://localhost:5050");
    // console.log(socket);

    // Suscribirse al evento de actualización de registros
    socket.on("nuevoRegistro", (registroId) => {
      // Cuando se recibe un evento de cambio, realizar una solicitud a la API para obtener la información actualizada
      // dispatch(registrosNmap());
      console.log("NuevoRegistroooo");
      dispatch(registrosTxPktsByInterfaces());
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // dispatch(registrosNmap());
  // const socket = io("http://localhost:5050");
  // console.log(socket);

  // useEffect(() => {
  //   // Conexión al servidor Socket.IO
  //   const socket = io("http://localhost:5050/api");
  //   // console.log(socket);

  //   // Suscribirse al evento de actualización de registros
  //   socket.on("nuevoRegistro", (registroId) => {
  //     // Cuando se recibe un evento de cambio, realizar una solicitud a la API para obtener la información actualizada
  //     // dispatch(registrosNmap());
  //     console.log("NuevoRegistroooo");
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);
  console.log(frecuency);
  console.log(totalDevices);
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
                  {totalDevices.cantidadMacs}
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
                  0
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
                  {totalDevices.cantidadMacs}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {!(settings === "SSH") || !(selectedChart === "SSH") ? (
          <StateInterface />
        ) : undefined}

        <Box
          gridColumn="span 5"
          backgroundColor={colors.primary[500]}
          // display="flex"
          // alignItems="center"
          // justifyContent="center"
          overflow="auto"
          sx={{ borderRadius: "8px" }}
        >
          <Box mt={1} ml={1} display="flex" alignItems="center">
            <Typography
              color={colors.primary[100]}
              variant="h5"
              fontWeight="600"
              mr={1}
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
          <Box mt="10px" p="0 18px" display="flex" alignItems="center">
            {selectedChart === "SNMP" ? (
              <Typography
                color={colors.primary[100]}
                variant="h5"
                fontWeight="600"
              >
                Paquetes transmitidos y recibidos
              </Typography>
            ) : (
              <Typography
                color={colors.primary[100]}
                variant="h5"
                fontWeight="600"
              >
                Paquetes transmitidos por interfaz
              </Typography>
            )}

            {settings === "SNMP y SSH" || selectedChart === "SNMP y SSH" ? (
              <Select
                value={selectedChart}
                onChange={(event) => setSelectedChart(event.target.value)}
                sx={{ marginLeft: "10px", minWidth: "80px" }} // Ajusta el ancho aquí
              >
                <MenuItem value="SNMP">Total</MenuItem>
                <MenuItem value="other">Por Interface</MenuItem>
              </Select>
            ) : undefined}
          </Box>
          <Box height="240px" mt="12px">
            {selectedChart === "SNMP" ||
            settings === "SNMP" ||
            settings === "SSH" ? (
              <LineChart
                data={
                  pktsTotal.length > 1
                    ? pktsTotal[0].pktstransmited
                    : [
                        {
                          id: undefined,
                          data: [
                            {
                              x: undefined,
                              y: undefined,
                            },
                          ],
                        },
                      ]
                }
                curve={"linear"}
                legendBottom={"Hora"}
                legendLeft={"Paquetes (Pkts)"}
              />
            ) : (
              <LineChart
                data={
                  txPktsByInterfaces.length > 1
                    ? txPktsByInterfaces[0].registrosPorInterface
                    : [
                        {
                          id: undefined,
                          data: [
                            {
                              x: undefined,
                              y: undefined,
                            },
                          ],
                        },
                      ]
                }
                curve={"linear"}
                legendBottom={"Tiempo"}
                legendLeft={"Paquetes (Pkts)"}
              />
            )}
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
            {settings == "SNMP" ? (
              <Typography
                color={colors.primary[100]}
                variant="h5"
                fontWeight="600"
              >
                Información de red
              </Typography>
            ) : (
              <Typography
                color={colors.primary[100]}
                variant="h5"
                fontWeight="600"
              >
                Velocidad de subida y bajada
              </Typography>
            )}
          </Box>

          {settings == "SNMP"
            ? devicesConnected[0].registros.map((data, i) => (
                <Box
                  key={`${data.id}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`1px solid ${colors.primary[300]}`}
                  p="12px"
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
                      {data.mac}
                    </Typography>
                  </Box>

                  <Box display={"flex"} alignItems={"center"} ml={1}>
                    <Typography color={colors.yellow[100]}>
                      {data.ip}
                    </Typography>
                  </Box>

                  <Box display={"flex"} alignItems={"center"}>
                    <SouthRoundedIcon sx={{ color: colors.red[600] }} />
                    <Typography color={colors.yellow[100]} ml={"5px"}>
                      {`${data.latencia} ms`}
                    </Typography>
                  </Box>
                </Box>
              ))
            : TxRxByMac.length > 1
            ? TxRxByMac[0].registrosfiltrados.map((data, i) => (
                <Box
                  key={`${data._id}-${i}`}
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
                      {data.mac}
                    </Typography>
                  </Box>

                  <Box display={"flex"} alignItems={"center"} ml={3}>
                    <NorthRoundedIcon sx={{ color: colors.green[500] }} />
                    <Typography color={colors.yellow[100]} ml={"5px"}>
                      {`${data.RX} MBit/s`}
                    </Typography>
                  </Box>

                  <Box display={"flex"} alignItems={"center"}>
                    <SouthRoundedIcon sx={{ color: colors.red[600] }} />
                    <Typography color={colors.yellow[100]} ml={"5px"}>
                      {`${data.TX} MBit/s`}
                    </Typography>
                  </Box>
                </Box>
              ))
            : undefined}

          {/* {console.log(TxRxByMac.length > 1 ?? TxRxByMac[0].registrosfiltrados)} */}

          {/* {} */}
        </Box>

        {/* ROW 3 */}

        {settings === "SNMP" ? undefined : (
          <>
            <Box
              gridColumn="span 4"
              gridRow="span 2"
              backgroundColor={colors.primary[500]}
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
                <PieChart
                  data={
                    frecuency.length > 1
                      ? frecuency[0].resultados
                      : [
                          {
                            id: undefined,
                            label: undefined,
                            value: undefined,
                            color: undefined,
                          },
                        ]
                  }
                />
              </Box>
            </Box>
          </>
        )}

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          sx={{ borderRadius: "8px" }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            ml={2}
            mt={1}
          >
            <Typography
              color={colors.primary[100]}
              variant="h5"
              fontWeight="600"
              mr={2}
            >
              Actividades de tráfico
            </Typography>
            <Box>
              <Select
                value={selectedChartTraffic}
                onChange={(event) => setSelectedChartTraffic(event.target.value)}
                sx={{ minWidth: "80px" }} // Ajusta el ancho aquí
              >
                <MenuItem value="actual">Actual</MenuItem>
                <MenuItem value="prediction">Predicción semanal</MenuItem>
              </Select>
            </Box>
          </Box>

          <Box height="250px" mt="-20px">
            {selectedChartTraffic === "actual" ? (
              <LineChart
                data={
                  traffic.length > 1
                    ? traffic[0].registrosPorInterface
                    : [
                        {
                          id: undefined,
                          data: [
                            {
                              x: undefined,
                              y: undefined,
                            },
                          ],
                        },
                      ]
                }
                curve={"linear"}
                legendBottom={"Tiempo"}
                legendLeft={""}
              />
            ) : (
              <LineChart
                data={
                  Data2
                }
                curve={"linear"}
                legendBottom={"Tiempo"}
                legendLeft={""}
              />
            )}
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
