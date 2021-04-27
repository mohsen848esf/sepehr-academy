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
import "../../../assets/css/manual/pages/OurServices.css";
const OurServices = () => {
  return (
    <div className="container my-4 mb-4 OurServices-container">
      <div className="OurServices-title">
        <h2>خدمات ما</h2>
        <span> تمام آنچه شما نیاز دارید </span>
      </div>
      <hr />
      <div className="container row mt-5  OurServices-row">
        <div className="col-lg-6 col-md-6 col-sm-10 col-xs-10 text-justify OurServices-rowCol">
          <div className="row OurServices-itemsRow">
            <div className="col-lg-6 col-md-6 col-sm-6 OurServices-item ">
              <MDBCard className="OurServices-itemCard">
                <MDBCardImage
                  className="OurServices-itemCard-img  img-fluid"
                  src={
                    require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                      .default
                  }
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="OurServices-itemCard-title">
                    امتحان
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 OurServices-item ">
              <MDBCard className="OurServices-itemCard">
                <MDBCardImage
                  className="OurServices-itemCard-img  img-fluid"
                  src={
                    require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                      .default
                  }
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="OurServices-itemCard-title">
                    مشاوره
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>

          <div className="row OurServices-itemsRow">
            <div className="col-lg-6 col-md-6 OurServices-item ">
              <MDBCard className="OurServices-itemCard">
                <MDBCardImage
                  className="OurServices-itemCard-img  img-fluid"
                  src={
                    require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                      .default
                  }
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="OurServices-itemCard-title">
                    مدرک معتر
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col-lg-6 col-md-6 OurServices-item ">
              <MDBCard className="OurServices-itemCard">
                <MDBCardImage
                  className="OurServices-itemCard-img img-fluid"
                  src={
                    require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                      .default
                  }
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle className="OurServices-itemCard-title">
                    فرصت های شغلی
                  </MDBCardTitle>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-6  text-justify OurServices-img">
          <img
            className=" img-fluid"
            src={
              require("../../../assets/images/pages/landingPage/Online-world.gif")
                .default
            }
            waves
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
