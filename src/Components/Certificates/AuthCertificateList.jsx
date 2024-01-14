import React, { useState, useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ViewAuthCertificate } from "./ViewAuthCertificate";

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

export default function AuthCertificateList() {
  const [showList, setShowList] = useState(true);
  const username = localStorage.getItem("username");
  const [certificates, setCertificates] = useState([]);
  const [certificateDetails, setCertificateDetails] = useState([]);

  let IsDataFromAPI = true;
  let AuthPersonData = JSON.parse(localStorage.getItem("AuthPersonData"));

  useEffect(() => {
    IsDataFromAPI === false
      ? setCertificates(AuthPersonData)
      : fetch("https://localhost:7142/api/v1/certificates")
          .then((response) => response.json())
          .then((data) => {
            setCertificates(
              data && data.length
                ? data.filter(
                    (val) =>
                      val.authorized_Person === username &&
                      val.status === "Handover To Approve"
                  )
                : AuthPersonData
            );
          })
          .catch((err) => {
            console.log(err.message);
          });
  }, []);

  const handleRowClick = (cid) => {
    fetch("https://localhost:7142/api/v1/certificates")
      .then((response) => response.json())
      .then((data) => {
        console.log("AuthCert:"+ data);
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
      cid: item.id,
      Handover_Ref: item.handover_Reference,
      Last_Modified: item?.updatedOn !== "" ? item?.updaredOn : item?.createdOn,
      Authorized_Person: item?.authorized_Person,
      Contractors_Rep: item?.contractor_Representative,
      Start_Date: item?.commence_Date,
    };
  });

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
          </Box>
          <Box>
            <DataGrid
              rows={rows}
              columns={columns}
              getRowId={(row) => row.cid}
              //getRowId={() => Math.floor(Math.random() * 100000000)}
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
              //onRowClick={handleRowClick}
              onRowClick={(params, event) => {
                if (!event.ignore) {
                  handleRowClick(params.row.cid);
                }
              }}
              checkboxSelection
            />
          </Box>
        </Box>
      ) : (
        <ViewAuthCertificate
          certificateDetails={certificateDetails}
          showList={showList}
        />
      )}
    </>
  );
}
