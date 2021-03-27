import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

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
import { LogInEmployee } from "../../core/api/admin.api";
import { setItem, getItem } from "../../services/storage/storage";

import googleSvg from "../../assets/img/svg/google.svg";

import loginImg from "../../assets/img/pages/login.png";
import "../../assets/scss/pages/authentication.scss";

const Login = () => {
  const yup = require("yup");
  require("yup-password")(yup);

  const Validate = yup.object().shape({
    email: yup
      .string()
      .min(13)
      .email(" ایمیلی که وارد کرده اید اشتباه است")
      .required(" فیلد را پر کنید"),
    password: yup.string().password().min(8).required(" فیلد را پر کنید"),
  });

  const doSubmit = async (data) => {
    const { email, password } = data;
    const userData = {
      email: email,
      password: password,
    };
    try {
      const response = await LogInEmployee(userData);
      toast.success(response.data.message[0].message);
      // const user =  response.data.result.studentModel
      // این قسمت دیشب  15 اسفند تغییر دادی
      setItem("token", response.data.result.jwtToken);
      // const userData = Object.assign({ firstName: '', lastName: '' } , response.data.result.studentModel)
      // console.log(userData)
      setItem("user", response.data.result);
      const decode = jwt_decode(response.data.result.jwtToken);
      setItem("role", decode.role);
      // this.props.history.replace("/");
      // setTimeout(() => {
      //   window.location.reload();

      // }, 7000);
      //
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        // const errors = { ...this.state.errors };
        // errors.email = ex.response.data.message["message"][0].message;
        // if (ex.response.data.message[0].message) {
        //   toast.error(ex.response.data.message[0].message)
        // } else {
        toast.error(ex.response.data.message["message"][0].message);

        // }

        // this.setState({ errors });
        // console.log("messageError" , ex.response.datadata["message"][0]["message"])
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
        <Row className="m-0 justify-content-center my-lg-4">
          <Col
            sm="8"
            xl="5"
            lg="10"
            md="8"
            className="d-flex justify-content-center"
          >
            <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
              <Row className="m-0">
                <Col lg="12" md="12" className="p-0">
                  <Card className="rounded-0 mb-0 px-2">
                    <CardBody>
                      <Form>
                        <Row className="d-flex justify-content-center">
                          <Col md="12" sm="12">
                            <h4 className="text-center">ورود</h4>
                            <p
                              className="text-center"
                              style={{ margin: "20px 0" }}
                            >
                              خوش امدید لطفا وارد حساب شوید
                            </p>
                          </Col>
                          <Col md="10" sm="12">
                            <FormGroup>
                              <Label for="email"> ایمیل </Label>
                              <Input
                                type="text"
                                defaultValue=""
                                id="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="email@email.com"
                                className={`form-control ${
                                  errors.email && touched.email && "is-invalid"
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
                          <Col md="10" sm="12">
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
                          <Col md="10" sm="12">
                            {" "}
                            <FormGroup className="d-flex justify-content-between align-items-center">
                              <div className="float-right">
                                <Link to="/forgetPassword">
                                  {" "}
                                  فراموشی رمز عبور{" "}
                                </Link>
                              </div>
                            </FormGroup>
                          </Col>
                        </Row>
                        <div className="d-flex justify-content-between">
                          <Button.Ripple type="submit" color="success">
                            ورود
                          </Button.Ripple>
                          <Button.Ripple color="primary" outline>
                            <Link to="/admin/register"> ثبت نام کنید</Link>
                          </Button.Ripple>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
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
      )}
    </Formik>
  );
};
export default Login;
