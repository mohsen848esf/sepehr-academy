import React, { Component, Fragment } from 'react';
import Joi from "joi-browser";

import Form from "../../layout/form";
import '../../../assets/css/manual/user/EditProfile.css';
import { setItem, getCurrentUser, postCurrentUser } from '../../../services/storage/storage';
import {UpdateStudent} from '../../../services/AuthService'
import { toast } from 'react-toastify';
class EditProfile extends Form {
  state = {
    // data: {
    //   firstName: '',
    //   lastName: '',
    //   userName: '',
    //   email: '',
    //   phoneNumber: '',
    //   birthDate: '',
    //   nationalId: ''
    // },
    data: {},
    errors: '',
  }
  schema = {
    firstName: Joi.string()
    .required()
    .label("نام "),
    lastName: Joi.string()
    .required()
    .label("نام خانوادگی"),
    userName: Joi.string()
    .required()
    .label("نام کاربری"),
    email: Joi.string()
    .required()
    .email()
    .label("ایمیل"),
    phoneNumber: Joi.string()
    .required()
    .min(11)
    .max(11)
    .label("شماره همراه"),
    birthDate: Joi.string()
    .required()
    .min(10)
    .max(10)
    .label("تاریخ تولد"),
    nationalId: Joi.string()
    .required()
    .min(10)
    .max(10)
    .label("شماره ملی"),
    // .number().pattern([0-9]{3}-[0-9]{2}-[0-9]{3}),
  };
  getUser = () => {
    const data = getCurrentUser();
    const {fullName ,email ,password , phoneNumber , birthDate , nationalId } = data
    const userData = {
      firstName: fullName.split('+')[0],
      lastName: fullName.split('+')[1],
      userName: fullName.split('+')[3],
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      nationalId: nationalId
    }
    
    this.setState({ data : userData })
  }
  componentDidMount() {
    this.getUser();
  }
  doSubmit = async () => {
    // Call the server
    // const resp = await register(this.state.data);
    // console.log("success" , resp.data.success)
      const {firstName , lastName , userName ,email ,password , phoneNumber , birthDate , nationalId } = this.state.data
      const userData = {
        fullName: firstName + "+" + lastName+ "+" + userName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        birthDate: birthDate,
        nationalId: nationalId
      }
      UpdateStudent(userData);
      toast.success("اطلاعات  تغییر یاف.")
      // this.props.history.replace("/userPanel");
      setTimeout(() => {
        window.location.reload();
      }, 7000);
      // toast.error("خطایی رخ داده است دوباره امتحان کنید")
      
  };
  
  render() {
    const { selectedTab } = this.props;
        return (
            <Fragment>
                  <div className={selectedTab["_id"] === "edit-profile" ? "tab-pane fade editProfile-panel show active":"tab-pane fade editProfile-panel"} id="v-pills-editProfile" role="tabpanel" aria-labelledby="v-pills-editProfile-tab">                
                      {/* <div className="container"> */}
                          <form onSubmit={this.handleSubmit} className="container editProfileFporm ">
                            <div className="row ">
                            <h1 className="title text-center">ثبت نام </h1>
                            {this.renderInput("firstName", "نام ")}
                            {this.renderInput("lastName", "نام خانوادگی")}
                            {this.renderInput("userName", " نام کاربری")}
                            {this.renderInput("email", "ایمیل" , "email" , "example@gmail.com")}
                            {this.renderInput("phoneNumber", "شماره همراه" , "tel" , "09110001122")}
                            {this.renderInput("birthDate", "تاریخ تولد" , "text" , "0000/00/00")}
                            {this.renderInput("nationalId", "شماره ملی", "text")}
                  {this.renderButton("ثبت ", "secondary btn-success")}
                            </div>
                          </form>
                  <button onClick={this.log}></button>
                            {/* <div className="col-lg-12 editprofilImg">
                              <div className="text-center Image  ">
                                <img src={userImage} className="avatar img-circle" alt="avatar"/>
                                
                                <div className="">
                                <button className="btn btn-primary" type="button">
                                  <span>تغییر عکس </span>
                                </button>
                                </div>
                              </div>
                            </div> */}


                        
                    </div>
                  {/* </div> */}

            </Fragment>
        )
    }
}

export default EditProfile
