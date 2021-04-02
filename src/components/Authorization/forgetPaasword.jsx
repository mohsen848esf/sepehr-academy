import React, { Component, Fragment } from "react";
import "../../assets/css/manual/pages/ForgetPass.css";

import { Check } from "react-feather";
import { Link } from "react-router-dom";
import { forgetpass } from "../../services/AuthService";
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
const ForgetPass = () => {
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    email: yup
      .string()
      .required(" فیلد  را پر کنید")
      .min(13)
      .email(" ایمیلی که وارد کرده اید اشتباه است"),
  });

  const doSubmit = async (data) => {
    const email = data.email;
    // Call the server
    try {
      const jwt = await forgetpass(email);
      toast.success(jwt.data.message[0].message);
      //   setItem("token", jwt.data.result.jwtToken);
      this.props.history.push("/resetpassword");
      //   window.location.reload();
    } catch (ex) {
      //   console.log(ex.response.status)
      if (ex.response && ex.response.status >= 400) {
        const errors = { ...this.state.errors };
        // errors.email = ex.response.data.message["message"][0].message;
        toast.error(ex.response.data.message[0].message);
        // this.setState({ errors });
        // console.log("messageError" , ex.response.datadata["message"][0]["message"])
      } else {
        toast.error(ex.response.data.message[0].message);
      }
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => doSubmit(value)}
    >
      {({ errors, handleChange, touched }) => {
        return (
          <MDBContainer>
            <div className="d-flex justify-content-center mt-5 bg bg-white">
              <div className="">
                <MDBCard
                  className="card-image ForgetPassCard"
                  style={{
                    // backgroundImage:
                    //   "url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)",
                    width: "28rem",
                  }}
                >
                  <div className="text-white ForgetPassText-Box py-5 px-5 box-shadow-1">
                    <div className="text-center">
                      <h3 className="white-text mb-5 mt-4 font-weight-bold">
                        <strong>فراموشی رمز</strong>
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
                        className={`form-control ${
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
                      {/* <MDBRow className="d-flex align-items-center mb-4">
                        <div className="text-center mb-3 col-md-12">
                          <MDBBtn
                            color="success"
                            rounded
                            type="submit"
                            className="btn-block z-depth-1"
                          >
                            ارسال
                          </MDBBtn>
                        </div>
                      </MDBRow> */}
                    </Form>
                  </div>
                </MDBCard>
              </div>
            </div>
          </MDBContainer>
        );
      }}
    </Formik>
  );
};

export default ForgetPass;
