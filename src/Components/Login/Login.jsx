import React from "react";
import { LoginSchema } from "./Schema";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { login } from "../../store/reducers/common-reducers";

import {
  AuthPersonData,
  ContractorPersonData,
  IsDataFromAPI,
  AuthUserDetails,
  ContractorUserDetails,
  Sites,
  EquipmentDetails,
  Certificates,
} from "./DataCollection";

import logo from "../../images/logo.png";
import ImageBG from "../../images/login_page_background.png";
import "./style.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Yorkshire Water
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#d4d4d4",
    backgroundImage: `url(${ImageBG})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  size: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1rem 3rem rgba(0,0,0,.175)!important",
  },

  paper: {
    margin: theme.spacing(2, 6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paperContainer: {
    backgroundImage: `url(${ImageBG})`,
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = React.useState({ username: "", password: "" });

  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;

    setAccount(accountCopy);
  };

  const handleSubmit = (email, password) => {
    // const { email, password } = values;
    // console.log('formData',formData);
    /* const response = await fetch("http://localhost:5000/api/login-user", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await response.json();*/

    let data = {
      username: "auth@gmail.com",
      password: "Password123",
      status: "ok",
    };

    let response = {};
    if (data) {
      console.log("test", data.username);
      if (
        data.status === "ok" &&
        data.username === email &&
        data.password === password
      ) {
        localStorage.setItem("user", JSON.stringify(data));
        // console.log("data", data.email);
        // const payload = {
        //   email: email,
        // };
        // dispatch({ type: "ADD_USER", payload: payload });
        response = {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlRvbSBBZGVuYSIsIm5iZiI6MTcwMjM3MzA0NCwiZXhwIjoxNzAyNDU5NDQ0LCJpYXQiOjE3MDIzNzMwNDR9.wgwVZm5UoqGJWrh-OGHD_YgPw1u4uFaoln7HhByvP48",
          message: "Login successful",
          user: {
            id: "1003",
            name: "Tom Adena",
            role: "Authorized Person",
            company: "Yorkshire Water",
            mobileNumber: "7654320900",
          },
        };
        // console.log('test');
        // localStorage.setItem('username', response.user.name);
        // localStorage.setItem('role', response.user.role);
        // localStorage.setItem('mobileNumber', response.user.mobileNumber);
        // localStorage.setItem('token', response.token);
        // navigate("/profile");
      }
      data = {
        username: "contractor@gmail.com",
        password: "Password123",
        status: "ok",
      };
      if (
        data.status === "ok" &&
        data.username === email &&
        data.password === password
      ) {
        localStorage.setItem("user", JSON.stringify(data));
        // console.log("data", data.email);
        // const payload = {
        //   email: email,
        // };
        // dispatch({ type: "ADD_USER", payload: payload });

        response = {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlRvbSBBZGVuYSIsIm5iZiI6MTcwMjM3MzA0NCwiZXhwIjoxNzAyNDU5NDQ0LCJpYXQiOjE3MDIzNzMwNDR9.wgwVZm5UoqGJWrh-OGHD_YgPw1u4uFaoln7HhByvP48",
          message: "Login successful",
          user: {
            id: "1005",
            name: "Andy Aleby",
            role: "Contractor",
            company: "Jacobs Field Service Ltd",
            mobileNumber: "2555678219",
          },
        };
        // localStorage.setItem('username', response.user.name);
        // localStorage.setItem('role', response.user.role);
        // localStorage.setItem('mobileNumber', response.user.mobileNumber);
        // localStorage.setItem('token', response.token);
        // navigate("/profile");
      }
      if (response) {
        dispatch(
          login({
            token: response.token,
            user: response.user,
          })
        );
        localStorage.setItem("AuthPersonData", JSON.stringify(AuthPersonData));
        localStorage.setItem(
          "ContractorPersonData",
          JSON.stringify(ContractorPersonData)
        );
        localStorage.setItem("IsDataFromAPI", JSON.stringify(IsDataFromAPI));
        localStorage.setItem(
          "AuthUserDetails",
          JSON.stringify(AuthUserDetails)
        );
        localStorage.setItem(
          "ContractorUserDetails",
          JSON.stringify(ContractorUserDetails)
        );
        localStorage.setItem("Sites", JSON.stringify(Sites));
        localStorage.setItem(
          "EquipmentDetails",
          JSON.stringify(EquipmentDetails)
        );
        localStorage.setItem("Certificates", JSON.stringify(Certificates));
        navigate("/home");
      }
    }
  };

  return (
    <Grid container component="main" className={classes.root} ba>
      <CssBaseline />
      <Grid
        className={classes.size}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={1}
        square
      >
        <div className={classes.paper}>
          <img src={logo} className="img-home" alt={"logo"} />
          <form className={classes.form}>
            <TextField
              onChange={(event) => handelAccount("username", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              onChange={(event) => handelAccount("password", event)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  {"Forgot Password?"}
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                handleSubmit(account.username, account.password);
              }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  {"Not a member? Create an New Account"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
