import React from "react"
import Joi  from "joi-browser";
import { toast } from 'react-toastify'
import jwt_decode from 'jwt-decode';

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
  
} from "reactstrap"
import { Mail, Lock, Check, Facebook, Twitter, GitHub } from "react-feather"
import { history } from "../../history"
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy"

import Forms from "../../components/layout/form";
import { Link } from 'react-router-dom'
import {LogInEmployee} from '../../core/api/admin.api'
import { setItem, getItem } from '../../services/storage/storage'

import googleSvg from "../../assets/img/svg/google.svg"

import loginImg from "../../assets/img/pages/login.png"
import "../../assets/scss/pages/authentication.scss"


class Login extends Forms {
  state = {
    activeTab: "1",
    data: { email : "", password: ""},
    errors: {}
    
  }
  schema = {
    email: Joi.string()
      .required()
      .label("ایمیل"),
    password: Joi.string()
      .required()
      .label("رمز عبور")
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }
  doSubmit = async () => {
    try {
      const response = await LogInEmployee(this.state.data);
      toast.success(response.data.message[0].message)
      // const user =  response.data.result.studentModel
      // این قسمت دیشب  15 اسفند تغییر دادی
      setItem("token", response.data.result.jwtToken);
      // const userData = Object.assign({ firstName: '', lastName: '' } , response.data.result.studentModel) 
      // console.log(userData)
      setItem("user", response.data.result);
      const decode = jwt_decode(response.data.result.jwtToken)
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
          toast.error(ex.response.data.message["message"][0].message)
          
        // }

        // this.setState({ errors });
        // console.log("messageError" , ex.response.datadata["message"][0]["message"])
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
                        <h4>ورود</h4>
                    <p style={{ margin: "20px 0" }} >خوش امدید لطفا وارد حساب شوید</p>
                                    {/* <form onSubmit={this.handleSubmit} className=" container loginForm " >
                  <h1 className="title text-center">ورود</h1>
                  {this.renderInput("email", "ایمیل","email" , "example@gmail.com")}
                  {this.renderInput("password", "رمز عبور", "password")}
                  {this.renderButton("ورود" )}
                  <Link to="/forgetPassword"> فراموشی رمز عبور </Link>
                  <Link to="/register"> ثبت نام کنید</Link>
                </form> */}
                      <Form  onSubmit={this.handleSubmit}  >
                          {this.renderInput("email", "ایمیل","email" , "example@gmail.com" , "Mail")}
                          {this.renderInput("password", "رمز عبور", "password" , "رمز عبور" , "Lock")}
                          <div className="d-flex justify-content-between">
                            <Button.Ripple color="primary" outline>
                              <Link to="/register"> ثبت نام کنید</Link>
                            </Button.Ripple>
                          </div>    
                              {this.renderButton("ورود")}
                            <FormGroup className="d-flex justify-content-between align-items-center">
                            <div className="float-right">
                              <Link to="/forgetPassword"> فراموشی رمز عبور </Link>
                            </div>
                          </FormGroup>
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
    )
  }
}
export default Login
