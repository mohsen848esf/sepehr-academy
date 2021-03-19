import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Mail, Lock, Check, Facebook, Twitter, GitHub } from "react-feather";
import { history } from "../../history";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";

import Forms from "../../components/layout/form";
import { Link } from "react-router-dom";
import { RegisterEmployee } from "../../core/api/admin.api";
import { setItem, getItem } from "../../services/storage/storage";

import googleSvg from "../../assets/img/svg/google.svg";

import loginImg from "../../assets/img/pages/login.png";
import "../../assets/scss/pages/authentication.scss";

class Login extends Forms {
  state = {
    activeTab: "1",
    data: {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      birthDate: "",
      email: "",
      nationalId: "",
      password: "",
      address: "",
      role: "",
    },
    errors: {},
  };
  schema = {
    firstName: Joi.string().required().label("نام "),
    lastName: Joi.string().required().label("نام خانوادگی"),
    userName: Joi.string().required().label("نام کاربری"),
    phoneNumber: Joi.string().required().label("شماره همراه"),
    birthDate: Joi.string().required().label("تاریخ تولد"),
    email: Joi.string().required().label("ایمیل"),
    nationalId: Joi.string().required().label("شماره ملی"),
    password: Joi.string().required().label("رمز عبور"),
    address: Joi.string().required().label("آدرس"),
    role: Joi.string().required().label("نوع کاربر"),
  };
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };
  doSubmit = async () => {
    const {
      firstName,
      lastName,
      userName,
      phoneNumber,
      birthDate,
      email,
      nationalId,
      password,
      address,
      role,
    } = this.state.data;
    const userData = {
      fullName: firstName + "+" + lastName + "+" + userName,
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
      this.props.history.replace("/admin/login");
      //   setTimeout(() => {
      //     window.location.reload();

      //   }, 7000);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message[0].message);
      }
    }
  };
  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2">
                  <CardBody>
                    <h4>قبت نام </h4>
                    <p style={{ margin: "20px 0" }}>
                      خوش امدید لطفا حساب کاربری بسازید
                    </p>
                    <Form onSubmit={this.handleSubmit}>
                      {this.renderInput("firstName", "نام ")}
                      {this.renderInput("lastName", "نام خانوادگی ")}
                      {this.renderInput("userName", "نام کاربری ")}
                      {this.renderInput(
                        "phoneNumber",
                        "شماره همراه",
                        "tel",
                        "09110001122"
                      )}
                      {this.renderInput(
                        "birthDate",
                        "تاریخ تولد",
                        "text",
                        "0000/00/00",
                        "Mail"
                      )}
                      {this.renderInput(
                        "email",
                        "ایمیل",
                        "email",
                        "example@gmail.com"
                      )}
                      {this.renderInput("nationalId", "شماره ملی", "text")}
                      {this.renderInput(
                        "password",
                        "رمز عبور",
                        "password",
                        "Lock"
                      )}
                      {this.renderInput("address", "آدرس ")}
                      {this.renderInput("role", "نوع کاربر ")}
                      {this.renderButton("ثبت نام")}
                      <div className="d-flex justify-content-between">
                        <Button.Ripple color="primary" outline>
                          <Link to="/admin/login"> وارد شوید </Link>
                        </Button.Ripple>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-1 py-0"
              >
                <img src={loginImg} alt="loginImg" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Login;
