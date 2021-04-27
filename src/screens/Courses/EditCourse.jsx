import React, { Component, useState, useEffect } from "react";
import Joi from "joi-browser";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

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
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { toast } from "react-toastify";
import userImg from "../../assets/img/portrait/small/avatar-s-18.jpg";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check, Lock, Edit2, Mail, Facebook } from "react-feather";
import { UpdateCourse, getCourseById } from "../../services/courses.api";

export const EditCourse = (props) => {
  // const [data, setData] = useState({})
  // const [errors, setErrors] = useState({})
  const [activeTab, setActiveTab] = useState("1");
  const [CourseData, setCourseData] = useState({});
  const CourseId = props.match.params.courseId;

  const yup = require("yup");
  require("yup-password")(yup);
  const Validate = yup.object().shape({
    courseName: yup
      .string()
      .min(3, "نام دوره باید بیشتر از ۳حرف باشد   ")
      .required(" فیلدرا پرکنید "),
    topics: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .min(3, " دسته بندی باید بیشتر از ۳حرف باشد   "),
    description: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .max(50, "بیشتر از این نمیتوانید وارد کنید"),
    image: yup
      .string("فرمت ورودی این فیلد باید فایل باشد")
      .min(3)
      .required(" فیلدرا پرکنید "),
  });

  // const NewCourse = async () => {
  // }
  // useEffect(() => {
  //     NewCourse()

  // }, [])
  const CourseInfo = async () => {
    const data = await getCourseById(CourseId);
    setCourseData(data);
  };
  useEffect(() => {
    CourseInfo();
  }, []);
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const doSubmit = async (data) => {
    const CourseData = {
      courseName: data.courseName,
      topics: data.topics,
      description: data.description,
      image: data.image,
    };
    try {
      const response = await UpdateCourse(CourseId, CourseData);
      toast.success("دوره با موفقیت ویرایش شد ", { autoClose: 3000 });
      //   {
      //     <Redirect to="/admin/coursesList" />;
      //   }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message["message"][0].message);
      }
    }
  };
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardBody className="pt-2">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === "1",
                  })}
                >
                  <Edit2 size={16} />
                  <span className="align-middle ml-50">ویرایش دوره جدید</span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Formik
                  initialValues={{
                    courseName: CourseData.courseName,
                    topics: CourseData.topics,
                    description: CourseData.description,
                    image: CourseData.image,
                  }}
                  validationSchema={Validate}
                  enableReinitialize={true}
                  onSubmit={(value) => doSubmit(value)}
                >
                  {({ errors, handleChange, touched }) => {
                    return (
                      <Row>
                        <Col sm="12">
                          <Media className="mb-2"></Media>
                        </Col>
                        <Col sm="12">
                          <Form>
                            <Row>
                              <Col md="6" sm="12">
                                <FormGroup>
                                  <Label for="courseName">نام ترم </Label>
                                  <Input
                                    type="text"
                                    defaultValue={CourseData.courseName}
                                    id="courseName"
                                    name="courseName"
                                    onChange={handleChange}
                                    placeholder="نام دوره ..."
                                    className={`form-control ${
                                      errors.courseName &&
                                      touched.courseName &&
                                      "is-invalid"
                                    }`}
                                  />
                                  {errors.courseName && touched.courseName && (
                                    <span
                                      style={{ direction: "rtl" }}
                                      className="redError mb-2 danger"
                                    >
                                      {errors.courseName}!
                                    </span>
                                  )}
                                </FormGroup>
                              </Col>
                              <Col md="6" sm="12">
                                <FormGroup>
                                  <Label for="topics"> دسته بندی </Label>
                                  <Input
                                    type="text"
                                    defaultValue={
                                      CourseData.topics &&
                                      CourseData.topics.map((top) => "," + top)
                                    }
                                    id="topics"
                                    name="topics"
                                    onChange={handleChange}
                                    placeholder="--------"
                                    className={`form-control ${
                                      errors.topics &&
                                      touched.topics &&
                                      "is-invalid"
                                    }`}
                                  />
                                  {errors.topics && touched.topics && (
                                    <span
                                      style={{ direction: "rtl" }}
                                      className="redError mb-2 danger"
                                    >
                                      {errors.topics}!
                                    </span>
                                  )}
                                </FormGroup>
                              </Col>
                              <Col md="6" sm="12">
                                <FormGroup>
                                  <Label for="image"> عکس دوره </Label>
                                  <Input
                                    type="text"
                                    defaultValue=""
                                    id="image"
                                    name="image"
                                    onChange={handleChange}
                                    placeholder="........"
                                    className={`form-control ${
                                      errors.image &&
                                      touched.image &&
                                      "is-invalid"
                                    }`}
                                  />
                                  {errors.image && touched.image && (
                                    <span
                                      style={{ direction: "rtl" }}
                                      className="redError mb-2 danger danger"
                                    >
                                      {errors.image}!
                                    </span>
                                  )}
                                </FormGroup>
                              </Col>

                              <Col md="6" sm="12">
                                <FormGroup>
                                  <Label for="description">توضیحات </Label>
                                  <Input
                                    type="textarea"
                                    defaultValue={CourseData.description}
                                    id="description"
                                    name="description"
                                    onChange={handleChange}
                                    placeholder="توضیحات دوره..."
                                    className={`form-control ${
                                      errors.description &&
                                      touched.description &&
                                      "is-invalid"
                                    }`}
                                  />
                                  {errors.description && touched.description && (
                                    <span
                                      style={{ direction: "rtl" }}
                                      className="redError mb-2 danger"
                                    >
                                      {errors.description}!
                                    </span>
                                  )}
                                </FormGroup>
                              </Col>

                              <Col
                                className="d-flex justify-content-end flex-wrap mt-2"
                                sm="12"
                              >
                                <Button.Ripple
                                  rounded
                                  type="submit"
                                  className="mr-1"
                                  color="primary"
                                >
                                  ثبت دوره
                                </Button.Ripple>
                                <Button.Ripple color="flat-warning">
                                  {" "}
                                  <Link
                                    style={{ textDecoration: "none" }}
                                    to="/admin/CoursesList"
                                  >
                                    لغو
                                  </Link>
                                </Button.Ripple>
                              </Col>
                            </Row>
                          </Form>
                        </Col>
                      </Row>
                    );
                  }}
                </Formik>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditCourse;
