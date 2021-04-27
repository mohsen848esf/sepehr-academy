import React, { Component, Fragment, useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Sidebar from "react-sidebar";
import Modals from "./modal";

import {
  getItem,
  removeItem,
  clearStorage,
} from "../../services/storage/storage";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "../../assets/css/mdbreact";

import {
  Nav,
  NavLink,
  NavItem,
  Navbar,
  UncontrolledDropdown,
  Badge,
  Media,
  TabContent,
  TabPane,
  UncontrolledTooltip,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  Edit,
  Trash,
  Plus,
  Trash2,
  Bars,
  Eye,
  Code,
  Menu,
  CheckSquare,
  MessageSquare,
  Mail,
  Calendar,
  Star,
  Search,
  Bell,
  PlusSquare,
  DownloadCloud,
  AlertTriangle,
  CheckCircle,
  File,
  Power,
  User,
  Heart,
  Home,
  List,
  AlignJustify,
} from "react-feather";
import classnames from "classnames";
import TodoSidebar from "./Sidebar/Sidebar";
import "../../assets/scss/pages/app-todo.scss";

import "../../assets/css/manual/layout/Header.css";
const Header = () => {
  const [windowWidth, setwindowWidth] = useState(null);

  const [active, setActive] = useState("1");
  const [activeTab, setActiveTab] = useState(false);
  const [state, setstate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sideNavLeft, setSideNavLeft] = useState(false);
  const [isLogged, setIslogged] = useState(false);
  const [Display, setDisplay] = useState(true);
  const [Modal, setModal] = useState(false);

  const jwtToken = getItem("token") ? true : false;
  const role = getItem("role");
  const history = useHistory();
  const Location = useLocation();
  const updateWidth = () => {
    setwindowWidth(window.innerWidth);
    // const Display = windowWidth >= 769 ? false : true;
    // setDisplay(Display);
  };
  useEffect(() => {
    if (windowWidth !== undefined) {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    }
  }, []);
  const handleLocation = () => {
    setActive(Location.pathname.toLowerCase());
  };
  useEffect(() => {
    handleLocation();
  }, []);
  const handleLogout = () => {
    setModal(true);
  };
  const logOut = () => {
    removeItem("role");
    removeItem("user");
    removeItem("token");
    history.push = "/logIn";
  };
  // const Location = "pathname";
  // console.log("pass", props.location.pathname);
  useEffect(() => {
    setIslogged(jwtToken);
  }, [isLogged]);
  const toggle = (tab, ulr) => {
    if (active !== tab) {
      setActive(tab);
      history.push(ulr);
    }
  };
  const toggleTab = () => {
    setActiveTab(!activeTab);
    setDisplay(!Display);
  };
  const toggleCollapse = () => {
    setstate(!state);
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const sidenavToggle = () => {
    setSideNavLeft(!sideNavLeft);
  };
  return (
    <Fragment>
      <Modals
        modal={Modal}
        setmodal={setModal}
        setChange={logOut}
        title={"خارج شدن از حساب کاربری"}
        message={"آیامطئنید؟"}
      />
      {activeTab && windowWidth <= 768 && (
        <>
          <TodoSidebar
            active={active}
            handleToggle={toggle}
            avtiveTab={activeTab}
            setActiveTab={setActiveTab}
            handleChange={toggleTab}
          />
        </>
      )}
      <section className="header">
        <Navbar className="header-navbar navbar-expand-lg  navbar-with-menu   ">
          <div className="navbar-wrapper">
            <div className="navbar-container content">
              <div className="navbar-collapse" id="navbar-mobile">
                <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                  <Nav
                    tabs
                    className="justify-content-center HeaderNav box-shadow-0"
                  >
                    {windowWidth <= 768 ? (
                      <NavItem>
                        <NavLink
                          className={`bg-transparent ${classnames({
                            active: activeTab,
                          })}
                      `}
                          style={{ display: `${Display ? "block" : "none"}` }}
                          onClick={() => {
                            toggleTab();
                          }}
                        >
                          <Menu className="ficon" />
                        </NavLink>
                      </NavItem>
                    ) : (
                      <Fragment>
                        <NavItem className="mx-2">
                          <NavLink
                            className={`bg-transparent ${classnames({
                              active: active === "/",
                            })}
                        
                      `}
                            onClick={() => {
                              toggle("/", "/");
                            }}
                          >
                            خانه
                          </NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                          <NavLink
                            className={`bg-transparent ${classnames({
                              active: active === "/courses",
                            })}
                        
                      `}
                            onClick={() => {
                              toggle("/courses", "/courses");
                            }}
                          >
                            آموزش
                          </NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                          <NavLink
                            className={`bg-transparent ${classnames({
                              active: active === "/blogs",
                            })}
                        
                      `}
                            onClick={() => {
                              toggle("/blogs", "/Blogs");
                            }}
                          >
                            بلاگ ها
                          </NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                          <NavLink
                            className={`bg-transparent ${classnames({
                              active: active === "m",
                            })}
                        
                      `}
                            onClick={() => {
                              toggle("m", "/");
                            }}
                          >
                            مالی
                          </NavLink>
                        </NavItem>
                        <NavItem className="mx-2">
                          <NavLink
                            className={`bg-transparent ${classnames({
                              active: active === "t",
                            })}
                        
                      `}
                            onClick={() => {
                              toggle("t", "/");
                            }}
                          >
                            تماس با ما
                          </NavLink>
                        </NavItem>
                        {/* <NavItem className="mx-2">
                    <NavLink
                      className={classnames({
                        active: active === "5",
                      })}
                      onClick={() => {
                        toggle("5", "others");
                      }}
                    >
                      دیگر
                    </NavLink>
                  </NavItem> */}
                      </Fragment>
                    )}
                  </Nav>
                  <TabContent activeTab={active} />
                </div>
                {isLogged === true && role === "student" ? (
                  <ul className="nav navbar-nav float-right">
                    <UncontrolledDropdown
                      tag="li"
                      className="dropdown-userborder"
                    >
                      <DropdownToggle
                        tag="a"
                        data-toggle="dropdown"
                        className=" nav-link dropdown-user-link"
                      >
                        <div className="user-nav d-sm-flex ">
                          <span className="user-name text-bold-600">
                            mohsen esfandiari{" "}
                          </span>
                          {/* <span className="user-status"></span> */}
                        </div>
                        <span>
                          <img
                            src={
                              require("../../assets/img/profile/pages/page-01.jpg")
                                .default
                            }
                            className="round"
                            height="40"
                            width="40"
                            alt="avatar"
                          />
                          {/* <span className="avatarStatus-online"></span> */}
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="navDropMenu" right>
                        <DropdownItem tag="a" href="/student/dashboard">
                          <User size={14} className="mr-50" />
                          <span className="align-bottom"> پنل دانشجو</span>
                        </DropdownItem>

                        <DropdownItem divider />
                        <DropdownItem tag="a" onClick={() => handleLogout()}>
                          <Power size={14} className="mr-50" />
                          <span> خروج</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ul>
                ) : (
                  <>
                    <NavItem className="nav-item mx-1 d-none d-lg-block ">
                      <Link to="/logIn">ورود</Link>
                    </NavItem>{" "}
                    <NavItem className="nav-item mx-1 d-none d-lg-block">
                      <Link to="/register">ثبت نام</Link>
                    </NavItem>
                  </>
                )}
              </div>
            </div>
          </div>
        </Navbar>
      </section>
    </Fragment>
  );
};

export default Header;
