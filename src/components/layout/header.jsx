import React, { Component, Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getItem,
  removeItem,
  clearStorage,
} from "../../services/storage/storage";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBIcon,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBSideNavLink,
} from "../../assets/css/mdbreact";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  UncontrolledDropdown,
  Badge,
  Media,
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
} from "react-feather";
import "../../assets/css/manual/layout/Header.css";
const Header = () => {
  const [state, setstate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sideNavLeft, setSideNavLeft] = useState(false);
  const [isLogged, setIslogged] = useState(false);
  const jwtToken = getItem("token") ? true : false;
  const role = getItem("role");
  // const Location = "pathname";
  // console.log("pass", props.location.pathname);
  useEffect(() => {
    setIslogged(jwtToken);
  }, [isLogged]);
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
    <section className="header">
      <div style={{ display: "none" }} className="">
        <MDBNavbar className="header-navbar" expand="md">
          <MDBNavbarBrand className="img-fluid navbar-brand">
            <Link to="/">
              <img
                src={
                  require("../../assets/images/logo/logo-primary.png").default
                }
              ></img>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse
            id="navbarCollapse3"
            className="navbar-collaps"
            isOpen={state}
            navbar
          >
            <MDBNavbarNav className="navbarNav-left" left>
              <MDBNavItem className="navItem mx-2 " active>
                <MDBNavLink to="/">خانه</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navItem mx-2 ">
                <MDBNavLink to="/courses">دوره ها</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem className="navItem mx-2 ">
                <MDBNavLink to="/news">اخبار</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="mr-3" right>
              {isLogged === true && role === "student" ? (
                <MDBNavItem className="">
                  <MDBDropdown>
                    <MDBDropdownToggle
                      className="navItem-img mx-1 img-circle"
                      nav
                      caret
                    >
                      <img
                        src={
                          require("../../assets/images/pages/landingPage/62.jpg")
                            .default
                        }
                      ></img>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-menu dropdown-menu-right dropdown-default  navDropMenu"></MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              ) : (
                <>
                  {" "}
                  <MDBNavItem className=" mx-1 ">
                    <MDBNavLink to="/logIn">ورود</MDBNavLink>
                  </MDBNavItem>{" "}
                  <MDBNavItem className=" mx-1 ">
                    <MDBNavLink to="/register">ثبت نام</MDBNavLink>
                  </MDBNavItem>
                  {/* {Location !== "/admin/login" ||
                    (Location !== "/logIn" && (
                      <MDBNavItem className=" mx-1 ">
                        <MDBNavLink to="/logIn">ورود</MDBNavLink>
                      </MDBNavItem>
                    ))}
                  {Location !== "/admin/register" ||
                    (Location !== "/register" && (
                      <MDBNavItem className=" mx-1 ">
                        <MDBNavLink to="/register">ثبت نام</MDBNavLink>
                      </MDBNavItem>
                    ))} */}
                </>
              )}
              <div className="header-dropdon"></div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
      <Navbar className="header-navbar navbar-expand-lg  navbar-with-menu   ">
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="navbar-collapse" id="navbar-mobile">
              <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                <ul className="navbar-nav d-xl-none">
                  <NavItem className="mobile-menu mr-auto">
                    <NavLink className="nav-menu-main menu-toggle hidden-xs is-active">
                      <Menu className="ficon" />
                    </NavLink>
                  </NavItem>
                </ul>

                <ul className="nav navbar-nav bookmark-icons">
                  <NavItem
                    className="navItem nav-item mx-3 d-none d-lg-block"
                    active={true}
                  >
                    <NavLink to="/" id="appTodo">
                      {/* <Home size={21} /> */}
                      <h4>خانه</h4>
                    </NavLink>
                    <span></span>

                    {/* <UncontrolledTooltip placement="bottom" target="appTodo">
                      Todo
                    </UncontrolledTooltip> */}
                  </NavItem>
                  <NavItem className="navItem nav-item mx-3 d-none d-lg-block">
                    <NavLink to="/" id="appChat">
                      {/* <MessageSquare size={21} /> */}
                      <h4>آموزش</h4>
                    </NavLink>
                    <span></span>
                  </NavItem>
                  <NavItem className="navItem nav-item mx-3 d-none d-lg-block">
                    <NavLink to="/" id="appMail">
                      {/* <Mail size={21} /> */}
                      <h4>مالی</h4>
                    </NavLink>
                    <span></span>
                  </NavItem>
                  <NavItem className="navItem nav-item mx-3 d-none d-lg-block">
                    <NavLink to="/courses" id="appCalendar">
                      {/* <Calendar size={21} /> */}
                      <h4>دوره ها</h4>
                    </NavLink>
                    <span></span>

                    {/* <UncontrolledTooltip
                      placement="bottom"
                      target="appCalendar"
                    >
                      Calendar
                    </UncontrolledTooltip> */}
                  </NavItem>
                  <NavItem className="navItem nav-item mx-3 d-none d-lg-block">
                    <NavLink to="/">
                      {/* <Star className="text-warning" size={21} /> */}
                      <h4>تماس با ما</h4>
                    </NavLink>
                    <span></span>
                  </NavItem>
                </ul>
              </div>
              {isLogged === true && role === "admin" ? (
                <ul className="nav navbar-nav float-right">
                  <UncontrolledDropdown
                    tag="li"
                    className="dropdown-user nav-item"
                  >
                    <DropdownToggle
                      tag="a"
                      data-toggle="dropdown"
                      className=" nav-link dropdown-user-link"
                    >
                      <div className="user-nav d-sm-flex d-none">
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
                        <span className="avatarStatus-online"></span>
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="navDropMenu" right>
                      <DropdownItem tag="a" href="#">
                        <User size={14} className="mr-50" />
                        <span className="align-bottom"> پنل دانشجو</span>
                      </DropdownItem>

                      <DropdownItem divider />
                      <DropdownItem tag="a" href="#">
                        <Power size={14} className="mr-50" />
                        <span> خروج</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ul>
              ) : (
                <>
                  <NavItem className="nav-item mx-1 d-none d-lg-block ">
                    <NavLink to="/logIn">ورود</NavLink>
                  </NavItem>{" "}
                  <NavItem className="nav-item mx-1 d-none d-lg-block">
                    <NavLink to="/register">ثبت نام</NavLink>
                  </NavItem>
                </>
              )}
            </div>
          </div>
        </div>
      </Navbar>
    </section>
  );
};

export default Header;
