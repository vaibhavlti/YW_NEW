import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import TabComponent from "./Sections/TabComponent";
import { ContractorPersonData, IsDataFromAPI } from "../Login/DataCollection";

const columns = [
  { field: "Handover_Ref", headerName: "Handover Ref", width: 250 },
  { field: "Last_Modified", headerName: "Last Modified", width: 200 },
  { field: "Authorized_Person", headerName: "Authorized Person", width: 130 },
  {
    field: "Contractors_Rep",
    headerName: "Contractors Rep",
    width: 200,
  },
  {
    field: "Start_Date",
    headerName: "Start Date",
    width: 160,
  },
];

export default function DataTable() {
  const [certificates, setCertificates] = useState([]);
  const [showList, setShowList] = useState(true);
  const [, setCertificateDetails] = useState([]);
  useEffect(() => {
    IsDataFromAPI && IsDataFromAPI[0].flag === false
      ? setCertificates(ContractorPersonData)
      : fetch("https://localhost:7142/api/v1/certificates")
          .then((response) => response.json())
          .then((data) => {
            setCertificates(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
  }, []);

  const handleRowClick = () => {
    fetch("https://localhost:7142/api/v1/certificates")
      .then((response) => response.json())
      .then((data) => {
        setCertificateDetails(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setShowList(false);
  };

  const rows = certificates?.map((item, index) => {
    return {
      id: index,
      Handover_Ref: item.handover_Reference,
      Last_Modified: item?.updatedOn !== "" ? item?.updaredOn : item?.createdOn,
      Authorized_Person: item?.authorized_Person,
      Contractors_Rep: item?.contractor_Representative,
      Start_Date: item?.commence_Date,
    };
  });

  let navigate = useNavigate();

  return (
    <>
      {showList ? (
        <Box border="1px solid" padding={2}>
          <Typography
            fontWeight="600"
            lineHeight="45px"
            fontSize="30px"
            color="#131C42"
            ml={2}
          >
            Certificate list
          </Typography>
          <Box display="flex">
            <Box mb="10px">
              <TextField
                data-testid="freesearch"
                variant="outlined"
                type="text"
                size="small"
                name="search"
                required={false}
                placeholder={"Search"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ cursor: "pointer" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mb="10px" ml="auto">
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/certificate-form");
                }}
              >
                Add new certificate
              </Button>
            </Box>
          </Box>
          <Box>
            <DataGrid
              rows={rows}
              columns={columns}
              getRowId={() => Math.floor(Math.random() * 100000000)}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                ".MuiToolbar-root": {
                  width: "90%",
                },
              }}
              pageSizeOptions={[5, 10]}
              onRowClick={handleRowClick}
              checkboxSelection
            />
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }} width={"107%"}>
            <Grid container spacing={2} ml={"5%"} mt={0} width={"75%"}>
              <Grid xs={9} mt={"-94px"}>
                <div className=" overflow-cls">
                  <TabComponent showDetails={!showList} />
                </div>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}
