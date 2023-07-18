import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tonalidad } from "../../theme/theme";
import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../components/Header";

export const AlertasPage = () => {
  const theme = useTheme();
  const colors = tonalidad(theme.palette.mode);

  return (
    <Box m="20px">
      <Header
          title="Notificaciones"
          subtitle="Alertas de rendimiento y vulnerabilidad"
        />

      <Accordion sx={{ backgroundColor: colors.primary[500], mb:1}}>
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


      <Accordion sx={{ backgroundColor: colors.primary[500], mb:1 }}>
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

      <Accordion sx={{ backgroundColor: colors.primary[500], mb:1 }}>
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

      <Accordion sx={{ backgroundColor: colors.primary[500], mb:1 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.white[600]} variant="h5">
            Some Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adipisicing est culpa tempor sit exercitation qui. Ut qui ullamco
            e.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
