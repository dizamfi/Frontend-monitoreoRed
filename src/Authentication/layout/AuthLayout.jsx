import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// #4a4c4d (Gris)
// 163134f7 (Gris azulado)

export const AuthLayout = ({ children, titulo = "" }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#163134f7", padding: 4 }}
    >
      <Grid
        container
        item
        className="box-shadow"
        direction="column"
        alignItems="center"
        justifyContent="center"
        xs={3}
        sx={{
          width: { sm: 500 },
          minHeight: { sm: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {titulo}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
