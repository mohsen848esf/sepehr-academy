import React, { Fragment, useState, UseEffect } from "react";
import Joi from "joi-browser";
import jwt_decode from "jwt-decode";

import { Link, useHistory } from "react-router-dom";
import { login } from "../../services/AuthService";
import { setItem, getItem } from "../../services/storage/storage";
import { toast } from "react-toastify";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
} from "../../assets/css/mdbreact";
import { Formik, Form } from "formik";

import "../../assets/css/manual/pages/LogIn.css";
// import '../../assets/css/manual/pages/LogIn.css';

const LoginForm = () => {
  // const [data, setData] = useState({})
  const history = useHistory();
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    email: yup
      .string()
      .required(" فیلد  را پر کنید")
      .min(13)
      .email(" ایمیلی که وارد کرده اید اشتباه است"),
    password: yup.string().min(8).required(" فیلد  را پر کنید"),
  });

  const doSubmit = async (data) => {
    const UserData = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await login(UserData);
      toast.success(response.data.message[0].message);
      setItem("token", response.data.result.jwtToken);
      const decode = jwt_decode(response.data.result.jwtToken);
      setItem("role", decode.role);
      const userData = response.data.result.studentModel;
      console.log(userData);
      setItem("user", userData);
      history.replace("/student/dashboard");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => doSubmit(value)}
    >
      {({ errors, handleChange, touched }) => {
        return (
          <MDBContainer className="d-flex justify-content-center">
            <div className="d-flex mt-5 bg bg-white justify-content-between login-Form">
              <div className="ml-4 mt-4">
                <MDBCard
                  className="card-image login-FormCard"
                  style={{
                    // backgroundImage:
                    //   "url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)",
                    width: "28rem",
                  }}
                >
                  <div className="text-white  py-5 px-5 login-FormText-Box box-shadow-1">
                    <div className="text-center">
                      <h3 className="white-text mb-5 mt-4 font-weight-bold">
                        <strong>ورود</strong>
                      </h3>
                    </div>
                    <Form>
                      <MDBInput
                        label="ایمیل "
                        name="email"
                        placeholder="email@email.com"
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`white-text form-control ${
                          errors.email && touched.email && "is-invalid"
                        }`}
                      />{" "}
                      {errors.email && touched.email && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.email}!
                        </span>
                      )}
                      <MDBInput
                        label=" رمز عبور"
                        name="password"
                        onChange={handleChange}
                        group
                        type="password"
                        validate
                        labelClass="white-text"
                        className={`white-text  form-control ${
                          errors.password && touched.password && "is-invalid"
                        }`}
                      />{" "}
                      {errors.password && touched.password && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.password}!
                        </span>
                      )}
                      {/* <MDBInput
                        label={
                          <>
                            Accept the&nbsp;
                            <a
                              href="#!"
                              className="green-text font-weight-bold"
                            >
                              Terms and Conditions
                            </a>
                          </>
                        }
                        type="checkbox"
                        id="checkbox1"
                        labelClass="white-text"
                      /> */}
                      <MDBRow className="d-flex align-items-center mb-4">
                        <div className="text-center mb-3 col-md-12">
                          <MDBBtn
                            color="success"
                            rounded
                            type="submit"
                            className="btn-block z-depth-1"
                          >
                            ورود
                          </MDBBtn>
                        </div>
                      </MDBRow>
                    </Form>

                    <MDBCol md="12">
                      {/* <p className="font-small white-text d-flex justify-content-end"> */}
                      <Link
                        to="/register"
                        className="green-text ml-1 font-weight-bold"
                        style={{ textDecoration: "none" }}
                      >
                        ثبت نام
                      </Link>
                      {/* </p> */}
                    </MDBCol>

                    <MDBCol md="12">
                      {/* <p className="font-small white-text d-flex justify-content-end"> */}
                      <Link
                        to="/forgetPassword"
                        className="green-text ml-1 font-weight-bolder"
                        style={{ textDecoration: "none" }}
                      >
                        رمز خود را فراموش کردید؟
                      </Link>
                      {/* </p> */}
                    </MDBCol>
                  </div>
                </MDBCard>
              </div>
              <div className="mr-4 login-FormImage">
                <img
                  src={
                    require("../../assets/images/pages/landingPage/login/Login2.gif")
                      .default
                  }
                />
              </div>
            </div>
          </MDBContainer>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
