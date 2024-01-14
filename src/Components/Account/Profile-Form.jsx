import { Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";

function ProfileForm() {
  const username = localStorage.getItem("username");

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ paddingTop: "10%", paddingLeft: "15%" }}>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              defaultValue={username}
            />
            <TextField
              required
              id="outlined-required"
              label="Contact No"
              // defaultValue={user?.mobileNumber}
            />
          </div>
          <div>
            <TextField
              disabled
              id="outlined-required"
              label="Role"
              required
              // defaultValue={user?.role}
            />
            <TextField
              required
              id="outlined-required"
              label="Company"
              // defaultValue={user?.company}
            />
          </div>
        </div>
      </Box>
    </>
  );
}

export default ProfileForm;
