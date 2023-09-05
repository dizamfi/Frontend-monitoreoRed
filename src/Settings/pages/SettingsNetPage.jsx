import { Button, Grid, TextField, Typography } from "@mui/material";
// import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/authentication/thunks";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import { SettingsLayout } from "../layout/SettingsLayout";

export const SettingsNetPage = () => {


  return (
    <SettingsLayout titulo="Registro">
      <Grid container direction="row" justifyContent="center">
        <Typography variant="h8" sx={{ mb: 6, mr: 1 }}>
          ¿Ya tienes cuenta?
        </Typography>
  
          Inicar Sesión
      </Grid>
    </SettingsLayout>
  );
};
