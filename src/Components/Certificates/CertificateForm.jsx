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
        <Grid container spacing={2} ml={"20%"} mt={0} width={"75%"}>
          <Grid xs={9} mt={"-64px"}>
            <div className=" overflow-cls">
              <Grid
                sx={{
                  "justify-content": "flex-start",
                  display: "flex",
                }}
              >
                <Typography variant="h6" color="#2441E5" noWrap component="div">
                  EITSA Handover / EITSA Handback Certificate
                </Typography>
              </Grid>
              <TabComponent />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CertificateForm;
