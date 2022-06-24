import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { base_url } from "../utils/constants";
import { AppContext } from "../context";
import axios from "axios";

export default function Register() {
  const history = useNavigate();
  const { setCurrentUser } = useContext(AppContext);
  const [isLoading, setLoading] = useState(false);
  const [buttonAction, setButton] = useState(false);
  const [err, setError] = useState("");
  const submitUser = async (userInfo) => {
    const data = {
      fullName: userInfo.name.toLowerCase(),
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
      .post(`http://localhost:5000/api/user/auth/register`, data, config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          return history("/login");
        } else {
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
        console.log(error);
        if (error.response.data === undefined) {
          setLoading(false);
          return setError(
            "Could not connect to the server, check your network"
          );
        } else {
          console.log(error.response.data.msg);
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
          marginTop: "5%",
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
        <h1>Sign up</h1>
        <br />

        <Formik
          style={{
            textAlign: "center",
          }}
          initialValues={{ name: "", email: "", password: "" }}
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
                <p>Full Name</p>

                <Field
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="famos amos"
                />
                <ErrorMessage id="err" name="name" component="div" />
              </div>

              <div
                style={{
                  marginTop: "2%",
                }}
              >
                <p>Eamil Address</p>

                <Field
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="amos@gmail.com"
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
                  {isLoading ? "Submitting..." : "Sign up"}
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
          Already have an account?
          <a
            style={{
              color: "#3454D0",
            }}
            href="/login"
          >
            {" "}
            Login{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
