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
} from "reactstrap";
import { toast } from "react-toastify";
import userImg from "../../assets/img/portrait/small/avatar-s-18.jpg";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check, Lock, Mail, Facebook } from "react-feather";
import { addNews } from "../../services/News.api";

export const AddNews = () => {
  // const [data, setData] = useState({})
  // const [errors, setErrors] = useState({})
  //   const [activeTab, setActiveTab] = useState("");

  const yup = require("yup");
  require("yup-password")(yup);
  const Validate = yup.object().shape({
    title: yup
      .string()
      .min(3, "تیتر خبر باید بیشتر از ۳حرف باشد   ")
      .required(" فیلدرا پرکنید "),
    category: yup
      .string()
      .required(" فیلدرا پرکنید ")
      .min(3, " دسته بندی باید بیشتر از ۳حرف باشد   "),
    text: yup
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

  //   const toggle = (tab) => {
  //     if (activeTab !== tab) {
  //       setActiveTab(tab);
  //     }
  //   };
  const doSubmit = async (data) => {
    const newsData = {
      title: data.title,
      category: data.category,
      image: data.image,
      text: data.text,
    };
    try {
      const response = await addNews(newsData);
      toast.success("خبر با موفقیت اضافه شد ");
      //   {
      //     <Redirect to="/admin/News/List" />;
      //   }
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message["message"][0].message);
      }
    }
  };
  return (
    <Formik
      initialValues={{
        title: "",
        category: "",
        image: "",
        text: "",
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
                      <Label for="courseName"> تیتر خبر </Label>
                      <Input
                        type="text"
                        defaultValue=""
                        id="title"
                        name="title"
                        onChange={handleChange}
                        placeholder=" تیتر خبر ..."
                        className={`form-control ${
                          errors.title && touched.title && "is-invalid"
                        }`}
                      />
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
                      <Label for="category"> دسته بندی </Label>
                      <Input
                        type="text"
                        defaultValue=""
                        id="category"
                        name="category"
                        onChange={handleChange}
                        placeholder="--------"
                        className={`form-control ${
                          errors.category && touched.category && "is-invalid"
                        }`}
                      />
                      {errors.category && touched.category && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.category}!
                        </span>
                      )}
                    </FormGroup>
                  </Col>

                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="text">متن خبر </Label>
                      <Input
                        type="text"
                        defaultValue=""
                        id="text"
                        name="text"
                        onChange={handleChange}
                        placeholder=" متن خبر ..."
                        className={`form-control ${
                          errors.text && touched.text && "is-invalid"
                        }`}
                      />
                      {errors.text && touched.text && (
                        <span
                          style={{ direction: "rtl" }}
                          className="redError mb-2 danger"
                        >
                          {errors.text}!
                        </span>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="image"> عکس خبر </Label>
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
                      ثبت خبر
                    </Button.Ripple>
                    <Button.Ripple color="flat-warning">
                      {" "}
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/admin/News/List"
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

export default AddNews;
