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
          localStorage.setItem(
            "AuthPersonData",
            JSON.stringify(AuthPersonData)
          );
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
      // console.log("res1", data.data);

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
