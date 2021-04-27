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
import "../../../assets/css/manual/pages/Assortment.css";
const Assortment = () => {
  return (
    <div className="container my-4 Assortment-container">
      <div className="Assortment-title">
        <h2>دسته بندی ها</h2>
        <span>گستره وسیعی از موضوعات</span>
      </div>
      <hr />
      <div className="container row mt-5 d-flex justify-content-center Assortment-row">
        <div className="col-lg-3 col-md-6  Assortment-item ">
          <MDBCard className="Assortment-itemCard">
            <MDBCardImage
              className="Assortment-img img-fluid"
              src={
                require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                  .default
              }
              waves
            />
            <MDBCardBody>
              <MDBCardTitle className="Assortment-itemCard-title">
                کامپیوتر
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="col-lg-3 col-md-6 Assortment-item ">
          <MDBCard className="Assortment-itemCard">
            <MDBCardImage
              className="Assortment-img img-fluid"
              src={
                require("../../../assets/images/pages/landingPage/Assortment/web-maintenance.png")
                  .default
              }
              waves
            />
            <MDBCardBody>
              <MDBCardTitle className="Assortment-itemCard-title">
                حسابداری
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="col-lg-3 col-md-6 Assortment-item ">
          <MDBCard className="Assortment-itemCard">
            <MDBCardImage
              className="Assortment-img img-fluid"
              src={
                require("../../../assets/images/pages/landingPage/Assortment/ux.png")
                  .default
              }
              waves
            />
            <MDBCardBody>
              <MDBCardTitle className="Assortment-itemCard-title">
                طراحی
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="col-lg-3 col-md-6 Assortment-item ">
          <MDBCard className="Assortment-itemCard">
            <MDBCardImage
              className="Assortment-img img-fluid"
              src={
                require("../../../assets/images/pages/landingPage/Assortment/idea.png")
                  .default
              }
              waves
            />
            <MDBCardBody>
              <MDBCardTitle className="Assortment-itemCard-title">
                برق
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
      <div className="Assortment-circle">
        <h2>دسته بندی ها </h2>
        <span></span>
      </div>
      <div className="circle-borderBox">
        <div className="circle-border"></div>
      </div>
      <div className="circle-items">
        <div className="circle-item img-fluid">
          <img
            src={
              require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                .default
            }
          />
          <h5>کامپیوتر</h5>
        </div>
      </div>
    </div>
  );
};

export default Assortment;
