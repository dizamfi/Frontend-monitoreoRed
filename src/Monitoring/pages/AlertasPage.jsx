import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tonalidad } from "../../theme/theme";
import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../components/Header";
import { alerts } from "../../data/data";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

export const AlertasPage = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);

  return (
    <Box m="20px">
      <Header
        title="Notificaciones"
        subtitle="Alertas de rendimiento y vulnerabilidad"
      />
      {alerts.map((value, i) => (
        <Accordion key={i} sx={{ backgroundColor: colors.primary[500], mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box display="flex" alignItems="center">
              <SettingsTwoToneIcon sx={{ color: colors.yellow[600] }} />
              <Typography color={colors.green[200]} ml={2} variant="h5">
                {value.mac}
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }} />
            <Typography color={colors.green[200]} variant="h5" pr={2}>
              {value.fecha}
            </Typography>
            <Typography color={colors.green[100]} variant="h5" pr={6}>
              {value.hora}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5" color={colors.green[200]}>
              {value.msg}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* <Accordion sx={{ backgroundColor: colors.primary[500], mb: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.white[600]} variant="h5">
            Some Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adipisicing est culpa tempor sit exercitation qui. Ut qui ullamco
            enim occaecat occaecat aute. Nisi ex do magna nostrud ea qui sunt
            eaqua.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: colors.primary[500], mb: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.white[600]} variant="h5">
            Some Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adipisicing est culpa tempor sit exercitation qui. Ut qui ullamco
            enim occaecat occaecat aute. Nisi ex do magna nostrud ea qui sunt
            eaqua.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: colors.primary[500], mb: 1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.white[600]} variant="h5">
            Some Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adipisicing est culpa tempor sit exercitation qui. Ut qui ullamco e.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </Box>
  );
};
