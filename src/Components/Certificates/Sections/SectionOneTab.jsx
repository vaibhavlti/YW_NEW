import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Select,
  MenuItem,
  Autocomplete,
} from "@mui/material";
// import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  IsDataFromAPI,
  AuthUserDetails,
  Sites,
  ContractorUserDetails,
  ContractorPersonData,
} from "../../Login/DataCollection";

export function SectionOneTab(props) {
  const [type, setType] = useState("");
  const [site, setSite] = useState("");
  const [status, setStatus] = useState("");
  const [handover_reference, setHandover] = useState(
    "Certificate_Testing_Handover8"
  );
  const [person_name, setPersonname] = useState();
  const [auth_person_telephone_number, setAuthTele] = useState("7865467890");
  const [contractor_name, setContractorName] = useState("");
  const [contractor_telephone_number, setContractorTele] =
    useState("8645678945");
  const [representative_name, setRepresentative] = useState("");
  const [representative_telephone_number, setRepresentativeTele] =
    useState("9856784567");
  const [authorizedPersonDetails, setAuthorizedPersonDetails] = useState();
  const [contactorDetails, setContractorDetails] = useState();
  const [contactorRepDetails, setContractorRepDetails] = useState();
  const [siteOptions, setSiteOptions] = useState();
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    IsDataFromAPI && IsDataFromAPI[0].flag === false
      ? setSiteOptions(Sites)
      : fetch(
          "https://ccb7c3d4-e305-4b79-858f-6273fbfb1aa4.mock.pstmn.io/sites"
        )
          .then((response) => response.json())
          .then((data) => {
            setSiteOptions(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
  }, []);

  useEffect(() => {
    IsDataFromAPI && IsDataFromAPI[0].flag === false
      ? setAuthorizedPersonDetails(AuthUserDetails)
      : fetch(
          "https://ccb7c3d4-e305-4b79-858f-6273fbfb1aa4.mock.pstmn.io/contacts/authorized_person"
        )
          .then((response) => response.json())
          .then((data) => {
            setAuthorizedPersonDetails(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
  }, []);

  useEffect(() => {
    IsDataFromAPI && IsDataFromAPI[0].flag === false
      ? setContractorDetails(ContractorUserDetails)
      : fetch(
          "https://ccb7c3d4-e305-4b79-858f-6273fbfb1aa4.mock.pstmn.io/contacts/contractor"
        )
          .then((response) => response.json())
          .then((data) => {
            setContractorDetails(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
  }, []);

  useEffect(() => {
    IsDataFromAPI && IsDataFromAPI[0].flag === false
      ? setContractorRepDetails(ContractorUserDetails)
      : fetch(
          "https://ccb7c3d4-e305-4b79-858f-6273fbfb1aa4.mock.pstmn.io/contacts/contractor"
        )
          .then((response) => response.json())
          .then((data) => {
            setContractorRepDetails(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
  }, []);

  useEffect(() => {
    IsDataFromAPI && IsDataFromAPI[0].flag === false
      ? setCertificates(ContractorPersonData)
      : fetch(
          "https://ccb7c3d4-e305-4b79-858f-6273fbfb1aa4.mock.pstmn.io/certificates"
        )
          .then((response) => response.json())
          .then((data) => {
            setCertificates(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
  }, []);

  const { handleSubmit } = useForm();

  const onSubmit = async (e) => {
    let formData = {
      type: type,
      mode: "Manual",
      site: site,
      handover_Reference: "Certificate_Testing_Handover8",
      authorized_Person: person_name,
      contractor: contractor_name,
      contractor_Representative: representative_name,
      authorized_Person_tele: auth_person_telephone_number,
      contractor_tele: contractor_telephone_number,
      contractor_Representative_tele: representative_telephone_number,
      site_Location: "",
      equipments: "Sewage Pump",
      access_Arrangements: "",
      work_Description: "Sewage Pump should be Cleaned.",
      commence_Date: "2024-01-05",
      completion_Date: "2025-06-30",
      isInspectionUnderTaken: "Yes",
      isStartOnSiteLetter: "Yes",
      isHealthNSaftey: "Yes",
      handover_Name: "",
      takeover_Name: "",
      handover_Date: "",
      handover_Comment: "",
      handback_Name: "",
      takeback_Name: "",
      handback_Date: "",
      handback_Comment: "",
      createdOn: "12-12-2023 08:03:13 AM",
      createdBy: "Paul Anderson",
      updatedOn: "",
      updatedBy: "",
      isActive: "True",
      status: "New",
    };
    // console.log(formData);
    // const response = await fetch("http://localhost:5000/api/login-user", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       Accept: "application/json",
    //     },
    //     body: formData,
    //   });

    localStorage.setItem(
      "certificate_id",
      "74f5936e-0917-49e8-bef7-da0e56442f28"
    );
    console.log("siteoption", siteOptions);
  };
  return (
    <Box p="15px" className="tab-cls">
      <form onSubmit={handleSubmit(onSubmit)} id="hook-form">
        <Grid container rowSpacing={2} columnSpacing={3} mt="2px">
          <Grid item xs={12} md={6}>
            <Typography mt="5px" component="div">
              Type
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
            >
              <FormControlLabel
                value="test"
                control={<Radio name="type" id="type" />}
                label="Test"
                disabled={props?.showDetails}
                onChange={(e) => setType(e.target.value)}
              />
              <FormControlLabel
                value="remedial"
                control={<Radio name="type" id="type" />}
                label="Remedial"
                disabled={props?.showDetails}
                onChange={(e) => setType(e.target.value)}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Status</Typography>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={1}
              fullWidth={true}
              disabled
              onChange={(e) => setStatus(e.target.value)}
              // onChange={handleChange}
            >
              <MenuItem value={1}>New</MenuItem>
              <MenuItem value={2}>Handover To Approve</MenuItem>
              <MenuItem value={3}>Handover Approved/Rejected</MenuItem>
              <MenuItem value={4}>Handback To Accept</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Site*</Typography>
            <Autocomplete
              disabled={props.showDetails}
              inputValue={"River"}
              id="equipments"
              options={siteOptions?.map((item) => item?.name)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => setSite(e.target.value)}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Handover Reference*</Typography>
            <TextField
              id="handover_reference"
              name={"Handover Reference"}
              disabled={props.showDetails}
              inputProps={{
                maxLength: 255,
              }}
              fullWidth
              value={handover_reference}
              placeholder="Enter handover reference"
              onChange={(e) => setHandover(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              mt="5px"
              color="#2441E5"
              fontWeight={600}
              className="heading-fl"
              component="div"
            >
              Contact Information
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Authorized person name*</Typography>
            <Autocomplete
              id="authorizedPersonDetails"
              disabled={props.showDetails}
              inputValue={"Tom Adena"}
              options={authorizedPersonDetails?.map((item) => item?.name)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => setPersonname(e.target.value)}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Telephone number*</Typography>
            <TextField
              id="auth_person_telephone_number"
              name={"Telephone number"}
              disabled={props.showDetails}
              value={auth_person_telephone_number}
              inputProps={{
                maxLength: 255,
              }}
              fullWidth
              placeholder="Enter telephone number"
              onChange={(e) => setAuthTele(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Contractor name*</Typography>
            <Autocomplete
              id="Contrator_Details"
              disabled={props.showDetails}
              inputValue={"Andy Aleby"}
              options={contactorDetails?.map((item) => item?.name)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => setContractorName(e.target.value)}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Telephone number*</Typography>
            <TextField
              id="contractor_telephone_number"
              name={"Contractor number"}
              inputProps={{
                maxLength: 255,
              }}
              fullWidth
              disabled={props.showDetails}
              value={contractor_telephone_number}
              placeholder="Enter telephone number"
              onChange={(e) => setContractorTele(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Contactor representative name*</Typography>
            <Autocomplete
              disabled={props.showDetails}
              inputValue={
                props?.showDetails && certificates[0]?.contractor_Representative
              }
              id="ContratorRep_Details"
              options={contactorRepDetails?.map((item) => item?.name)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onChange={(e) => setRepresentative(e.target.value)}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>Telephone number</Typography>
            <TextField
              id="representative_telephone_number"
              name={"Telephone number"}
              inputProps={{
                maxLength: 255,
              }}
              fullWidth
              disabled={props.showDetails}
              value={representative_telephone_number}
              placeholder="Enter telephone number"
              onChange={(e) => setRepresentativeTele(e.target.value)}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default SectionOneTab;
