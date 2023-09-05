// import { Box, Card, CardContent, List, ListItem, ListItemText, Typography  } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  Grid,
} from "@mui/material";
// import { Box } from "@mui/material";
import { Header } from "../components/Header";
import { tonalidad } from "../../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { registrosPorts } from "../../store/platform/thunks";

export const PortsPage = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);
  const dispatch = useDispatch();
  const { ports } = useSelector((state) => state.platform);

  useEffect(() => {
    dispatch(registrosPorts());
    if (ports.length > 1) {
      console.log(ports[0].resp);
    }
  }, [dispatch]);

  const data = [
    {
      mac: "E8:D8:19:1E:8E:E1",
      ip: "192.168.65.100",
      ports: [
        {
          portNumber: 21,
          protocolo: "tcp",
          service: "ftp",
          status: "filtered",
        },
        {
          portNumber: 22,
          protocolo: "tcp",
          service: "ssh",
          status: "filtered",
        },
        {
          portNumber: 23,
          protocolo: "tcp",
          service: "telnet",
          status: "filtered",
        },
        { portNumber: 53, protocolo: "tcp", service: "domain", status: "open" },
        { portNumber: 80, protocolo: "tcp", service: "http", status: "open" },
        {
          portNumber: 139,
          protocolo: "tcp",
          service: "netbios-ssn",
          status: "filtered",
        },
        {
          portNumber: 445,
          protocolo: "tcp",
          service: "microsoft-ds",
          status: "filtered",
        },
      ],
    },
    {
      mac: "AC:67:B2:3D:6C:34",
      ip: "192.168.65.112",
      ports: [
        { portNumber: 554, protocolo: "tcp", service: "rtsp", status: "open" },
        { portNumber: 5000, protocolo: "tcp", service: "upnp", status: "open" },
        { portNumber: 80, protocolo: "tcp", service: "http", status: "open" },
        { portNumber: 5000, protocolo: "tcp", service: "upnp", status: "open" },
      ],
    },

    {
      mac: "00:22:90:e0:e6:bf",
      ip: "192.168.65.160",
      ports: [
        {
          portNumber: 22,
          protocolo: "tcp",
          service: "ssh",
          status: "filtered",
        },
        { portNumber: 443, protocolo: "tcp", service: "https", status: "open" },
        { portNumber: 80, protocolo: "tcp", service: "http", status: "open" },
      ],
    },
    {
      mac: "f2:7f:a8:11:a9:e6",
      ip: "192.168.65.115",
      ports: [
        { portNumber: 21, protocolo: "tcp", service: "ftp", status: "open" },
        { portNumber: 22, protocolo: "tcp", service: "ssh", status: "open" },
        { portNumber: 80, protocolo: "tcp", service: "http", status: "open" },

      ],
    },
    // Agrega más datos para más dispositivos y sus puertos
  ];

  const tableContainerStyle = {
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    // marginBottom: "20px",
    borderRadius: "0px",
  };

  const cardStyle = {
    // height: '200px',
    maxWidth: 550,
    marginBottom: "20px",
    backgroundColor: colors.primary[500],
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: colors.green[800],
    color: "#ffffff",
    padding: "8px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };

  const tableHeaderStyle = {
    backgroundColor: "#2e7d3275",
    color: colors.primary[100],
    fontSize: "13px", // Cambiar el tamaño de fuente de los encabezados aquí
    fontWeight: "bold", // Opcional, para hacer el texto en negrita
  };

  const cardContentStyle = {
    height: "230px",
    padding: 0,
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Box m="20px">
      <Header title="Puertos" subtitle="Información y estado de puertos" />

      {/* <Grid container spacing={2}>
        {ports.length > 1
          ? ports[0].resp.map((device) =>
              device.ports.length > 1 ? (
                <Grid key={device.mac} item xs={12} sm={6}>
                  <Card variant="outlined" sx={cardStyle}>
                    <Box sx={headerStyle}>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: colors.primary[100] }}
                      >
                        IP : {device.ip}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: colors.primary[100] }}
                      >
                        MAC : {device.mac}
                      </Typography>
                    </Box>
                    <CardContent sx={cardContentStyle}>
                      <TableContainer
                        component={Paper}
                        sx={tableContainerStyle}
                      >
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell align="center" sx={tableHeaderStyle}>
                                Número de Puerto
                              </TableCell>
                              <TableCell align="center" sx={tableHeaderStyle}>
                                Protocolo
                              </TableCell>
                              <TableCell align="center" sx={tableHeaderStyle}>
                                Servicio
                              </TableCell>
                              <TableCell align="center" sx={tableHeaderStyle}>
                                Estado
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {device.ports.map((port) => (
                              <TableRow
                                key={`${device.mac}-${port.portNumber}`}
                              >
                                <TableCell align="center">
                                  {port.portid}
                                </TableCell>
                                <TableCell align="center">
                                  {port.protocol}
                                </TableCell>
                                <TableCell align="center">
                                  {port.name}
                                </TableCell>
                                <TableCell align="center">
                                  {port.state}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
              ) : undefined
            )
          : undefined}
      </Grid> */}


<Grid container spacing={2}>
        {ports.length > 1
          ? data.map((device) =>
              device.ports.length > 1 ? (
                <Grid key={device.mac} item xs={12} sm={6}>
                  <Card variant="outlined" sx={cardStyle}>
                    <Box sx={headerStyle}>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: colors.primary[100] }}
                      >
                        IP : {device.ip}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: colors.primary[100] }}
                      >
                        MAC : {device.mac}
                      </Typography>
                    </Box>
                    <CardContent sx={cardContentStyle}>
                      <TableContainer
                        component={Paper}
                        sx={tableContainerStyle}
                      >
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell align="center" sx={tableHeaderStyle}>
                                Número de Puerto
                              </TableCell>
                              <TableCell align="center" sx={tableHeaderStyle}>
                                Protocolo
                              </TableCell>
                              <TableCell align="center" sx={tableHeaderStyle}>
                                Servicio
                              </TableCell>
                              <TableCell align="center" sx={tableHeaderStyle}>
                                Estado
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {device.ports.map((port) => (
                              <TableRow
                                key={`${device.mac}-${port.portNumber}`}
                              >
                                <TableCell align="center">
                                  {port.portNumber}
                                </TableCell>
                                <TableCell align="center">
                                  {port.protocolo}
                                </TableCell>
                                <TableCell align="center">
                                  {port.service}
                                </TableCell>
                                <TableCell align="center">
                                  {port.status}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
              ) : undefined
            )
          : undefined}
      </Grid>



    </Box>
  );
};
