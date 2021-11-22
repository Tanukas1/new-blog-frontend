import logo from "../images/logo.png";
import { makeStyles } from "@material-ui/core";
import "../stylesheets/login.css";
import app_config from "../config";
import Swal from "sweetalert2";
import { Formik } from "formik";
import clsx from "clsx";
import React, { useState } from "react";

const myStyles = makeStyles(() => ({
  mycard: {
    marginTop: "10rem",
    boxShadow:
      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
  },
}));
const Login = () => {
  const url = app_config.api_url;
  const classes = myStyles();

  const loginform = {
    email: "",
    password: "",
  };

  const formSubmit = (values) => {
    fetch(url + "user/getbyemail/" + values.email)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);

          if (data.password == values.password) {
            console.log("login success");

            Swal.fire({
              icon: "success",
              title: "Login Success",
            });

            sessionStorage.setItem("user", JSON.stringify(data));
            window.location.replace("/AddBlog");

            return;
          }
        }

        Swal.fire({
          icon: "error",
          title: "Email or Password Incorrect",
        });
      });
  };

  return (
    <div className="col-md-3 mx-auto">
      <div className="tier1" id="login">
        <div
          className={clsx("card", classes.mycard)}
          style={{ marginTop: "5rem" }}
        >
          <div className="card-body">
            <div className="col-md-4 mx-auto mt-4">
              <h3>LOGIN</h3>
              <img src={logo} className="img-fluid" />
            </div>

            <Formik initialValues={loginform} onSubmit={formSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <label className="mt-4 w-100">Email</label>
                  <input
                    className="form-control"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                  />

                  <label className="mt-4">Password</label>
                  <input
                    className="form-control"
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    name="password"
                  />

                  <button type="submit" className="mt-5 btn btn-primary w-100 ">
                    Login Now
                  </button>
                </form>
              )}
            </Formik>

            <hr className="mt-4" />
            <a href="#">Forgot Password</a>
            <div className="float-end">
              <a href="#">Not Registered Yet?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
