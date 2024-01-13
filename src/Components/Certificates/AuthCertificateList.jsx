import React, { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import ImportExportIcon from '@mui/icons-material/ImportExport';
import { ViewAuthCertificate } from './ViewAuthCertificate';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { AuthPersonData, IsDataFromAPI } from './DataCollection';

const columns = [
  {field:'Handover_Ref',headerName:'Handover Ref',width:250},
  { field: 'Last_Modified', headerName: 'Last Modified', width: 200 },
  { field: 'Authorized_Person', headerName: 'Authorized Person', width: 130 },
  {
    field: 'Contractors_Rep',
    headerName: 'Contractors Rep',
    width: 200,
  },
  {
    field: 'Start_Date',
    headerName: 'Start Date',
    width: 160,   
  },
];



export default function AuthCertificateList() {
  const userDetails = useSelector((state)=> state && state.commonReducer && state.commonReducer.user );
  
  const { token, user } = userDetails;
  const [certificates, setCertificates] = useState([]);
  const [showList, setShowList] = useState(true);
  const [certificateDetails,setCertificateDetails]=useState([]);

  let IsDataFromAPI = JSON.parse(localStorage.getItem('IsDataFromAPI'));
  let AuthPersonData = JSON.parse(localStorage.getItem('AuthPersonData'));
  console.log('IsDataFromAPI',IsDataFromAPI[0])
  useEffect(() => {
    
    IsDataFromAPI && IsDataFromAPI[0].flag === false ?  setCertificates(AuthPersonData) :
    fetch('https://ccb7c3d4-e305-4b79-858f-6273fbfb1aa4.mock.pstmn.io/certificates')
        .then((response) => response.json())
        .then((data) => {  
            setCertificates(data && data.length ? data.filter((val,index)=>val.authorized_Person===user.name) : AuthPersonData);
            
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);


  const handleRowClick = (cid) => {

    // fetch('https://15187da4-1a39-4d0f-b511-f1ca4ea52b39.mock.pstmn.io/certificates')
    // .then((response) => response.json())
    // .then((data) => {
    //   setCertificateDetails(data);
    // })
    // .catch((err) => {
    //    console.log(err.message);
    // });

    setCertificateDetails(AuthPersonData?.filter((val,index)=>val.id===cid));
    // console.log(certificateDetails);
    setShowList(false)  

  };
  const rows=certificates?.map((item,index)=>{return {id:index,cid:item.id,Handover_Ref:item.handover_Reference,Last_Modified:item?.updatedOn!==''?item?.updaredOn:item?.createdOn,Authorized_Person:item?.authorized_Person,Contractors_Rep:item?.contractor_Representative,Start_Date:item?.commence_Date}})
    let navigate = useNavigate();

  return (
    <>{showList?<Box border='1px solid' padding={2}><Typography fontWeight="600" lineHeight="45px" fontSize="30px" color="#131C42" ml={2}>Certificate list</Typography>
      {/* <Grid
        container
        width="50%"
      > */}
        {/* <Grid item xs={12} md={4} mb={2} ml={2}> */}
        <Box display="flex">
        <Box mb="10px">
          <TextField
            data-testid="freesearch"
            variant="outlined"
            type="text"
            size='small'
            name="search"
            required={false}
            placeholder={'Search'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon
                    sx={{ cursor: 'pointer' }} />
                </InputAdornment>
              ),
            }} />
            </Box>
        {/* </Grid> */}
        {/* <Grid item xs={12} md={2}>
          <Button variant="contained">Filter</Button>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button variant='outlined'> <ImportExportIcon />Sort</Button>
        </Grid> */}
        {/* <Grid item xs={12} md={5} ml="auto"> */}
        {/* <Box mb="10px" ml="auto">

          <Button variant='contained' onClick={()=>{navigate('/certification')}}>
            Add new certificate</Button>
            </Box> */}
            </Box>
        {/* </Grid> */}
      {/* </Grid> */}
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
        //   getRowId={() => Math.floor(Math.random() * 100000000)}
        getRowId={(row) => row.cid}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          sx={{ display: "flex",marginRight: '0px', pr: '0px',textAlign:"center"}}
          pageSizeOptions={[5, 10]}
          onRowClick={(params, event) => {
            if (!event.ignore) {
              handleRowClick(params.row.cid);
            }
          }}
          checkboxSelection />
      </Box></Box>:<ViewAuthCertificate certificateDetails={certificateDetails} showList={showList}/>}</>
  );
}
