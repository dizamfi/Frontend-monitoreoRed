import { Box, Typography, useTheme } from "@mui/material";
import { tonalidad } from "../../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { registrosStateInterfaces } from "../../store/platform/thunks";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

export const StateInterface = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);
  const dispatch = useDispatch();
  const { stateInterfaces } = useSelector((state) => state.platform);

  useEffect(() => {
    dispatch(registrosStateInterfaces());
    console.log(stateInterfaces);
  }, [dispatch]);

  const elementosPorColumna = 3;
  const gruposDeTres = [];
  let grupoActual = [];

  if (stateInterfaces.length > 1) {
    stateInterfaces[0].registros.forEach((data, i) => {
      grupoActual.push(data);

      if (
        grupoActual.length === elementosPorColumna ||
        i === stateInterfaces[0].registros.length - 1
      ) {
        gruposDeTres.push(grupoActual);
        grupoActual = [];
      }
    });
  }

  console.log(gruposDeTres);
  return (
    <Box
      gridColumn="span 4"
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
        gap="30px"
        // grid-column-gap = "10px"
      >
        {gruposDeTres.map((grupo, i) => (
          <Box gridColumn="span 3" key={i}>
            {grupo.map((data, index) => (
              <Box ml={2} mt={1} display="flex" alignItems="center" key={index}>
                <Typography
                  color={colors.green[200]}
                  variant="h6"
                  fontWeight="600"
                  pr={1}
                >
                  {data.interface.replace(/-/g, '_')}
                </Typography>
                {data.estado === "up" ? (
                  <ToggleOnIcon
                    sx={{ color: colors.green[600], fontSize: "30px" }}
                  />
                ) : (
                  <ToggleOffIcon
                    sx={{ color: colors.red[700], fontSize: "30px" }}
                  />
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
