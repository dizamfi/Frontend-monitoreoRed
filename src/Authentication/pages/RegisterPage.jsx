import { Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/authentication/thunks";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";


const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
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
  name: yup
  .string()
  .required("El nombre es obligatorio"),
  lastName: yup
  .string()
  .required("El apellido es obligatorio")
});

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.authentication);

  const onFormSubmit = (values) => {
    console.log(values);
    dispatch(registerUser(values));
  };


  return (
    <AuthLayout titulo="Registro">
      <Grid container direction="row" justifyContent="center">
        <Typography variant="h8" sx={{ mb: 6, mr: 1 }}>
          ¿Ya tienes cuenta?
        </Typography>
        <Link
          style={{ textDecoration: "none", color: "rgb(29, 155, 240)" }}
          to="/auth/login"
        >
          Inicar Sesión
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
              <Grid item xs={6} sx={{ pr: 3 }} >
                <TextField
                  label="Nombre"
                  type="text"
                  placeholder="Nombre"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  error={submitCount > 0 && !!touched.name && !!errors.name}
                  helperText={submitCount > 0 && touched.name && errors.name}
                  // sx={{ '& .MuiInputBase-root': {
                  //   border: '1px solid red',
                  // }, }}
                />
              </Grid>

              <Grid item xs={6} >
                <TextField
                  label="Apellido"
                  type="text"
                  placeholder="Apellido"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={submitCount > 0 && !!touched.lastName && !!errors.lastName}
                  helperText={submitCount > 0 && touched.lastName && errors.lastName}
                  // sx={{ '& .MuiInputBase-root': {
                  //   border: '1px solid red',
                  // }, }}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
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
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 3, mb: 2}}>
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
                    alignItems: "center"
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
                    Crear cuenta
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
