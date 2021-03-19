import React, { Component, useState, useEffect } from "react";
import Joi from "joi-browser";
import { Formik, Field, Form } from "formik";
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
import userImg from "../../../assets/img/portrait/small/avatar-s-18.jpg";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check, Lock, Mail, Facebook } from "react-feather";
import Forms from "../../../components/layout/form";
import * as Yup from "yup";

import {
  getAllCourses,
  getAllTeacher,
  createTerm,
} from "../../../services/student.api";

export const CreateTerm = () => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(null);
  const [teachers, setTeachers] = useState(null);
  const [activeTab, setActiveTab] = useState("");

  const formSchema = Yup.object().shape({
    title: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    cost: Yup.number("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    endDate: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    startDate: Yup.string()
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    capacity: Yup.number("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
    teacher: Yup.string().required("این فیلد اجباریست"),
    course: Yup.string("فرمت وارد شده اشتباه است")
      .min(3, "اسم انتخاب شده کوتاه است")
      .required("این فیلد اجباریست"),
  });

  const TermInfo = async () => {
    const Allteachers = await getAllTeacher();
    const AllCourses = await getAllCourses();
    setTeachers(Allteachers);
    setCourses(AllCourses);
  };
  useEffect(() => {
    TermInfo();
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const doSubmit = async (data) => {
    const newTerm = {
      title: data.title,
      cost: data.cost,
      endDate: data.endDate,
      startDate: data.startDate,
      capacity: data.capacity,
      teacher: data.teacher,
      course: data.course,
    };
    try {
      const response = await createTerm(newTerm);
      toast.success(response.data.message[0].message);
      {
        <Redirect to="/admin" />;
      }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message["message"][0].message);
      }
    }
  };
  return (
    <Row>
      <Col sm="12">
        <Media className="mb-2"></Media>
      </Col>
      <Col sm="12">
        <Formik
          initialValues={{
            title: "",
            cost: "",
            endDate: "",
            startDate: "",
            capacity: "",
            teacher: "",
            course: "",
          }}
          validationSchema={formSchema}
          onSubmit={(value) => doSubmit(value)}
        >
          {({ errors, touched }) => (
            <Form>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="title">نام ترم </Label>
                    <Input
                      type="text"
                      defaultValue=""
                      id="title"
                      name="title"
                      placeholder="نام ترم ..."
                      className={`form-control ${
                        errors.title && touched.title && "is-invalid"
                      }`}
                    />{" "}
                    {errors.title && touched.title && (
                      <span
                        style={{ direction: "rtl" }}
                        className="redError mb-2 danger"
                      >
                        {errors.title}!
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="cost">قیمت ترم </Label>
                    <Input
                      type="text"
                      defaultValue=""
                      id="cost"
                      placeholder="قیمت ترم ..."
                      className={`form-control ${
                        errors.cost && touched.cost && "is-invalid"
                      }`}
                    />{" "}
                    {errors.cost && touched.cost && (
                      <span
                        style={{ direction: "rtl" }}
                        className="redError mb-2 danger"
                      >
                        {errors.cost}!
                      </span>
                    )}
                  </FormGroup>
                </Col>

                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="startDate">شروع ترم </Label>
                    <Input
                      type="text"
                      defaultValue=""
                      id="startDate"
                      placeholder="0000/00/00"
                      className={`form-control ${
                        errors.startDate && touched.startDate && "is-invalid"
                      }`}
                    />{" "}
                    {errors.startDate && touched.startDate && (
                      <span
                        style={{ direction: "rtl" }}
                        className="redError mb-2 danger"
                      >
                        {errors.startDate}!
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="endDate">پایان ترم </Label>
                    <Input
                      type="text"
                      defaultValue=""
                      id="endDate"
                      placeholder="0000/00/00"
                      className={`form-control ${
                        errors.endDate && touched.endDate && "is-invalid"
                      }`}
                    />{" "}
                    {errors.endDate && touched.endDate && (
                      <span
                        style={{ direction: "rtl" }}
                        className="redError mb-2 danger"
                      >
                        {errors.endDate}!
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="capacity">ظرفیت</Label>
                    <Input
                      type="text"
                      defaultValue=""
                      id="capacity"
                      placeholder="1-50"
                      className={`form-control ${
                        errors.capacity && touched.capacity && "is-invalid"
                      }`}
                    />{" "}
                    {errors.capacity && touched.capacity && (
                      <span
                        style={{ direction: "rtl" }}
                        className="redError mb-2 danger"
                      >
                        {errors.capacity}!
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="teacher">استاد</Label>
                    <Input
                      type="select"
                      name="teacher"
                      id="teacher"
                      defaultValue="-------------"
                      className={`form-control ${
                        errors.teacher && touched.teacher && "is-invalid"
                      }`}
                    />{" "}
                    {errors.teacher && touched.teacher && (
                      <span
                        style={{ direction: "rtl" }}
                        className="redError mb-2 danger"
                      >
                        {errors.teacher}!
                      </span>
                    )}
                    {/* {teachers && teachers.map(teacher => (console.log("object")
                                            // <option key={teacher['teacher']._id} id={teacher['teacher']._id}>{teacher['teacher'].fullName}</option>
                                            ))} */}
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="course">دوره </Label>
                    <Input
                      type="select"
                      name="course"
                      id="course"
                      defaultValue="------------"
                      className={`form-control ${
                        errors.course && touched.course && "is-invalid"
                      }`}
                    />{" "}
                    {errors.course && touched.course && (
                      <span
                        style={{ direction: "rtl" }}
                        className="redError mb-2 danger"
                      >
                        {errors.course}!
                      </span>
                    )}
                    {/* {courses && courses.map(co => (
                                            <option key={co.course._id} id={co.course._id}>{co.course.courseName}</option>
                                            ))} */}
                  </FormGroup>
                </Col>
                <Col
                  className="d-flex justify-content-end flex-wrap mt-2"
                  sm="12"
                >
                  <Button.Ripple type="submit" className="mr-1" color="primary">
                    ثبت ترم
                  </Button.Ripple>
                  <Button.Ripple color="flat-warning">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/admin/termList"
                    >
                      لغو
                    </Link>
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};

export default CreateTerm;
