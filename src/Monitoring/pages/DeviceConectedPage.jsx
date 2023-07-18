import { DataGrid, GridToolbar, esES } from "@mui/x-data-grid";
// import { esES } from '@mui/x-data-grid/dist/es/localeText/esES';
import { Box, useTheme } from "@mui/material";
import { tonalidad } from "../../theme/theme";
import { data } from "../../data/data";
import { Header } from "../components/Header";

export const DeviceConectedPage = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "id", flex: 0.5, height: 50},
    { field: "mac", headerName: "mac", flex: 1},
    { field: "ip", headerName: "ip",  },
    {
      field: "conexion",
      headerName: "Conexión",
      cellClassName: "name-column--cell",
    },
    {
      field: "rssi",
      headerName: "RSSI",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "rx",
      headerName: "RX",
    },
    {
      field: "tx",
      headerName: "TX",
      flex: 1,
    },

    {
      field: "estado",
      headerName: "Estado",
      flex: 1,
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
        <DataGrid
          rows={data}
          columns={columns}
          // components={{ Toolbar: GridToolbar }}
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        
          // slots={{toolbar: CustomToolbar}}
        />
      </Box>
    </Box>
  );
};
