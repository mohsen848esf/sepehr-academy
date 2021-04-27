import React, { Component, useState, useEffect } from "react";
import Joi from "joi-browser";
import { Form, Formik, Field } from "formik";
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
} from "reactstrap";
import { toast } from "react-toastify";
import userImg from "../../assets/img/portrait/small/avatar-s-18.jpg";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check, Lock, Mail, Facebook, Trash } from "react-feather";
import { addCourse } from "../../services/courses.api";
import Chip from "./Chip";
export const AddCourse = () => {
  const [Course, setCours] = useState({
    courseName: "",
    topics: [],
    description: "",
    image: "",
  });
  const [Disable, setDisable] = useState(false);
  const [activeTab, setActiveTab] = useState("");

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
  const history = useHistory();
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const doSubmit = async (data) => {
    const courseData = {
      courseName: data.courseName,
      topics: data.topics,
      // topics: data.topics.split("/"),
      description: data.description,
      image: data.image,
    };
    try {
      const response = await addCourse(courseData);
      setCours(courseData);
      toast.success(response.data.message[0].message);
      history.replace("/admin/coursesList");
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message["message"][0].message);
      }
    }
  };
  const makeChip = (e, value) => {
    if (e.key === "Enter" && Course.topics.length <= 4) {
      let new_topic = Course.topics;
      new_topic.push(value);
      setCours((old) => ({ ...old, topics: new_topic }));
    } else if (Course.topics.length > 4) {
      // toast.error("محدودیت تاپیک فقط  5 تا است");
    }
  };
  return (
    <Formik
      initialValues={Course}
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
                        defaultValue=""
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
                        defaultValue=""
                        id="topics"
                        name="topics"
                        onKeyPress={(event) => {
                          !errors.topics && makeChip(event, event.target.value);
                        }}
                        placeholder="--------"
                        className={`form-control ${
                          errors.topics && touched.topics && "is-invalid"
                        }`}
                      />
                      {!errors.topics &&
                        Course.topics.map((item) => (
                          <Chip
                            className="mr-1"
                            text={item}
                            closableIcon={<Trash />}
                            closable
                            onClick
                          />
                        ))}
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
                      <Label for="description">توضیحات </Label>
                      <Input
                        type="text"
                        defaultValue=""
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
                          errors.image && touched.image && "is-invalid"
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
  );
};

export default AddCourse;
