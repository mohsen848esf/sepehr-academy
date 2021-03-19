import React, { Fragment, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { useHistory, Redirect } from "react-router-dom";
import {
  Media,
  Row,
  Col,
  Button,
  Input,
  Label,
  FormGroup,
  Table,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
} from "reactstrap";
import userImg from "../../../assets/images/pages/landingPage/62.jpg";

import { toast } from "react-toastify";
import { UpdateStudent } from "../../../services/AuthService";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check, Lock, Mail, Facebook, Plus } from "react-feather";
import { set } from "lodash";

const ProfileForm = ({
  studentInfo,
  setStudentData,
  openComponent,
  setOpenComponent,
}) => {
  const [Data, setData] = useState({});
  console.log(studentInfo);

  const yup = require("yup");
  require("yup-password")(yup);
  const Validate = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "نام  باید بیشتر از ۳حرف باشد   ")
      .required(" فیلدرا پرکنید "),
    lastName: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .min(3, " نام خانوادگی باید بیشتر از ۳حرف باشد   "),
    userName: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .max(3, " نام کاربری باید بیشتر از ۳ حرف باشد"),
    phoneNumber: yup
      .string("فرمت ورودی این فیلد باید عدد باشد")
      .min(11)
      .max(11)
      .required(" فیلدرا پرکنید "),
    birthDate: yup.string().min(10).max(10).required(" فیلدرا پرکنید "),
    email: yup.string().email().required(" فیلدرا پرکنید "),
    nationalId: yup
      .string("فرمت ورودی این فیلد باید عدد باشد")
      .min(10)
      .max(10)
      .required(" فیلدرا پرکنید "),
  });
  const studentName = studentInfo.fullName && studentInfo.fullName.split("+");
  const userData = {
    firstName: studentName && studentName.length === 3 ? studentName[0] : "",
    lastName:
      studentName && studentName && studentName.length === 3
        ? studentName[1]
        : "",
    userName:
      studentName && studentName.length === 3 ? studentName[2] : studentName[0],
    phoneNumber: studentInfo && studentInfo.phoneNumber,
    birthDate: studentInfo && studentInfo.birthDate,
    email: studentInfo && studentInfo.email,
    nationalId: studentInfo && studentInfo.nationalId,
  };
  useEffect(() => {
    setData(userData);
  }, []);
  const doSubmit = async (data) => {
    const studentData = {
      fullName: data.firstName + "+" + data.lastName + "+" + data.userName,
      phoneNumber: data.phoneNumber,
      birthDate: data.birthDate,
      email: data.email,
      nationalId: data.nationalId,
    };
    try {
      const response = await UpdateStudent(studentInfo._id, studentData);
      toast.success(response.data.message[0].message);
      setStudentData(studentData);
      setOpenComponent(!openComponent);
      //   {
      //     <Redirect to="/admin" />;
      //   }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message["message"][0].message);
      }
    }
  };
  const closeComponentEdit = () => {
    setOpenComponent(!openComponent);
  };
  return (
    <Formik
      initialValues={Data}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => doSubmit(value)}
    >
      {({ values, errors, handleChange, touched }) => {
        return (
          <Fragment>
            {" "}
            <Form>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <CardTitle>پروفایل دانشجو</CardTitle>
                  </CardHeader>

                  <CardBody>
                    <Row className="mx-0" col="12">
                      <Col className="pl-0" sm="12">
                        <Media className="d-sm-flex d-block">
                          <Media className="mt-md-1 mt-0" left>
                            <Media
                              className="rounded mr-2"
                              object
                              src={userImg}
                              alt="Generic placeholder image"
                              height="112"
                              width="112"
                            />
                          </Media>
                          <Media body>
                            <Row>
                              <Col sm="9" md="6" lg="5">
                                <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold ml-2">
                                      <FormGroup>
                                        <Label for="firstName">نام </Label>
                                        <Input
                                          type="text"
                                          defaultValue=""
                                          id="firstName"
                                          name="firstName"
                                          onChange={handleChange}
                                          placeholder="نام  ..."
                                        />
                                        {errors.firstName && touched.firstName && (
                                          <h5
                                            style={{ direction: "rtl" }}
                                            className="redError mb-2"
                                          >
                                            {errors.firstName}!
                                          </h5>
                                        )}
                                      </FormGroup>
                                    </div>
                                  </div>
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      <FormGroup>
                                        <Label for="lastName">
                                          نام خانوادگی{" "}
                                        </Label>
                                        <Input
                                          type="text"
                                          defaultValue=""
                                          id="lastName"
                                          name="lastName"
                                          onChange={handleChange}
                                          placeholder="نام خانوادگی  ..."
                                        />
                                        {errors.lastName && touched.lastName && (
                                          <h5
                                            style={{ direction: "rtl" }}
                                            className="redError mb-2"
                                          >
                                            {errors.lastName}!
                                          </h5>
                                        )}
                                      </FormGroup>
                                    </div>
                                  </div>
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      <FormGroup>
                                        <Label for="userName">
                                          نام کاربری{" "}
                                        </Label>
                                        <Input
                                          type="text"
                                          id="userName"
                                          name="userName"
                                          onChange={handleChange}
                                          placeholder="نام کاربری  ..."
                                        />
                                        {errors.userName && touched.userName && (
                                          <span
                                            style={{ direction: "rtl" }}
                                            className="redError mb-2 danger"
                                          >
                                            {errors.userName}!
                                          </span>
                                        )}
                                      </FormGroup>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md="12" lg="5">
                                <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      وضعیت :
                                    </div>
                                    <div className="px-3">
                                      {studentInfo.isActive === true
                                        ? "فعال"
                                        : "غیرفعال"}
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Media>
                        </Media>
                      </Col>
                    </Row>
                  </CardBody>
                  {/* <ProfileForm
              studentIfo={studentData}
              handleSetInfo={setStudentData}
            /> */}
                </Card>
              </Col>
              <Col sm="12" md="12">
                <Card>
                  <CardHeader>
                    <CardTitle>مشخصات دانشجو</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="users-page-view-table">
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          <FormGroup>
                            <Label for="birthDate"> تاریخ تولد </Label>
                            <Input
                              type="text"
                              defaultValue=""
                              id="birthDate"
                              name="birthDate"
                              onChange={handleChange}
                              placeholder="تاریخ تولد   ..."
                            />
                            {errors.birthDate && touched.birthDate && (
                              <h5
                                style={{ direction: "rtl" }}
                                className="redError mb-2"
                              >
                                {errors.birthDate}!
                              </h5>
                            )}
                          </FormGroup>
                        </div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          <FormGroup>
                            <Label for="phoneNumber"> شماره همراه </Label>
                            <Input
                              type="text"
                              defaultValue=""
                              id="phoneNumber"
                              name="phoneNumber"
                              onChange={handleChange}
                              placeholder="شماره همراه   ..."
                            />
                            {errors.phoneNumber && touched.phoneNumber && (
                              <h5
                                style={{ direction: "rtl" }}
                                className="redError mb-2"
                              >
                                {errors.phoneNumber}!
                              </h5>
                            )}
                          </FormGroup>
                        </div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          <FormGroup>
                            <Label for="email"> ایمیل </Label>
                            <Input
                              type="text"
                              defaultValue=""
                              id="email"
                              name="email"
                              onChange={handleChange}
                              placeholder="ایمیل    ..."
                            />
                            {errors.email && touched.email && (
                              <h5
                                style={{ direction: "rtl" }}
                                className="redError mb-2"
                              >
                                {errors.email}!
                              </h5>
                            )}
                          </FormGroup>
                        </div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          <FormGroup>
                            <Label for="nationalId"> شماره ملی </Label>
                            <Input
                              type="text"
                              defaultValue=""
                              id="nationalId"
                              name="nationalId"
                              onChange={handleChange}
                              placeholder="شماره ملی    ..."
                            />
                            {errors.nationalId && touched.nationalId && (
                              <h5
                                style={{ direction: "rtl" }}
                                className="redError mb-2"
                              >
                                {errors.nationalId}!
                              </h5>
                            )}
                          </FormGroup>
                        </div>
                      </div>
                      {/* <div className="d-flex user-info">
                      <div className="text-truncate">
                        <span className="px-3">
                          {" "}
                          {terms && terms.length} از {AlltermLength}
                        </span>
                      </div>
                    </div>
                   */}
                    </div>
                    <Col
                      className="mt-1 pl-0 d-flex justify-content-lg-end"
                      sm="12"
                    >
                      <Button.Ripple
                        onClick={() => closeComponentEdit()}
                        className="mr-1"
                        color="danger"
                        outline
                      >
                        <Plus size={15} />

                        <span className="align-middle ml-50">لغو</span>
                      </Button.Ripple>
                      <Button.Ripple
                        type="submit"
                        className="mr-1"
                        color="danger"
                        outline
                      >
                        <Plus size={15} />

                        <span className="align-middle ml-50">ثبت تغییرات</span>
                      </Button.Ripple>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            </Form>
          </Fragment>
        );
      }}
    </Formik>
  );
};

export default ProfileForm;
