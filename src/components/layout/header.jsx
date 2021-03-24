import React, { Component, Fragment, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
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
  Edit,
  Trash,
  // ChevronDown,
  Plus,
  Trash2,
  Bars,
  // Check,
  // ChevronLeft,
  // ChevronRight
} from "react-feather";
import "../../assets/css/manual/layout/Header.css";

const Header = () => {
  const [state, setstate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [sideNavLeft, setSideNavLeft] = useState(false);
  const [isLogged, setIslogged] = useState(false);
  const jwtToken = getItem("token") ? true : false;
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
      <div className="">
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
              {isLogged === false ? (
                <>
                  <MDBNavItem className=" mx-1 ">
                    <MDBNavLink to="/logIn">ورود</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem className=" mx-1 ">
                    <MDBNavLink to="/register">ثبت نام</MDBNavLink>
                  </MDBNavItem>
                </>
              ) : (
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
              )}
              <div className="header-dropdon"></div>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    </section>
  );
};

export default Header;
