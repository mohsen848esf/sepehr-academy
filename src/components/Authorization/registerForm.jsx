import React, { Fragment } from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import Form from "../layout/form";
import { register } from "../../services/AuthService";
import { setItem, getItem } from "../../services/storage/storage";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
} from "../../assets/css/mdbreact";
import { Formik, Form } from "formik";

import "../../assets/css/manual/pages/Register.css";

const RegisterForm = () => {
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "نام حداقل باید 3 حرف باشد")
      .required("فیلد را پر کنید"),
    lastName: yup
      .string()
      .min(3, "نام خانوادگی حداقل باید 3 حرف باشد   ")
      .required("فیلد را پر کنید"),
    userName: yup
      .string()
      .min(3, "نام کاربری حداقل باید 3 حرف باشد")
      .required("فیلد را پر کنید"),
    PhoneNumber: yup
      .string(" ورودی این فیلد باید عدد باشد")
      .required(" فیلد را پر کنید")
      .min(11, "شماره باید 11 رقم باشد"),
    birthday: yup
      .string()
      .required(" فیلد را پر کنید")
      .min(10, "تاریخ وارد شده شما اشتباه است")
      .max(10, "بیشتر از این نمیتوانید تاریخ راوارد کنید"),
    email: yup
      .string()
      .min(13)
      .email(" ایمیلی که وارد کرده اید اشتباه است")
      .required(" فیلد را پر کنید"),
    nationalId: yup
      .string(" ورودی باید عدد باشد")
      .required(" فیلد را پر کنید")
      .min(10, "کد ملی که وارد کردید اشتباه است")
      .max(10, "کد ملی که وارد کردید اشتباه است"),
    password: yup
      .string()
      .password()
      .min(8, "رمز عبور باید حدقال 8 کارکتر داشته باشد")
      .required(" فیلد را پر کنید"),
  });

  const doSubmit = async (data) => {
    // Call the server

    // const resp = await register(this.state.data);
    // console.log("success" , resp.data.success)
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      phoneNumber,
      birthDate,
      nationalId,
    } = data;
    const userData = {
      fullName: firstName + "+" + lastName + "+" + userName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      nationalId: nationalId,
    };
    try {
      const response = await register(userData);
      toast.success(response.data.message[0].message);
      setTimeout(() => {
        this.props.history.replace("/logIn");
        window.location.reload();
      }, 7000);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        // const errors = { ...this.state.errors };
        // errors.fullName = ex.response.data.message[0].message;
        toast.error(ex.response.data.message[0].message);
        // this.setState({ errors });
        // console.log("messageError" , ex.response.datadata["message"][0]["message"])
      }
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        userName: "",
        PhoneNumber: "",
        birthday: "",
        email: "",
        nationalId: "",
        password: "",
      }}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => doSubmit(value)}
    >
      {({ errors, handleChange, touched }) => {
        return (
          <MDBContainer>
            <div className="row mt-5">
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
                        <strong>ثبت نام</strong>
                      </h3>
                    </div>
                    <Form>
                      <MDBInput
                        label="نام"
                        name="firstName"
                        // placeholder=""
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`form-control ${
                          errors.firstName && touched.firstName && "is-invalid"
                        }`}
                      />{" "}
                      {errors.firstName && touched.firstName && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.firstName}!
                        </span>
                      )}
                      <MDBInput
                        label="نام خانوادگی"
                        name="lastName"
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`form-control ${
                          errors.lastName && touched.lastName && "is-invalid"
                        }`}
                      />{" "}
                      {errors.lastName && touched.lastName && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.lastName}!
                        </span>
                      )}
                      <MDBInput
                        label="نام کاربری "
                        name="userName"
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`form-control ${
                          errors.userName && touched.userName && "is-invalid"
                        }`}
                      />{" "}
                      {errors.userName && touched.userName && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.userName}!
                        </span>
                      )}
                      <MDBInput
                        label="ایمیل"
                        name="email"
                        placeholder="email@email.com"
                        onChange={handleChange}
                        group
                        type="email"
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
                      <MDBInput
                        label="شماره موبایل"
                        name="PhoneNumber"
                        placeholder="0911***2233"
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`form-control ${
                          errors.PhoneNumber &&
                          touched.PhoneNumber &&
                          "is-invalid"
                        }`}
                      />{" "}
                      {errors.PhoneNumber && touched.PhoneNumber && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.PhoneNumber}!
                        </span>
                      )}
                      <MDBInput
                        label="رمز"
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
                      <MDBInput
                        label="شماره ملی"
                        name="nationalId"
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`form-control ${
                          errors.nationalId &&
                          touched.nationalId &&
                          "is-invalid"
                        }`}
                      />{" "}
                      {errors.nationalId && touched.nationalId && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.nationalId}!
                        </span>
                      )}
                      <MDBInput
                        label="تاریخ تولد"
                        name="birthday"
                        placeholder="1399/01/01"
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`form-control ${
                          errors.birthday && touched.birthday && "is-invalid"
                        }`}
                      />{" "}
                      {errors.birthday && touched.birthday && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.birthday}!
                        </span>
                      )}
                      <MDBRow className="d-flex align-items-center mb-4">
                        <div className="text-center mb-3 col-md-12">
                          <MDBBtn
                            color="success"
                            rounded
                            type="submit"
                            className="btn-block z-depth-1"
                          >
                            ثبت نام
                          </MDBBtn>
                        </div>
                      </MDBRow>
                    </Form>
                    <MDBCol md="12">
                      <Link
                        to="/logIn"
                        className="green-text ml-1 font-weight-bold"
                      >
                        ورود
                      </Link>
                    </MDBCol>
                  </div>
                </MDBCard>
              </div>
              <div className="col-lg-8">
                <img />
              </div>
            </div>
          </MDBContainer>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
