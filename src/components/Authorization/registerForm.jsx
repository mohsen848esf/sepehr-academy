import React, { Fragment } from "react";
import Joi from "joi-browser";
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    fullName: yup
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
    const {
      fullName,
      email,
      password,
      phoneNumber,
      birthDate,
      nationalId,
    } = data;
    const userData = {
      fullName: fullName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      nationalId: nationalId,
    };
    try {
      const response = await register(userData);
      toast.success(response.data.message[0].message);
      history.push("/login");
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
      }
    }
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
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
          <MDBContainer className="d-flex justify-content-center">
            <div className="d-flex bg-white justify-content-between mt-5 register_Form">
              <div className="ml-4 mt-4">
                <MDBCard
                  className="card-image register-FormCard "
                  style={{
                    // backgroundImage:
                    //   "url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)",
                    width: "28rem",
                  }}
                >
                  <div className="text-white register-textBox py-5 px-5 box-shadow-1">
                    <div className="text-center">
                      <h3 className="white-text mb-3 mt-2 font-weight-bold">
                        <strong>ثبت نام</strong>
                      </h3>
                    </div>
                    <Form>
                      <MDBInput
                        label="نام کاربری "
                        name="fullName"
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`white-text form-control ${
                          errors.fullName && touched.fullName && "is-invalid"
                        }`}
                      />{" "}
                      {errors.fullName && touched.fullName && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.fullName}!
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
                        label="شماره موبایل"
                        name="PhoneNumber"
                        placeholder="0911***2233"
                        onChange={handleChange}
                        group
                        type="text"
                        validate
                        labelClass="white-text"
                        className={`white-text form-control ${
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
                        className={`white-text form-control ${
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
                        className={`white-text form-control ${
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
                        className={`white-text form-control ${
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
                      <MDBRow className="d-flex align-items-center mb-3">
                        <div className="text-center mb-2 col-md-12">
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
              <div className="mr-4 register-FormImge">
                <img
                  src={
                    require("../../assets/images/pages/landingPage/sign-up/Mobilelogin.gif")
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

export default RegisterForm;
