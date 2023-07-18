import { Box, Typography, useTheme } from "@mui/material";
import { tonalidad } from "../../theme/theme";

export const StatBox = ({
  title,
  subtitle,
  label1,
  label2,
  icon,
  increase,
}) => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);
  return (
    // <Box width="100%" m="10px">
    //   <Box>
    //     <Typography variant="h5" sx={{ color: colors.green[200] }}>
    //       {title}
    //     </Typography>

    //     {/* <Box variant="h3" fontWeight="bold" sx={{ color: colors.green[200] }}>
    //       {label}
    //     </Box> */}
    //   </Box>

    //   <Box display="flex">
    //     <Box mr={1}>{icon}</Box>
    //     <Typography
    //       variant="h4"
    //       fontWeight="bold"
    //       sx={{ color: colors.yellow[200] }}
    //     >
    //       {subtitle}
    //     </Typography>
    //   </Box>

    //   <Box display="flex" justifyContent={"space-around"}>
    //   <Typography
    //       variant="h4"
    //       fontWeight="bold"
    //       sx={{ color: colors.yellow[200] }}
    //     >
    //       {label1}
    //     </Typography>
    //   <Typography
    //       variant="h5"
    //       fontStyle="italic"
    //       sx={{ color: colors.yellow[600] }}
    //     >
    //       {increase}
    //     </Typography>
    //   </Box>
    // </Box>

    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.green[200] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" sx={{ color: colors.yellow[200] }}>
          {subtitle}
        </Typography>

        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.yellow[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>

  );
};
