import { useState } from "react";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
  const [showForm, setShowForm] = useState(false);
  // const userDetails = useSelector(
  //   (state) => state && state.commonReducer && state.commonReducer.user
  // );
  // const { token, user } = userDetails;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} ml={"20%"} mt={0} width={"75%"}>
          <Grid xs={9} mt={"-64px"}>
            <div className=" overflow-cls">
              {/* {user && user.role === "Contractor" ? ( */}
              <DataTable />

              {/* ) : (
                <AuthCertificateList />
              )} */}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Certificate;
