import {
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import { loginUser } from "../../store/authentication/thunks";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import { onSettings } from "../../store/platform/platformSlice";

const initialValues = {
  email: "",
  password: "",
  router: "",
  scanType: "SNMP",
};

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "La contraseña debe poseer al menos una letra y un número"
    )
    .required("La contraseña es obligatoria"),
  router: yup
    .string()
    .matches(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "El formato no es el correcto"
    )
    .required("Ingrese la red a escanear"),

  scanType: yup.string().required("Seleccione el tipo de escaneo"),
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.authentication);

  const onFormSubmit = (values) => {
    console.log(values);
    dispatch(loginUser(values));
    // dispatch(registrosNmap());  // PRUEBAA
  };

  return (
    <AuthLayout titulo="Inicio sesión">
      <Grid container direction="row" justifyContent="center">
        <Typography variant="h8" sx={{ mb: 6, mr: 1 }}>
          ¿No tienes una cuenta?
        </Typography>
        <Link
          style={{ textDecoration: "none", color: "rgb(29, 155, 240)" }}
          to="/auth/register"
        >
          Regístrate
        </Link>
      </Grid>

      <Formik
        onSubmit={onFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          handleBlur,
          handleChange,
          errors,
          touched,
          handleSubmit,
          submitCount,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label="correo"
                  type="text"
                  placeholder="correo"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={submitCount > 0 && !!touched.email && !!errors.email}
                  helperText={submitCount > 0 && touched.email && errors.email}
                  // sx={{ '& .MuiInputBase-root': {
                  //   border: '1px solid red',
                  // }, }}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 3, mb: 3 }}>
                <TextField
                  label="contraseña"
                  type="text"
                  placeholder="contraseña"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={
                    submitCount > 0 && !!touched.password && !!errors.password
                  }
                  helperText={
                    submitCount > 0 && touched.password && errors.password
                  }
                />
              </Grid>

              <Grid container spacing={2}>
                <Grid
                  item
                  xs={6}
                  sx={{ mt: 2, pr: 2, display: "flex", alignItems: "center" }}
                >
                  {/* <Typography variant="h8">Dirección del router:</Typography> */}
                  <TextField
                    sx={{ pt: 1 }}
                    label="Ip del router"
                    type="text"
                    placeholder="192.168.65.9"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.router}
                    name="router"
                    error={
                      submitCount > 0 && !!touched.router && !!errors.router
                    }
                    helperText={
                      submitCount > 0 && touched.router && errors.router
                    }
                  />
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h8" sx={{ pb: 1 }}>
                    Seleccione el tipo de escaneo:
                  </Typography>
                  <Select
                    label="Tipo de escaneo"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.scanType}
                    name="scanType"
                  >
                    <MenuItem value="SNMP">SNMP</MenuItem>
                    <MenuItem value="SSH">SSH</MenuItem>
                    <MenuItem value="SNMP y SSH">Ambas</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              {errorMessage && (
                <Grid
                  display="flex"
                  item
                  xs={12}
                  p={2}
                  sx={{
                    mt: 4,
                    borderRadius: "5px",
                    minHeight: "50px",
                    backgroundColor: "rgb(255, 236, 240)",
                    alignItems: "center",
                  }}
                >
                  <ReportGmailerrorredRoundedIcon
                    sx={{ color: "#d32f2f", pr: "12px" }}
                  />
                  <Typography variant="h8" sx={{ color: "#892222d6" }}>
                    {errorMessage}
                  </Typography>
                </Grid>
              )}

              <Grid container spacing={2} sx={{ mb: 2, mt: 4 }}>
                <Grid item xs={12}>
                  <Button
                    color="success"
                    size="large"
                    sx={{ borderRadius: "50px" }}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Ingresar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};
