import React from "react";
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
  MDBCardUp,
  MDBAvatar,
  MDBRotatingCard,
  MDBSelect,
} from "../../../assets/css/mdbreact";
import "../../../assets/css/manual/pages/TopProfessors.css";

const TopProfessors = () => {
  return (
    <div className="container my-4 mb-4 TopProfessors-container">
      <div className="TopProfessors-title">
        <h2>اساتید برتر </h2>
        <span> بهترین اساتید مازندران </span>
      </div>
      <hr />
      <div className="container row TopProfessorsRow">
        <div className="col-lg-5 col-md-5 TopProfessorsRowCol">
          <div className="TopProfessors-Management">
            <div className="TopProfessors-bgImage"></div>
            <img
              className="TopProfessors-img"
              src={
                require("../../../assets/images/pages/landingPage/section_5/photo3.png")
                  .default
              }
              alt=""
            />
            <div className="TopProfessorsManagement-Des">
              <h2>دکتر بحر العلوم</h2>
              <span>مدیریت</span>
              <p>
                مدرس در آموزشگاه ، مدرس در دانشگاه علم و فناوری بهشهر ، مدرس
                دوره های وب
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-7 p-0 TopProfessorsRowCol">
          <div className="row TopProfessors-teacherRow">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 TopProfessors-teacher">
              <div className="TopProfessors-teacherItem">
                <div className="TopProfessors-teacher-bgImage"></div>
                <img
                  className="TopProfessors-teacher-img"
                  src={
                    require("../../../assets/images/pages/landingPage/section_5/photo3.png")
                      .default
                  }
                  alt=""
                />
                <div className="TopProfessorsTeacher-Des">
                  <h4> آرمین اسلامی </h4>
                  <p>توسعه دهنده بک اند</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-6  TopProfessors-teacher">
              <div className="TopProfessors-teacherItem">
                <div className="TopProfessors-teacher-bgImage"></div>
                <img
                  className="TopProfessors-teacher-img"
                  src={
                    require("../../../assets/images/pages/landingPage/section_5/photo3.png")
                      .default
                  }
                  alt=""
                />
                <div className="TopProfessorsTeacher-Des">
                  <h4> آرمین اسلامی </h4>
                  <p>توسعه دهنده بک اند</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-6  TopProfessors-teacher">
              <div className="TopProfessors-teacherItem">
                <div className="TopProfessors-teacher-bgImage"></div>
                <img
                  className="TopProfessors-teacher-img"
                  src={
                    require("../../../assets/images/pages/landingPage/section_5/photo3.png")
                      .default
                  }
                  alt=""
                />
                <div className="TopProfessorsTeacher-Des">
                  <h4> آرمین اسلامی </h4>
                  <p>توسعه دهنده بک اند</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-6  TopProfessors-teacher">
              <div className="TopProfessors-teacherItem">
                <div className="TopProfessors-teacher-bgImage"></div>
                <img
                  className="TopProfessors-teacher-img"
                  src={
                    require("../../../assets/images/pages/landingPage/section_5/photo3.png")
                      .default
                  }
                  alt=""
                />
                <div className="TopProfessorsTeacher-Des">
                  <h4> آرمین اسلامی </h4>
                  <p>توسعه دهنده بک اند</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProfessors;
