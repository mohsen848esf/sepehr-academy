import React from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Mail, Lock, Check, Facebook, Twitter, GitHub } from "react-feather";
import { history } from "../../history";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";

import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { RegisterEmployee } from "../../core/api/admin.api";
import { setItem, getItem } from "../../services/storage/storage";

import googleSvg from "../../assets/img/svg/google.svg";

import loginImg from "../../assets/img/pages/login.png";
import "../../assets/scss/pages/authentication.scss";

const Register = () => {
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    fullName: yup
      .string()
      .min(3, "نام کاربری حداقل باید 3 حرف باشد")
      .required("فیلد را پر کنید"),
    phoneNumber: yup
      .string(" ورودی این فیلد باید عدد باشد")
      .required(" فیلد را پر کنید")
      .min(11, "شماره باید 11 رقم باشد"),
    birthDate: yup
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
    address: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .max(50, "بیشتر از این نمیتوانید وارد کنید"),
    role: yup.string().required("نقش خود را انتخاب کنید"),
  });

  const doSubmit = async (data) => {
    const {
      fullName,
      phoneNumber,
      birthDate,
      email,
      nationalId,
      password,
      address,
      role,
    } = data;
    const userData = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      email: email,
      nationalId: nationalId,
      password: password,
      address: address,
      role: role,
    };
    try {
      const response = await RegisterEmployee(userData);
      toast.success(response.data.message[0].message);
      // this.props.history.replace("/admin/login");
      //   setTimeout(() => {
      //     window.location.reload();

      //   }, 7000);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message[0].message);
      }
    }
  };
  return (
    <Formik
      initialValues={{
        fullName: "",
        phoneNumber: "",
        birthDate: "",
        email: "",
        nationalId: "",
        password: "",
        address: "",
        role: "",
      }}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => doSubmit(value)}
    >
      {({ values, errors, handleChange, touched, setFieldValue }) => (
        <>
          <Row className="m-0 justify-content-center my-lg-4">
            <Col
              sm="8"
              xl="7"
              lg="10"
              md="8"
              className="d-flex justify-content-center"
            >
              <Card className="  rounded-0 mb-0 w-100">
                <Row className="m-0">
                  <Col lg="12" md="12" className="p-0">
                    <Form>
                      <Card className="rounded-0 mb-0 px-2">
                        <CardBody>
                          <h4>ثبت نام </h4>
                          <p style={{ margin: "20px 0" }}>
                            خوش امدید لطفا حساب کاربری بسازید
                          </p>
                          <Row>
                            <Col md="6" sm="12">
                              <FormGroup>
                                <Label for="fullName">نام کاربری </Label>
                                <Input
                                  type="text"
                                  defaultValue=""
                                  id="fullName"
                                  name="fullName"
                                  onChange={handleChange}
                                  placeholder="نام کاربری ..."
                                  className={`form-control ${
                                    errors.fullName &&
                                    touched.fullName &&
                                    "is-invalid"
                                  }`}
                                />
                                {errors.fullName && touched.fullName && (
                                  <span
                                    style={{ direction: "rtl" }}
                                    className="redError mb-2 danger"
                                  >
                                    {errors.fullName}!
                                  </span>
                                )}
                              </FormGroup>
                            </Col>
                            <Col md="6" sm="12">
                              <FormGroup>
                                <Label for="phoneNumber"> شماره همراه </Label>
                                <Input
                                  type="text"
                                  defaultValue=""
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  onChange={handleChange}
                                  placeholder="--------"
                                  className={`form-control ${
                                    errors.phoneNumber &&
                                    touched.phoneNumber &&
                                    "is-invalid"
                                  }`}
                                />
                                {errors.phoneNumber && touched.phoneNumber && (
                                  <span
                                    style={{ direction: "rtl" }}
                                    className="redError mb-2 danger"
                                  >
                                    {errors.phoneNumber}!
                                  </span>
                                )}
                              </FormGroup>
                            </Col>

                            <Col md="6" sm="12">
                              <FormGroup>
                                <Label for="birthDate">تاریخ تولد </Label>
                                <Input
                                  type="text"
                                  defaultValue=""
                                  id="birthDate"
                                  name="birthDate"
                                  onChange={handleChange}
                                  placeholder=" 1399/12/23"
                                  className={`form-control ${
                                    errors.birthDate &&
                                    touched.birthDate &&
                                    "is-invalid"
                                  }`}
                                />
                                {errors.birthDate && touched.birthDate && (
                                  <span
                                    style={{ direction: "rtl" }}
                                    className="redError mb-2 danger"
                                  >
                                    {errors.birthDate}!
                                  </span>
                                )}
                              </FormGroup>
                            </Col>
                            <Col md="6" sm="12">
                              <FormGroup>
                                <Label for="email"> ایمیل </Label>
                                <Input
                                  type="email"
                                  defaultValue=""
                                  id="email"
                                  name="email"
                                  onChange={handleChange}
                                  placeholder="email@email.com"
                                  className={`form-control ${
                                    errors.email &&
                                    touched.email &&
                                    "is-invalid"
                                  }`}
                                />
                                {errors.email && touched.email && (
                                  <span
                                    style={{ direction: "rtl" }}
                                    className="redError mb-2 danger danger"
                                  >
                                    {errors.email}!
                                  </span>
                                )}
                              </FormGroup>
                            </Col>
                            <Col md="6" sm="12">
                              <FormGroup>
                                <Label for="password"> رمز عبور </Label>
                                <Input
                                  type="password"
                                  defaultValue=""
                                  id="password"
                                  name="password"
                                  onChange={handleChange}
                                  placeholder="رمز عبور را وارد کنید ..."
                                  className={`form-control ${
                                    errors.password &&
                                    touched.password &&
                                    "is-invalid"
                                  }`}
                                />
                                {errors.password && touched.password && (
                                  <span
                                    style={{ direction: "rtl" }}
                                    className="redError mb-2 danger danger"
                                  >
                                    {errors.password}!
                                  </span>
                                )}
                              </FormGroup>
                            </Col>

                            <Col md="6" sm="12">
                              <FormGroup>
                                <Label for="nationalId"> شماره ملی </Label>
                                <Input
                                  type="text"
                                  defaultValue=""
                                  id="nationalId"
                                  name="nationalId"
                                  onChange={handleChange}
                                  placeholder="--------"
                                  className={`form-control ${
                                    errors.nationalId &&
                                    touched.nationalId &&
                                    "is-invalid"
                                  }`}
                                />
                                {errors.nationalId && touched.nationalId && (
                                  <span
                                    style={{ direction: "rtl" }}
                                    className="redError mb-2 danger danger"
                                  >
                                    {errors.nationalId}!
                                  </span>
                                )}
                              </FormGroup>
                            </Col>
                            <Col md="6" sm="12">
                              <FormGroup>
                                <Label for="role">انتخاب نقش </Label>
                                <Input
                                  type="select"
                                  search
                                  selected=" استاد را انتخاب کنید "
                                  name="role"
                                  id="role"
                                  onChange={(event) =>
                                    setFieldValue("role", event.target.value)
                                  }
                                  className={`form-control ${
                                    errors.role && touched.role && "is-invalid"
                                  }`}
                                >
                                  <option>نقش را انتخاب کنید</option>
                                  <option value="admin"> ادمین </option>
                                  <option value="teacher"> استاد</option>
                                  <option value="employee"> کارمند</option>
                                </Input>
                                {errors.role && touched.role && (
                                  <span
                                    style={{ direction: "rtl" }}
                                    className="redError mb-2 danger"
                                  >
                                    {errors.role}!
                                  </span>
                                )}
                              </FormGroup>
                            </Col>
                            <Col md="12" sm="12">
                              <FormGroup>
                                <Label for="address"> آدرس </Label>
                                <Input
                                  type="textarea"
                                  defaultValue=""
                                  id="address"
                                  name="address"
                                  onChange={handleChange}
                                  placeholder="--------"
                                  className={`form-control ${
                                    errors.address &&
                                    touched.address &&
                                    "is-invalid"
                                  }`}
                                />
                                {errors.address && touched.address && (
                                  <span
                                    style={{ direction: "rtl" }}
                                    className="redError mb-2 danger danger"
                                  >
                                    {errors.address}!
                                  </span>
                                )}
                              </FormGroup>
                            </Col>
                          </Row>
                          <div className="d-flex justify-content-between">
                            <Button.Ripple type="submit" color="success">
                              ثبت نام
                            </Button.Ripple>
                            <Button.Ripple color="primary" outline>
                              <Link to="/admin/login"> وارد شوید </Link>
                            </Button.Ripple>
                          </div>
                        </CardBody>
                      </Card>
                    </Form>
                  </Col>
                  {/* <Col
                    lg="6"
                    className="d-lg-block d-none text-center align-self-center px-1 py-0"
                  >
                    <img src={loginImg} alt="loginImg" />
                  </Col> */}
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Formik>
  );
};
export default Register;
