import React, { useEffect, useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  UncontrolledTooltip,
} from "reactstrap";
import classnames from "classnames";
import {
  Settings,
  Lock,
  Info,
  Instagram,
  Link,
  Bell,
  Home,
  Edit3,
  List,
  AlignJustify,
  CornerDownLeft,
} from "react-feather";
import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
} from "../../../services/student.api";
import {
  getUserID,
  getCurrentUser,
  postCurrentUser,
} from "../../../services/storage/storage";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import Dashboard from "./dashboard";
import StuddentProfile from "./studdentProfile";
import StuddentCourses from "./studentCourses";
import AllCoursesExceptStudentCourses from "./AllCourses";
import "../../../assets/scss/pages/account-settings.scss";
import "./Panel.css";

const Panel = (props) => {
  const [activeTab, setactiveTab] = useState("2");
  const [windowWidth, setwindowWidth] = useState(null);
  const [AllCoursesData, setAllCoursesData] = useState([]);
  const [StudentCoursesData, setStudentCoursesData] = useState([]);
  const [
    filterCoursesDataFromStudent,
    setFilterCoursesDataFromStudent,
  ] = useState([]);
  const Display = windowWidth >= 769 ? "none" : "block";
  const getAllCourses = async () => {
    const studentId = getUserID();
    const allCourses = await getCourses();
    const userCourses = allCourses.filter((co) =>
      co.students.find((st) => st._id === studentId)
    );
    const unUserCourses = allCourses.filter(
      (item) =>
        !item.students.some((filterItem) => filterItem._id === studentId)
    );

    setAllCoursesData(allCourses);
    setStudentCoursesData(userCourses);
    setFilterCoursesDataFromStudent(unUserCourses);
  };
  const toggle = (tab) => {
    setactiveTab(tab);
  };
  const updateWidth = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    getAllCourses();
  }, [activeTab]);
  useEffect(() => {
    if (windowWidth !== undefined) {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    }
  }, []);
  console.log("stu", StudentCoursesData);
  console.log("stuss", AllCoursesData);
  const AllCoursesCount = AllCoursesData && AllCoursesData.length;

  return (
    <div className=" userPanel">
      <div className="container my-3 userPanel-Container">
        <div
          className={`${
            windowWidth >= 769 ? "nav-vertical" : "account-setting-wrapper"
          }`}
        >
          <Nav
            className="account-settings-tab nav-left mr-0 mr-sm-3 userPanel-rightSide"
            tabs
          >
            <NavItem>
              {" "}
              <div className="profile-img-container d-flex align-items-center justify-content-between userPanel-rightSide-imageBox">
                <img
                  src={
                    require("../../../assets/img/profile/pages/page-01.jpg")
                      .default
                  }
                  alt="porfileImg"
                  className="img-fluid img-border rounded-circle box-shadow-1 userPanel-rightSide-img"
                />
              </div>
            </NavItem>
            <NavItem></NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: activeTab === "1",
                })}
                onClick={() => {
                  toggle("1");
                }}
                id="dashboard"
              >
                <Home size={16} />
                <span className="d-md-inline-block d-none align-middle ml-1 ">
                  پیشخوان
                </span>
              </NavLink>
              {}
              {Display === "block" && (
                <UncontrolledTooltip
                  className="userPanel-tooltip"
                  placement="bottom"
                  target="dashboard"
                  style={{
                    fontSize: "10px",
                    padding: "0 2px",
                  }}
                >
                  پیشخوان
                </UncontrolledTooltip>
              )}
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: activeTab === "2",
                })}
                onClick={() => {
                  toggle("2");
                }}
                id="editProfile"
              >
                <Edit3 size={16} />
                <span className="d-md-inline-block d-none align-middle ml-1">
                  ویرایش پروفایل
                </span>
              </NavLink>
              {Display === "block" && (
                <UncontrolledTooltip
                  className="userPanel-tooltip"
                  placement="bottom"
                  target="editProfile"
                  style={{ fontSize: "10px", padding: "0 2px" }}
                >
                  ویرایش پروفایل
                </UncontrolledTooltip>
              )}
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: activeTab === "3",
                })}
                onClick={() => {
                  toggle("3");
                }}
                id="myCourses"
              >
                <List size={16} />
                <span className="d-md-inline-block d-none align-middle ml-1">
                  دوره های من
                </span>
              </NavLink>
              {Display === "block" && (
                <UncontrolledTooltip
                  className="userPanel-tooltip"
                  placement="bottom"
                  target="myCourses"
                  style={{ fontSize: "10px", padding: "0 2px" }}
                >
                  دوره های من
                </UncontrolledTooltip>
              )}
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: activeTab === "4",
                })}
                onClick={() => {
                  toggle("4");
                }}
                id="CoursesList"
              >
                <AlignJustify size={16} />
                <span className="d-md-inline-block d-none align-middle ml-1">
                  لیست دوره ها
                </span>
              </NavLink>
              {Display === "block" && (
                <UncontrolledTooltip
                  className="userPanel-tooltip"
                  placement="bottom"
                  target="CoursesList"
                  style={{ fontSize: "10px", padding: "0 2px" }}
                >
                  لیست دوره ها
                </UncontrolledTooltip>
              )}
            </NavItem>
            <NavItem className="userPanel-rightSide-opstion">
              <NavLink
                className={classnames({
                  active: activeTab === "5",
                })}
                onClick={() => {
                  props.history.push("/");
                }}
                id="close"
              >
                <CornerDownLeft size={16} />
                <span className="d-md-inline-block d-none align-middle ml-1">
                  بستن
                </span>
              </NavLink>
              {Display === "block" && (
                <UncontrolledTooltip
                  className="userPanel-tooltip"
                  placement="bottom"
                  target="close"
                  style={{ fontSize: "10px", padding: "0 2px" }}
                >
                  بستن
                </UncontrolledTooltip>
              )}
            </NavItem>
            {/* <NavItem>
              <NavLink
                className={classnames({
                  active: activeTab === "6",
                })}
                onClick={() => {
                  toggle("6");
                }}
              >
                <Bell size={16} />
                <span className="d-md-inline-block d-none align-middle ml-1">
                  تغییر رمز عبور
                </span>
              </NavLink>
            </NavItem> */}
          </Nav>
          <Card className="userPanel-leftSide">
            <CardBody className="userPanel-leftSide-CardBody">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  {" "}
                  <Dashboard />
                  {/* <GeneralTab /> */}
                </TabPane>
                <TabPane tabId="2" className="userPanel-leftSide-TabePane">
                  <StuddentProfile />
                </TabPane>
                <TabPane tabId="3">
                  <StuddentCourses
                    Data={StudentCoursesData}
                    setData={setStudentCoursesData}
                    AllDataCount={AllCoursesCount}
                  />
                </TabPane>
                <TabPane tabId="4">
                  <AllCoursesExceptStudentCourses
                    Data={filterCoursesDataFromStudent}
                    setData={setFilterCoursesDataFromStudent}
                    AllDataCount={AllCoursesCount}
                  />
                </TabPane>
                {/* <TabPane tabId="5"></TabPane> */}
                {/* <TabPane tabId="6"></TabPane> */}
              </TabContent>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Panel;
