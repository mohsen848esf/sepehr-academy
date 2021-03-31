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
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  Button,
  Progress,
} from "reactstrap";
import img1 from "../../../assets/img/pages/content-img-1.jpg";
import img2 from "../../../assets/img/pages/content-img-2.jpg";
import img3 from "../../../assets/img/pages/content-img-3.jpg";
import "../../../assets/css/manual/pages/Courses.css";
import { NavLink } from "react-router-dom";
const Courses = () => {
  return (
    <div className="container my-4 mb-4 Courses-container">
      <div className="Courses-title">
        <h2>دوره ها</h2>
        <span> بهترین دوره ها را با ما تجربه کنید </span>
      </div>
      <hr />
      <div className="container row mt-5  Courses-row">
        <div className="col-lg-6 col-md-5  text-justify Courses-img">
          <img
            className=" img-fluid"
            src={
              require("../../../assets/images/pages/landingPage/Online-world.gif")
                .default
            }
            waves
          />
        </div>
        <div className="col-lg-6  col-md-7 col-sm-10 text-justify Courses-rowCol">
          <div className="row Courses-itemsRow">
            <div className="col-lg-6 col-md-5 Courses-item ">
              <MDBCard className="Courses-itemCard">
                <div className="Courses-itemCard-imageBox">
                  <MDBCardImage
                    className="Courses-itemCard-img  img-fluid"
                    src={
                      require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                        .default
                    }
                    waves
                  />
                </div>
                <MDBCardBody>
                  <div className="Courses-itemCard-title">
                    <h4> امتحان</h4>
                    <span>مدرس</span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col-lg-6 col-md-5 Courses-item ">
              <NavLink style={{ textDecoration: "none" }} to="/courses">
                <MDBCard className="Courses-itemCard">
                  <div className="Courses-itemCard-imageBox">
                    <MDBCardImage
                      className="Courses-itemCard-img  img-fluid"
                      src={img3}
                      waves
                    />
                  </div>

                  <MDBCardBody>
                    <div className="Courses-itemCard-title">
                      <h4> مشاوره</h4>
                      <span>مدرس</span>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </NavLink>
            </div>
          </div>

          <div className="row Courses-itemsRow">
            <div className="col-lg-6 col-md-5 Courses-item ">
              <MDBCard className="Courses-itemCard">
                <div className="Courses-itemCard-imageBox">
                  <MDBCardImage
                    className="Courses-itemCard-img  img-fluid"
                    src={
                      require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                        .default
                    }
                    waves
                  />
                </div>

                <MDBCardBody>
                  <div className="Courses-itemCard-title">
                    <h4> مدرک معتر</h4>
                    <span>مدرس</span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="col-lg-6 col-md-5 Courses-item ">
              <MDBCard className="Courses-itemCard">
                <div className="Courses-itemCard-imageBox">
                  <MDBCardImage
                    className="Courses-itemCard-img img-fluid"
                    src={
                      require("../../../assets/images/pages/landingPage/Assortment/laptop.png")
                        .default
                    }
                    waves
                  />
                </div>

                <MDBCardBody>
                  <div className="Courses-itemCard-title">
                    <h4>فرصت های شغلی</h4>
                    <span>مدرس</span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>

          <MDBBtn className="Courses-moreItem mx-auto"> بیشتر </MDBBtn>
        </div>
      </div>
    </div>
  );
};

export default Courses;
