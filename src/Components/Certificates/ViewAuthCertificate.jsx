import { Grid, Typography, Button, TextField } from "@mui/material";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
// import { CenterFocusStrong } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

export function ViewAuthCertificate(props) {
  // const [showList, setShowList] = useState(props.showList);
  // let navigate = useNavigate();
  const [comments, setComments] = useState("");
  const onSave = (val) => {
    let formData = {
      comments: comments,
      approve_status: val,
    };
    // const response = await fetch("http://localhost:5000/api/handover", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       Accept: "application/json",
    //     },
    //     body: formData,
    //   });
    console.log(formData);
  };
  return (
    <Grid className="certificate-design">
      <Grid container>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Typography></Typography>
          <Typography></Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Type*</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props?.certificateDetails[0]?.type}</Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Status*</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props?.certificateDetails[0]?.status}</Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Site*</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props.certificateDetails[0]?.site}</Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Handover reference*</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>
            {props.certificateDetails[0]?.handover_Reference}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} className="approve-cls grid-sp"></Grid>
        <Grid item xs={12} md={12} className="grid-sp">
          <Typography mt="5px" color="#2441E5" fontWeight={600} component="div">
            Contact Information
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Authorized person name*</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>
            {props.certificateDetails[0]?.authorized_Person}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Telephone Number</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Contractor name*</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props.certificateDetails[0]?.contractor}</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography className="label-cls">Telephone Number</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">
            Contractor representative name*
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>
            {props.certificateDetails[0]?.contractor_Representative}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography className="label-cls">Telephone Number</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props.certificateDetails[0]?.mobileNumber}</Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">createdBy</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props.certificateDetails[0]?.createdBy}</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography className="label-cls">createdBy</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>{props.certificateDetails[0]?.createdBy}</Typography>
        </Grid>

        <Grid item xs={12} md={12} className="approve-cls grid-sp"></Grid>

        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Site Rule</Typography>
        </Grid>
        <Grid item xs={12} md={9} className="grid-sp">
          This is a restricted handover. This certificate only hand-over control
          and possession of the low voltage electrical system, and a practical
          working area around it. If the working area extends into a confined
          space the contractor will take possession of the confined space for
          the duration of the activity.
        </Grid>

        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">
            Site/emergency procedures
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} className="grid-sp">
          In accordance with site induction.
        </Grid>

        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">
            Any other instructions/conditions
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} className="grid-sp">
          when the handover is in force the contractor shall demark the working
          area and erect appropriate barriers and warning notices. All other
          personnel visiting the site shall make prior contact with the
          contractor using the information detailed on the contractors sign at
          the site entrance
        </Grid>

        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">
            Need for access by YW Personnel/others
          </Typography>
        </Grid>
        <Grid item xs={12} md={9} className="grid-sp">
          Access by YW personnel to carry out opertaional activities is
          permitted at all times. Access by YW maintenance personnel (or works
          by other contractors) when the low voltage electrical system is
          affected shall only be by prior agreement with the contractor that is
          in posession of this certificate.
        </Grid>

        <Grid item xs={12} md={12} className="approve-cls grid-sp"></Grid>

        <Grid item xs={12} md={3} className="grid-sp"></Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ textAlign: "center" }}
          className="grid-sp"
        >
          <Typography className="label-cls">Handover</Typography>
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp"></Grid>

        <Grid item xs={12} md={12} className="approve-cls grid-sp"></Grid>

        <Grid item xs={12} md={3} className="grid-sp">
          <Typography className="label-cls">Comments</Typography>
        </Grid>
        <Grid item xs={12} md={6} className="grid-sp">
          <TextField
            id="comments"
            label=""
            placeholder=""
            multiline
            name="comments"
            sx={{ width: 700 }}
            rows={4}
            onChange={(e) => {
              setComments(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={3} className="grid-sp"></Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3}>
          <Button
            variant="outlined"
            onClick={onSave("Approve")}
            sx={{ fontWeight: 600 }}
          >
            <CheckCircleIcon sx={{ color: "green" }} backgroundColor="green" />
            Approve
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            variant="outlined"
            onClick={onSave("Reject")}
            sx={{ fontWeight: 600 }}
          >
            {" "}
            <CancelIcon sx={{ color: "red" }} />
            Reject
          </Button>
        </Grid>
        <Grid item xs={12} md={3}></Grid>

        <Grid item xs={12} md={3} className="grid-sp"></Grid>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
}
