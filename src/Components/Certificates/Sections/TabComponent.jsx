import * as React from "react";

import { useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Button, Box, Snackbar } from "@mui/material";

import SectionOneTab from "./SectionOneTab";
import SectionTwoTab from "./SectionTwoTab";
import SectionThreeTab from "./SectionThreeTab";
import SectionFourTab from "./SectionFourTab";
import Handover from "./handover";
import Notes from "./notes";

import "../../Login/style.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TabComponent(props) {
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(props?.showDetails);

  const handleSaveClick = () => {
    setOpen(true);
  };

  const handleEdit = () => {
    setShowDetails(!props?.showDetails);
  };

  const handleSave = () => {
    setShowDetails(!showDetails);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Certificate is submitted for the Approval!
        </Alert>
      </Snackbar>
      <Box display="flex" className="mb-5 mt-65" justifyContent="end">
        <Button variant="outlined" sx={{ mr: "5px" }} onClick={handleSaveClick}>
          Submit YW for Approval
        </Button>
        {showDetails ? (
          <Button
            type="edit"
            variant="contained"
            form="hook-form"
            onClick={handleEdit}
          >
            Edit
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            form="hook-form"
            onClick={handleSave}
          >
            Save
          </Button>
        )}
      </Box>
      <Tabs
        defaultActiveKey="test-tab"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="test-tab" title="Section 1">
          <SectionOneTab showDetails={showDetails}></SectionOneTab>
        </Tab>
        <Tab eventKey="section2" title="Section 2">
          <SectionTwoTab showDetails={showDetails}></SectionTwoTab>
        </Tab>
        <Tab eventKey="section3" title="Section 3">
          <SectionThreeTab showDetails={showDetails}></SectionThreeTab>
        </Tab>
        <Tab eventKey="section4" title="Section 4">
          <SectionFourTab showDetails={showDetails}></SectionFourTab>
        </Tab>
        <Tab eventKey="Handover" title="Handover/Handback">
          <Handover showDetails={showDetails}></Handover>
        </Tab>
        <Tab eventKey="Notes" title="Notes">
          <Notes showDetails={showDetails}></Notes>
        </Tab>
        {/* <Tab eventKey="Change History" title="Change History">
        <SectionFourTab></SectionFourTab>
      </Tab> */}
      </Tabs>
    </>
  );
}

export default TabComponent;
