import React, { Fragment, useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Button,
  Badge,
  Input,
} from "reactstrap";
import {
  Star,
  Truck,
  DollarSign,
  ShoppingCart,
  Heart,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Award,
  Clock,
  Shield,
  Eye,
  Code,
  Feather,
  Check,
  Plus,
  User,
  UserCheck,
  Send,
} from "react-feather";
import { MDBContainer } from "../../../../assets/css/mdbreact";
import { useHistory } from "react-router-dom";

import PerfectScrollbar from "react-perfect-scrollbar";

import classnames from "classnames";
import Swiper from "react-id-swiper";
import CourseImage from "../../../../assets/img/pages/search-result.jpg";
import headphones from "../../../../assets/img/pages/06.jpg";
import laptop from "../../../../assets/img/elements/macbook-pro.png";
import homepod from "../../../../assets/img/elements/homepod.png";
import earphones from "../../../../assets/img/elements/wireless-earphones.png";
import iphoneX from "../../../../assets/img/elements/iphone-x.png";
import watch from "../../../../assets/img/elements/apple-watch.png";
import mouse from "../../../../assets/img/elements/magic-mouse.png";
import {
  getCurrentUser,
  removeItem,
} from "../../../../services/storage/storage";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import "../../../../assets/scss/pages/app-chat.scss";

const colors = ["success", "danger", "primary", "warning", "info"];
const CenterInfo = ({ courseInfo }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [active, setActive] = useState("1");
  const [StudentInfo, setStudentInfo] = useState({});
  let history = useHistory();
  const getStudenetInfo = () => {
    const Data = getCurrentUser();
    setStudentInfo(Data);
  };
  useEffect(() => {
    getStudenetInfo();
  }, []);
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  const GoTOTheLoginPage = () => {
    removeItem("role");
    removeItem("user");
    removeItem("token");
    history.push("/logIn");
  };
  const { topics, courseName, description, image } = courseInfo;
  const { role, email, fullName } = StudentInfo;
  console.log("++++++++++++++++++++++++");
  // console.log(courseInfo['courseName'])

  return (
    <Fragment>
      <div style={{ display: "none" }}>
        <div class="col-md-11 col-sm-10 col-xs-12 course-view">
          <img
            class="courseImage"
            src={
              require("../../../../assets/images/pages/courses/22.png").default
            }
            alt=""
          />
        </div>
        <div class="col-md-11 col-sm-11 col-xs-12 course-description">
          <div class="col-md-10 col-sm-11 col-xs-11  description-title">
            <h4>{courseInfo.courseName}</h4>
          </div>{" "}
          <div class="col-md-10 col-sm-11 col-xs-11  description-text">
            <p>{description}</p>
            <h4>سرفصل های دوره</h4>
            <ul>
              {topics.map((top) => (
                <li key={top}>{top}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid CourseInfo-Center">
        <Card className="overflow-hidden ">
          <CardBody className="pb-0">
            <div className="d-flex align-items-center justify-content-center mb-2 mb-md-0 CourseInfo-imageBox">
              <img src={headphones} alt="Google Home" />
            </div>
            <Card>
              <CardHeader className="d-flex  justify-content-center">
                <h3 className="text-center">{courseName}</h3>
              </CardHeader>
              <CardBody>
                <Nav tabs className="justify-content-start ">
                  <NavItem className="mr-2">
                    <NavLink
                      className={classnames({
                        active: active === "1",
                      })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      توضیحات
                    </NavLink>
                  </NavItem>
                  <NavItem className="ml-2">
                    <NavLink
                      className={classnames({
                        active: active === "2",
                      })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      نظرات
                      <Badge className="ml-2 p-2" color="warning">
                        50
                      </Badge>
                    </NavLink>
                  </NavItem>

                  <NavItem className="ml-2">
                    <NavLink
                      className={classnames({
                        active: active === "3",
                      })}
                      onClick={() => {
                        toggle("3");
                      }}
                    >
                      درج نظر
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent className="py-50 mt-4" activeTab={active}>
                  <TabPane tabId="1">
                    <p>{description}</p>
                    <hr className="my-5" />
                    <h4 classNam="mb-3 text-bold-600">دسته بندی</h4>

                    {topics.length > 0 ? (
                      topics.map((topic, index) => (
                        <p className={`ml-3 my-2 round text-${colors[index]}`}>
                          <Feather className="mr-2" size={18} />
                          {topic}
                        </p>
                      ))
                    ) : (
                      <span>...</span>
                    )}
                    <div className="mt-4 d-flex flex-wrap">
                      <div className="ratings border-left ml-1 pl-1">
                        <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                        <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                        <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                        <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                        <Star size={20} fill="#fff" stroke="#b8c2cc" />
                        <span className="ml-1 font-medium-1 text-dark align-middle">
                          424 رتبه بندی
                        </span>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2" className="CommentTab">
                    {/* <MDBContainer> */}
                    {/* <div className="scrollbar scrollbar-primary CommentTab"> */}
                    <Card className="commentsCard ">
                      <CardBody className="box-shadow-1 my-4">
                        <ul className="activity-timeline timeline-left list-unstyled">
                          <li>
                            <div className="timeline-icon comments-UserImageBox">
                              <img
                                className="img-fluid rounded-circle  box-shadow-1 comments-UserImage"
                                height="40"
                                width="40"
                                src={
                                  require("../../../../assets/img/profile/pages/page-01.jpg")
                                    .default
                                }
                                alt="pic"
                              />
                            </div>
                            <div className="timeline-info mb-2 d-flex justify-content-between ">
                              <div className="Comment-user">
                                <p className="font-weight-bold">
                                  mohsen esfandiari{" "}
                                </p>
                                <p className="mb-2">mohsen@gmail.com</p>
                                <span>
                                  بهترین دوره ای بود که تا به حال شرکت کردم دوره
                                  بعدی کی شروع میشه ؟
                                </span>
                              </div>

                              <div className="ResponseBtn">
                                {" "}
                                <Button color="success" className="">
                                  پاسخ
                                </Button>
                              </div>
                            </div>
                            <Badge color="primary " className="p-2">
                              <span className="">25</span> days ago
                            </Badge>
                          </li>
                          {true === true ? (
                            <li>
                              <div className="timeline-icon bg-success">
                                <UserCheck size="18" />
                              </div>
                              <div className="timeline-info mb-2">
                                <p className="font-weight-bold">ادمین </p>
                                <span className="my-2">بهار 1400</span>
                              </div>
                              <Badge color="primary " className="p-2">
                                <span className="">25</span> days ago
                              </Badge>
                            </li>
                          ) : (
                            <li>
                              <div className="timeline-icon bg-success">
                                <UserCheck size="18" />
                              </div>
                              <div className="timeline-info mb-2">
                                <p className="font-weight-bold">ادمین </p>
                                <Input className="my-2" />
                              </div>
                              {/* <Badge color="primary " className="p-2">
                                <span className="">25</span> days ago
                              </Badge> */}
                            </li>
                          )}
                        </ul>
                      </CardBody>
                      <CardBody className="box-shadow-1 my-4">
                        <ul className="activity-timeline timeline-left list-unstyled">
                          <li>
                            <div className="timeline-icon comments-UserImageBox">
                              <img
                                className="img-fluid rounded-circle  box-shadow-1 comments-UserImage"
                                height="40"
                                width="40"
                                src={
                                  require("../../../../assets/img/profile/pages/page-01.jpg")
                                    .default
                                }
                                alt="pic"
                              />
                            </div>
                            <div className="timeline-info mb-2 d-flex justify-content-between ">
                              <div className="Comment-user">
                                <p className="font-weight-bold">
                                  mohsen esfandiari{" "}
                                </p>
                                <p className="mb-2">mohsen@gmail.com</p>
                                <span>
                                  بهترین دوره ای بود که تا به حال شرکت کردم دوره
                                  بعدی کی شروع میشه ؟
                                </span>
                              </div>
                              <div className="ResponseBtn">
                                {" "}
                                <Button color="success" className="">
                                  پاسخ
                                </Button>
                              </div>
                            </div>
                            <Badge color="primary " className="p-2">
                              <span className="">25</span> days ago
                            </Badge>
                          </li>
                          <li>
                            <div className="timeline-icon bg-success">
                              <UserCheck size="18" />
                            </div>
                            <div className="timeline-info mb-2">
                              <p className="font-weight-bold">ادمین </p>
                              <span className="my-2">بهار 1400</span>
                            </div>
                            <Badge color="primary " className="p-2">
                              <span className="">25</span> days ago
                            </Badge>
                          </li>
                        </ul>
                      </CardBody>

                      <CardBody className="box-shadow-1 my-4">
                        <ul className="activity-timeline timeline-left list-unstyled">
                          <li>
                            <div className="timeline-icon comments-UserImageBox">
                              <img
                                className="img-fluid rounded-circle  box-shadow-1 comments-UserImage"
                                height="40"
                                width="40"
                                src={
                                  require("../../../../assets/img/profile/pages/page-01.jpg")
                                    .default
                                }
                                alt="pic"
                              />
                            </div>
                            <div className="timeline-info mb-2 d-flex justify-content-between ">
                              <div className="Comment-user">
                                <p className="font-weight-bold">
                                  mohsen esfandiari{" "}
                                </p>
                                <p className="mb-2">mohsen@gmail.com</p>
                                <span>
                                  بهترین دوره ای بود که تا به حال شرکت کردم دوره
                                  بعدی کی شروع میشه ؟
                                </span>
                              </div>
                              <div className="ResponseBtn">
                                {" "}
                                <Button color="success" className="">
                                  پاسخ
                                </Button>
                              </div>
                            </div>
                            <Badge color="primary " className="p-2">
                              <span className="">25</span> days ago
                            </Badge>
                          </li>
                          <li>
                            <div className="timeline-icon bg-success">
                              <UserCheck size="18" />
                            </div>
                            <div className="timeline-info mb-2">
                              <p className="font-weight-bold">ادمین </p>
                              <span className="my-2">بهار 1400</span>
                            </div>
                            <Badge color="primary " className="p-2">
                              <span className="">25</span> days ago
                            </Badge>
                          </li>
                        </ul>
                      </CardBody>
                    </Card>
                    {/* </div> */}
                    {/* </MDBContainer> */}
                  </TabPane>
                  <TabPane tabId="3">
                    <Card>
                      <CardBody className=" my-4">
                        {StudentInfo && role === "student" ? (
                          <ul className="activity-timeline timeline-left list-unstyled">
                            <li>
                              <div className="timeline-icon comments-UserImageBox">
                                <img
                                  className="img-fluid rounded-circle  box-shadow-1 comments-UserImage"
                                  height="40"
                                  width="40"
                                  src={
                                    require("../../../../assets/img/profile/pages/page-01.jpg")
                                      .default
                                  }
                                  alt="pic"
                                />
                              </div>
                              <div className="timeline-info mb-2 d-flex justify-content-between ">
                                <div className="Comment-user">
                                  <p className="font-weight-bold">
                                    {fullName}{" "}
                                  </p>
                                  <p className="mb-2">{email}</p>
                                  <Input />
                                </div>

                                <div className="ResponseBtn">
                                  {" "}
                                  <Button color="success" className="">
                                    ثبت
                                  </Button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        ) : (
                          <>
                            <div className="d-flex justify-content-center">
                              <p className="text-center">
                                وارد حساب کاربری خود شوید{" "}
                              </p>
                            </div>
                            <div className="ResponseBtn d-flex justify-content-center ">
                              {" "}
                              <Button
                                color="success"
                                className=""
                                onClick={() => GoTOTheLoginPage()}
                              >
                                ورود
                              </Button>
                            </div>
                          </>
                        )}
                      </CardBody>
                    </Card>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
};

export default CenterInfo;
