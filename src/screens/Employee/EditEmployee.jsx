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
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";

import userImg from "../../assets/images/pages/landingPage/62.jpg";

import { toast } from "react-toastify";
import { UpdateEmployeeInformation } from "../../services/Employee.api";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check, Lock, Mail, Facebook, Plus, Edit3 } from "react-feather";
import { set } from "lodash";

const ProfileForm = ({
  employeeInfo,
  setEmployeeInfo,
  openComponent,
  setOpenComponent,
}) => {
  const [activeTab, setActiveTab] = useState("1");

  const [Data, setData] = useState({});
  //   console.log(employeeInfo);

  const yup = require("yup");
  require("yup-password")(yup);
  const Validate = yup.object().shape({
    fullName: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .min(3, " نام کاربری باید بیشتر از ۳ حرف باشد"),
    address: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .max(50, "بیشتر از این نمیتوانید وارد کنید"),
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
  const employeeData = {
    fullName: employeeInfo && employeeInfo.fullName,
    phoneNumber: employeeInfo && employeeInfo.phoneNumber,
    birthDate: employeeInfo && employeeInfo.birthDate,
    email: employeeInfo && employeeInfo.email,
    nationalId: employeeInfo && employeeInfo.nationalId,
    address: employeeInfo && employeeInfo.address,
  };
  useEffect(() => {
    setData(employeeData);
  }, []);
  const doSubmit = async (data) => {
    const employeeData = {
      fullName: data.fullName,
      phoneNumber: data.phoneNumber,
      birthDate: data.birthDate,
      email: data.email,
      nationalId: data.nationalId,
      address: data.address,
    };
    try {
      const response = await UpdateEmployeeInformation(
        employeeInfo._id,
        employeeData
      );
      toast.success("اطلاعات کارمند با موفقیت ویرایش شد");
      setEmployeeInfo(employeeData);
      setOpenComponent(!openComponent);
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
            <Col sm="12" md="12">
              <Card>
                <CardHeader>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "1",
                        })}
                      >
                        <Edit3 size={16} />
                        <span className="align-middle ml-50">
                          ویرایش پروفایل
                        </span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6" sm="12">
                        <FormGroup>
                          <Label for="fullName">نام کاربری </Label>
                          <Input
                            type="text"
                            defaultValue={employeeData.fullName}
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
                            defaultValue={employeeData.phoneNumber}
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
                            defaultValue={employeeData.birthDate}
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
                            type="text"
                            defaultValue={employeeData.email}
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

                      <Col md="6" sm="12">
                        <FormGroup>
                          <Label for="nationalId"> شماره ملی </Label>
                          <Input
                            type="text"
                            defaultValue={employeeData.nationalId}
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
                          <Label for="address"> آدرس </Label>
                          <Input
                            type="textarea"
                            defaultValue={employeeData.address}
                            id="address"
                            name="address"
                            onChange={handleChange}
                            placeholder="--------"
                            className={`form-control ${
                              errors.address && touched.address && "is-invalid"
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

                      <Col
                        className="mt-1 pl-0 d-flex justify-content-lg-end"
                        sm="12"
                      >
                        <Button.Ripple
                          onClick={() => closeComponentEdit()}
                          className="mr-1"
                          color="danger"
                        >
                          <Plus size={15} />

                          <span className="align-middle ml-50">لغو</span>
                        </Button.Ripple>
                        <Button.Ripple
                          type="submit"
                          className="mr-1"
                          color="success"
                        >
                          <Plus size={15} />

                          <span className="align-middle ml-50">
                            ثبت تغییرات
                          </span>
                        </Button.Ripple>
                      </Col>
                    </Row>
                  </Form>

                  <Row>
                    {/* <Col sm="9" md="6" lg="5">
                      <div className="users-page-view-table">
                        <div className="d-flex user-info">
                          <div className="user-info-title font-weight-bold">
                            <FormGroup>
                              <Label for="fullName">نام کاربری </Label>
                              <Input
                                type="text"
                                id="fullName"
                                name="fullName"
                                defaultValue={employeeData.fullName}
                                onChange={handleChange}
                                placeholder="نام کاربری  ..."
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
                          </div>
                        </div>
                        <div className="d-flex user-info">
                          <div className="user-info-title font-weight-bold">
                            <FormGroup>
                              <Label for="birthDate"> تاریخ تولد </Label>
                              <Input
                                type="text"
                                defaultValue={employeeData.birthDate}
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
                      </div>
                    </Col>
                    <Col md="12" lg="5">
                      <div className="users-page-view-table">
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
                      </div>
                    </Col> */}

                    {/* <div className="users-page-view-table"> */}
                    {/* <div className="d-flex user-info">
                      <div className="text-truncate">
                        <span className="px-3">
                          {" "}
                          {terms && terms.length} از {AlltermLength}
                        </span>
                      </div>
                    </div>
                   */}
                    {/* </div> */}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Fragment>
        );
      }}
    </Formik>
  );
};

export default ProfileForm;
