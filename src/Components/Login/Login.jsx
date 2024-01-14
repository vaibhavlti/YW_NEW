import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
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
import { LoginSchema } from "./Schema";
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

const Copyright = () => {
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
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#d4d4d4",
    backgroundImage: `url(${ImageBG})`,
  },
  paperContainer: {
    backgroundImage: `url(${ImageBG})`,
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm }) => {
      const formData = JSON.stringify(values);
      const { email, password } = values;
  

      const response = await fetch("https://localhost:7142/api/v1/login?mobileNo="+email+"&password="+password, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

   if (data) {
    console.log('test',data.user);

    if(data.user.role==='Contractor' || data.user.role ==='Authorized Person')
    {
     
      localStorage.setItem('username', data.user.name);
      localStorage.setItem('role', data.user.role);
      localStorage.setItem('mobileNumber', data.user.mobileNumber);
      localStorage.setItem('token', data.token);
      dispatch(
        login({
          "token": data.token,
          "user": data.user
        })
      );
      navigate("/home");
    }
  }
     
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });
  return (
    <>
      <div className={`container-fluid login-container ${classes.root}`}>
        <div className="">
          <div className="rounded d-flex justify-content-center">
            <div className="col-md-5 col-sm-12 shadow-lg p-5 bg-light">
              <div className="text-center">
                <img src={logo} alt={"logo"} />
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="p-4">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <span className="">{formik.errors.email}</span>
                  )}
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <span className="">{formik.errors.password}</span>
                  )}
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Forgot Password?"}
                      </Link>
                    </Grid>
                  </Grid>
                  <div className="input-group mb-3">
                    <button
                      className=" form-control btn btn-primary text-center mt-2 "
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <Grid container justifyContent="center">
                    <Grid item>
                      {"Not a member? "}
                      <Link href="#" variant="body2">
                        {"Create an New Account"}
                      </Link>
                    </Grid>
                  </Grid>
                </div>
                <Box>
                  <Copyright />
                </Box>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
