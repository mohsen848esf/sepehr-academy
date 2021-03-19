import React, { Component, Fragment } from "react";
// import '../../assets/css/manual/pages/ForgetPass.css';
// import { isEmail } from "validator";
import Joi from "joi-browser";
// import Form from "../layout/form";
import { Link } from "react-router-dom";
import { resetpass } from "../../services/AuthService";
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
import "../../assets/css/manual/pages/resetpass.css";
const ResetPass = () => {
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    password: yup.string().min(8).required(" فیلد  را پر کنید"),
  });

  const doSubmit = async (data) => {
    const password = data.password;
    const token = getItem("token");

    // Call the server
    try {
      const resetpassword = await resetpass(token, password);
      toast.success(resetpassword.data.message[1].message);
      // //   setItem("token", jwt.data.result.jwtToken);
      //     این قسمت پایین رو دیشب تغییر دادی
      this.props.history.push(`/logIn`);
      window.location.reload();
      // تا اینجا
    } catch (ex) {
      //   console.log(ex.response.status)
      if (ex.response && ex.response.status >= 400) {
        // const errors = { ...this.state.errors };
        // errors.email = ex.response.data.message["message"][0].message;
        toast.error(ex.response.data.message[1].message);
        // this.setState({ errors });
        // console.log("messageError" , ex.response.datadata["message"][0]["message"])
      } else {
        toast.error(ex.response.data.message[0].message);
      }
    }
  };

  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => doSubmit(value)}
    >
      {({ errors, handleChange, touched }) => {
        return (
          <MDBContainer>
            <div className="row mt-5 bg bg-white">
              <div className="col-lg-4">
                <MDBCard
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)",
                    width: "28rem",
                  }}
                >
                  <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                    <div className="text-center">
                      <h3 className="white-text mb-5 mt-4 font-weight-bold">
                        <strong>تغییر رمز</strong>
                      </h3>
                    </div>
                    <Form>
                      <MDBInput
                        label=" رمز عبور"
                        name="password"
                        onChange={handleChange}
                        group
                        type="password"
                        validate
                        labelClass="white-text"
                        className={`form-control ${
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
                      {/* <div className="md-form pb-3">
                        <MDBInput
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
                        />
                      </div> */}
                      <MDBRow className="d-flex align-items-center mb-4">
                        <div className="text-center mb-3 col-md-12">
                          <MDBBtn
                            color="success"
                            rounded
                            type="submit"
                            className="btn-block z-depth-1"
                          >
                            تغییر رمز
                          </MDBBtn>
                        </div>
                      </MDBRow>
                    </Form>
                  </div>
                </MDBCard>
              </div>
              <div className="col-lg-8">
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

export default ResetPass;
