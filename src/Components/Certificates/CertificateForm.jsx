import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import TabComponent from "./Sections/TabComponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CertificateForm() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={9} className="mt-10 mb-20 overflow-cls">
            <Typography variant="h6" color="#2441E5" noWrap component="div">
              EITSA Handover / EITSA Handback Certificate
            </Typography>
            <TabComponent></TabComponent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CertificateForm;
