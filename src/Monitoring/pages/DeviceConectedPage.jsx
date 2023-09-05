import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
// import { esES } from '@mui/x-data-grid/dist/es/localeText/esES';
import { Box, useTheme } from "@mui/material";
import { tonalidad } from "../../theme/theme";
import { dataS } from "../../data/data";
import { Header } from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { registrosDevicesConnected } from "../../store/platform/thunks";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useState } from "react";

export const DeviceConectedPage = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);
  const dispatch = useDispatch();
  const { devicesConnected } = useSelector((state) => state.platform);
  const [registros, setRegistros] = useState(devicesConnected.length > 0 ? devicesConnected[0].registros : []);

  useEffect(() => {
    dispatch(registrosDevicesConnected());
   
    if(devicesConnected.length > 1){
      console.log(devicesConnected[0].registros);
    }

      // Conexión al servidor Socket.IO
      const socket = io("http://localhost:5050");
      // console.log(socket);
  
      // Suscribirse al evento de actualización de registros
      socket.on("NewDevicesConected", async (registroId) => {
        console.log("NuevoRegistroooo");
        await dispatch(registrosDevicesConnected()); 
        console.log(devicesConnected[0].registros);
        setRegistros(devicesConnected.length > 0 ? devicesConnected[0].registros : []);
      });
      
      return () => {
        socket.disconnect();
      };
    
  }, []);

  const headerStyle = {
    fontSize: "50px", // Ajusta el tamaño de fuente según tus preferencias
    fontWeight: "bold", // Opcional: para hacer el texto en negrita
  };

  const columns = [
    { field: "id", headerName: "id", flex: 0.5, height: 50},
    {
      field: "mac",
      headerName: "MAC",
      flex: 1,
      type: "string",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "ip",
      headerName: "IP",
      type: "string",
      headerAlign: "center",
      align: "center",
    },
    // {
    //   field: "conexion",
    //   headerName: "Conexión",
    //   cellClassName: "name-column--cell",
    // },
    {
      field: "RX",
      headerName: "RX (Mbit/s)",
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "TX",
      headerName: "TX (Mbit/s)",
      flex: 1,
      type: "number",
      headerAlign: "center",
      align: "center",
    },

    {
      field: "latencia",
      headerName: "Latencia (ms)",
      flex: 1,
      type: "number",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "rssi",
      headerName: "RSSI (dBm)",
      type: "number",
      headerAlign: "center",
      align: "center",
    },

    {
      field: "SNR",
      headerName: "SNR",
      type: "number",
      headerAlign: "center",
      align: "center",
    },
  ];

  return (
    // <div>DeviceConectedPage</div>
    <Box m="20px">
      <Header
        title="Dispositivos Conectados"
        subtitle="Métricas de calidad de servicio"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },

          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },

          "& .name-column--cell": {
            // color: colors.greenAccent[300],
          },

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#2e7d3275",
            borderBottom: "none",
          },

          "& .MuiDataGrid-virtualScroller": {
            // backgroundColor: colors.primary[400],
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            // backgroundColor: colors.blueAccent[700],
          },

          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            // color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {
        console.log(JSON.stringify(registros))
      
        }
        <DataGrid
           rows={registros.map(registro => ({
            id: registro.id,
            mac: registro.mac,
            ip: registro.ip,
            RX: registro.RX,
            TX: registro.TX,
            latencia: registro.latencia,
            rssi: registro.rssi,
            SNR: registro.SNR
          }))}
          // rows={dataS}
          columns={columns}
          // components={{ Toolbar: GridToolbar }}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          className={headerStyle}
          

          // slots={{toolbar: CustomToolbar}}
        />
      </Box>
    </Box>
  );
};
