import { Box, Typography, useTheme } from "@mui/material";
import { tonalidad } from "../../theme/theme";

export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.yellow[600]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.green[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
