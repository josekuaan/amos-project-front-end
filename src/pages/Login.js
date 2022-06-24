import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { AppContext } from "../context";
import axios from "axios";
import { base_url } from "../utils/constants";

export default function Login() {
  const history = useNavigate();
  const { setCurrentUser } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [buttonAction, setButton] = useState(false);
  const [err, setError] = useState("");
  const submitUser = async (userInfo) => {
    const data = {
      email: userInfo.email.toLowerCase(),
      password: userInfo.password.toLowerCase(),
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    axios
      .post(`http://localhost:5000/api/user/auth/login`, data, config)
      .then(function (response) {
        if (response.data.success) {
          console.log("here");
          // setCurrentUser([response.data.user]);
          console.log("here");
          window.localStorage.setItem("userId", response.data.user._id);
          window.localStorage.setItem("loggedIn", true);
          window.localStorage.setItem("token", response.data.token);
          setButton(true);
          console.log("here");
          if (response.data.user.role === "user") {
            console.log("here");
            return history("/");
          }
        } else if (!response.data.success) {
          setError(response.data.msg);
        }
        // 3894
        if (isLoading) {
          setTimeout(() => {
            setLoading(!isLoading);
          }, 1000);
        }
      })
      .catch(function (error) {
        if (error.response === undefined) {
          setLoading(false);
          return setError(
            "Could not connect to the server, check your network"
          );
        } else {
          setError(error.response.data.msg);
        }
        setLoading(false);
      });
  };
  return (
    <div className="container">
      <div
        style={{
          marginLeft: "30%",
          marginRight: "30%",
          marginTop: "10%",
        }}
      >
        {err.length > 1 ? (
          <div className={err.length > 1 ? "login-message error " : "hide"}>
            {err}
          </div>
        ) : (
          ""
        )}
        <br />
        <h1>Login</h1>
        <br />

        <Formik
          style={{
            textAlign: "center",
          }}
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              submitUser(values);
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <p>Eamil Address</p>

                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                />
                <ErrorMessage id="err" name="email" component="div" />
              </div>

              <div
                style={{
                  marginTop: "2%",
                }}
              >
                <p>Password</p>
                <Field
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="**********"
                />
                <ErrorMessage id="err" name="password" component="div" />
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="login-btn"
                  onClick={() => setLoading(!isLoading)}
                >
                  {isLoading ? "Submitting..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p
          style={{
            marginTop: "2%",
          }}
        >
          Don't have an account?
          <a
            style={{
              color: "#3454D0",
            }}
            href="/register"
          >
            {" "}
            Sign up{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
