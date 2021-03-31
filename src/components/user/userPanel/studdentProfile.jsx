import React, { Fragment, useEffect, useState } from "react";
import { Form, Formik } from "formik";
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
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";

import { toast } from "react-toastify";
import { UpdateStudent, getStudentById } from "../../../services/student.api";
import { getUserID } from "../../../services/storage/storage";
import {
  Edit2,
  Menu,
  X,
  Check,
  Lock,
  Mail,
  Facebook,
  Plus,
  Edit3,
} from "react-feather";
import {
  setItem,
  getCurrentUser,
  postCurrentUser,
} from "../../../services/storage/storage";

import coverImg from "../../../assets/img/profile/user-uploads/cover.jpg";
// import coverImg from "../../../assets/img/pages/card-image-5.jpg";
import profileImg from "../../../assets/img/profile/pages/page-01.jpg";
import "./StudentProfile.css";
const StuddentProfile = () => {
  const [isOpen, setisOpen] = useState(false);
  const [StudentData, setStudentData] = useState({});

  //   const studentId = getUserID();
  const getStudentInformation = () => {
    const studentData = getCurrentUser();
    // const studentData = await getStudentById(studentId);
    // console.log(studentData);
    setStudentData(studentData);
  };
  useEffect(() => {
    getStudentInformation();
  }, []);
  const { fullName, email, birthDate, phoneNumber, nationalId } = StudentData;
  const toggle = () => {
    setisOpen(!isOpen);
  };

  const yup = require("yup");
  require("yup-password")(yup);
  const Validate = yup.object().shape({
    fullName: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .min(3, " نام کاربری باید بیشتر از ۳ حرف باشد"),
    phoneNumber: yup
      .string("فرمت ورودی این فیلد باید عدد باشد")
      .min(11)
      .max(11)
      .required(" فیلدرا پرکنید "),
    birthDate: yup.string().min(10).max(10).required(" فیلدرا پرکنید "),
    email: yup
      .string("فرمت باید ایمیل باشد ")
      .email()
      .required(" فیلدرا پرکنید "),
    nationalId: yup
      .string("فرمت ورودی این فیلد باید عدد باشد")
      .min(10)
      .max(10)
      .required(" فیلدرا پرکنید "),
  });
  const userData = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    birthDate: birthDate,
    email: email,
    nationalId: nationalId,
  };
  const doSubmit = async (data) => {
    const studentData = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      birthDate: data.birthDate,
      email: data.email,
      nationalId: data.nationalId,
    };
    try {
      const response = await UpdateStudent(StudentData._id, studentData);
      toast.success(response.data.message[0].message);
      setStudentData(studentData);
      //   setOpenComponent(!openComponent);
      //   {
      //     <Redirect to="/admin" />;
      //   }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message["message"][0].message);
      }
    }
  };
  const resetData = () => {
    // setOpenComponent(!openComponent);
  };
  return (
    <Formik
      initialValues={userData}
      validationSchema={Validate}
      enableReinitialize={true}
      onSubmit={(value) => doSubmit(value)}
    >
      {({ values, errors, handleChange, touched }) => {
        return (
          <div className="profile-header mb-2">
            <div className="position-relative studentProfile-images-box">
              <div className="cover-container studentProfile-BigImg-box">
                <img
                  src={coverImg}
                  alt="CoverImg"
                  className="img-fluid bg-cover w-100 rounded-0"
                />
              </div>
              <div className="profile-img-container d-flex align-items-center justify-content-between studentProfile-SmallImg-box">
                <img
                  src={profileImg}
                  alt="porfileImg"
                  className="img-fluid img-border rounded-circle box-shadow-1"
                />
                <div className="float-right">
                  <Button
                    color="orange"
                    className="btn-icon rounded-circle mr-1"
                  >
                    <Edit2 size={17} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center profile-header-nav"></div>
            <div className="row studentProfile-content">
              <Col sm="12" md="12" className="studentProfile-contentCol">
                <Card className="studentProfile-contentCol-Card">
                  <CardBody>
                    <Form>
                      <Row>
                        <Col md="6" sm="6">
                          <FormGroup>
                            <Label for="fullName">نام کاربری </Label>
                            <Input
                              type="text"
                              defaultValue={userData.fullName}
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
                        <Col md="6" sm="6">
                          <FormGroup>
                            <Label for="phoneNumber"> شماره همراه </Label>
                            <Input
                              type="text"
                              defaultValue={userData.phoneNumber}
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

                        <Col md="6" sm="6">
                          <FormGroup>
                            <Label for="birthDate">تاریخ تولد </Label>
                            <Input
                              type="text"
                              defaultValue={userData.birthDate}
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
                        <Col md="6" sm="6">
                          <FormGroup>
                            <Label for="email"> ایمیل </Label>
                            <Input
                              type="text"
                              defaultValue={userData.email}
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

                        <Col md="6" sm="6">
                          <FormGroup>
                            <Label for="nationalId"> شماره ملی </Label>
                            <Input
                              type="text"
                              defaultValue={userData.nationalId}
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
                        <Col
                          md="6"
                          className="studentProfile-BtnCol d-flex justify-content-lg-end"
                          sm="6"
                        >
                          <Button.Ripple
                            onClick={() => resetData()}
                            className="mr-1 studentProfile-Btn"
                            color="danger"
                          >
                            <Plus size={15} />

                            <span className="align-middle ml-50 studentProfile-Btn-title">
                              لغو
                            </span>
                          </Button.Ripple>
                          <Button.Ripple
                            type="submit"
                            className="mr-1 studentProfile-Btn"
                            color="success"
                          >
                            <Plus size={15} />

                            <span className="align-middle ml-50 studentProfile-Btn-title">
                              ثبت تغییرات
                            </span>
                          </Button.Ripple>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default StuddentProfile;
