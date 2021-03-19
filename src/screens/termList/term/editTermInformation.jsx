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
  updateTerm,
  getTermById,
} from "../../../services/student.api";

export const EditTermInfo = ({ termID }) => {
  const [termdata, setTermData] = useState({});
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
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
    const data = await getTermById(termID);
    const teachers = await getAllTeacher();
    const AllCourses = await getAllCourses();
    setTermData(data);
    setTeachers(teachers);
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
      const response = await updateTerm(newTerm);
      toast.success(response.data.message[0].message);
      {
        <Redirect to="/admin/termList" />;
      }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message["message"][0].message);
      }
    }
  };
  return (
    <Formik
      initialValues={{
        title: termdata.title,
        cost: termdata.cost,
        endDate:
          termdata.endDate &&
          termdata.endDate.split("T")[0].replaceAll("-", "/"),
        startDate:
          termdata.startDate &&
          termdata.startDate.split("T")[0].replaceAll("-", "/"),
        capacity: termdata.capacity,
        teacher: termdata.teacher,
        course: termdata.course,
      }}
      enableReinitialize={true}
      validationSchema={formSchema}
      onSubmit={(value) => doSubmit(value)}
    >
      {({ errors, touched }) => (
        <Row>
          <Col sm="12">
            <Media className="mb-2"></Media>
          </Col>
          <Col sm="12">
            <Form>
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="title">نام ترم </Label>
                    <Input
                      type="text"
                      defaultValue={termdata.title}
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
                      id="cost"
                      defaultValue={termdata.cost}
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
                      id="startDate"
                      defaultValue={
                        termdata.startDate &&
                        termdata.startDate.split("T")[0].replaceAll("-", "/")
                      }
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
                      id="endDate"
                      defaultValue={
                        termdata.endDate &&
                        termdata.endDate.split("T")[0].replaceAll("-", "/")
                      }
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
                      id="capacity"
                      defaultValue={termdata.capacity}
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
                    <Label for="teachers">استاد</Label>
                    <Input type="select" name="teachers" id="teachers">
                      {/* {teachers && teachers.map(teacher => (
                                            <option key={teacher.teacher._id} id={teacher.teacher._id}>{teacher.teacher.fullName}</option>
                                            ))} */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="courses">دوره </Label>
                    <Input type="select" name="courses" id="courses">
                      {/* {courses && courses.map(co => (
                                            <option key={co.course._id} id={co.course._id}>{co.course.courseName}</option>
                                            ))} */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col
                  className="d-flex justify-content-end flex-wrap mt-2"
                  sm="12"
                >
                  <Button.Ripple type="submit" className="mr-1" color="primary">
                    ثبت تغییرات
                  </Button.Ripple>
                  <Button.Ripple color="flat-warning">
                    {" "}
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
          </Col>
        </Row>
      )}
    </Formik>
  );
};

export default EditTermInfo;
