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
import "../../../assets/css/manual/pages/WithUs.css";
const WithUs = () => {
  return (
    <div className="container mb-4 withUs-container">
      <div className="row mt-5 mb-4">
        <div className="col-lg-6 ml-5 text-justify withUs-title">
          <h1>با ما تا اعماق دریای مهارت ها پیش بروید</h1>
          <hr />
          <h3>
            اموزشگاه سپهر یکی از بهترین اموزشگاه های استان مازندران است.این
            اموزشگاه با جمع کردن بهترین اساتید مهارت های دانشجویان را بیشتر کند
          </h3>
          <MDBBtn className="startWithUs mx-auto" gradient="purple">
            {" "}
            با ما شروع کنید{" "}
          </MDBBtn>
        </div>
        <div className="col-lg-5">
          <img
            className="img-fluid"
            src={
              require("../../../assets/images/pages/landingPage/Online-world.gif")
                .default
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WithUs;
