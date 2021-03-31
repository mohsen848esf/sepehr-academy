import React, { Fragment, useState } from "react";
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
} from "react-feather";
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
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
const colors = ["success", "danger", "primary", "warning", "info"];
const CenterInfo = ({ courseInfo }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [active, setActive] = useState("1");

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
  const { topics, courseName, description, image } = courseInfo;
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
                  <TabPane tabId="2"></TabPane>
                </TabContent>
              </CardBody>
            </Card>

            <div className="my-4" style={{ display: "none" }}>
              <h3 className="my-2 text-center">{courseName}</h3>

              <div className="d-flex flex-wrap">
                <h3 className="text-primary">$129</h3>
                <div className="ratings border-left ml-1 pl-1">
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#fff" stroke="#b8c2cc" />
                  <span className="ml-1 font-medium-1 text-dark align-middle">
                    424 Ratings
                  </span>
                </div>
              </div>
              <p>
                Simplify your everyday life with the Google Home, a
                voice-activated speaker powered by the Google Assistant. Use
                voice commands to enjoy music, get answers from Google and
                manage everyday tasks. Google Home is compatible with Android
                and iOS operating systems, and can control compatible smart
                devices such as Chromecast or Nest.
              </p>
              <ul className="list-unstyled">
                <li className="mb-50">
                  <Truck size={15} />
                  <span className="align-middle font-weight-bold ml-50">
                    Free Sheeping
                  </span>
                </li>
                <li>
                  <DollarSign size={15} />
                  <span className="align-middle font-weight-bold ml-50">
                    EMI options available
                  </span>
                </li>
              </ul>
              <hr />
              <h4>Colors</h4>

              <hr />
            </div>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
};

export default CenterInfo;
