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
import { UpdateNews, getNewsById } from "../../services/News.api";

export const EditCourse = (props) => {
  // const [data, setData] = useState({})
  // const [errors, setErrors] = useState({})
  const [activeTab, setActiveTab] = useState("1");
  const [NewsData, setNewsData] = useState({});
  const NewsId = props.match.params.newsId;

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
  const NewsInfo = async () => {
    const data = await getNewsById(NewsId);
    setNewsData(data);
  };
  useEffect(() => {
    NewsInfo();
  }, []);
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const doSubmit = async (data) => {
    const NewsData = {
      title: data.title,
      category: data.category,
      image: data.image,
      text: data.text,
    };
    try {
      const response = await UpdateNews(NewsId, NewsData);
      toast.success("خبر با موفقیت ویرایش شد ", { autoClose: 3000 });
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
                  <span className="align-middle ml-50">ویرایش خبر </span>
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Formik
                  initialValues={{
                    title: NewsData.title,
                    category: NewsData.category,
                    image: NewsData.image,
                    text: NewsData.text,
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
                                  <Label for="title">تیتر خبر </Label>
                                  <Input
                                    type="text"
                                    defaultValue={NewsData.title}
                                    id="title"
                                    name="title"
                                    onChange={handleChange}
                                    placeholder=" تیتر خبر ..."
                                    className={`form-control ${
                                      errors.title &&
                                      touched.title &&
                                      "is-invalid"
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
                                    defaultValue={NewsData.category}
                                    id="category"
                                    name="category"
                                    onChange={handleChange}
                                    placeholder="--------"
                                    className={`form-control ${
                                      errors.category &&
                                      touched.category &&
                                      "is-invalid"
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
                                  <Label for="image"> عکس خبر </Label>
                                  <Input
                                    type="text"
                                    defaultValue={NewsData.image}
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
                                  <Label for="text">متن خبر </Label>
                                  <Input
                                    type="textarea"
                                    defaultValue={NewsData.text}
                                    id="text"
                                    name="text"
                                    onChange={handleChange}
                                    placeholder="متن خبر ..."
                                    className={`form-control ${
                                      errors.text &&
                                      touched.text &&
                                      "is-invalid"
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
                                  ثبت ویرایش
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
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default EditCourse;
