import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";

import DataTable from "./Certificate-List";
import AuthCertificateList from "./AuthCertificateList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Certificate() {
  const role = localStorage.getItem("role");

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} ml={"20%"} mt={0} width={"75%"}>
          <Grid xs={9} mt={"-64px"}>
            <div className=" overflow-cls">
              {role === "Contractor" ? (
                <Grid xs={9}>
                  <DataTable />
                </Grid>
              ) : (
                <Grid xs={9}>
                  <AuthCertificateList />
                </Grid>
              )}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Certificate;
