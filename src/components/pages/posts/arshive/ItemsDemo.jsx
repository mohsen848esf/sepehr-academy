import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
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
  MDBView,
} from "../../../../assets/css/mdbreact";
import {
  Card,
  CardBody,
  CardImg,
  Row,
  Col,
  Button,
  Progress,
  Badge,
} from "reactstrap";
import img1 from "../../../../assets/img/pages/content-img-1.jpg";
import img2 from "../../../../assets/img/pages/content-img-2.jpg";
import img3 from "../../../../assets/img/pages/content-img-3.jpg";
import Bg from "../../../../assets/images/pages/landingPage/images.png";

const BlogsItemGrid = ({ Blog }) => {
  // const { teacher , } = Blogs
  const image = [img1, img2, img3];
  const index = parseInt(Blog.title.length % 3);
  return (
    <Fragment>
      <Col lg="4" md="6" sm="6">
        <Card>
          <CardBody>
            <CardImg
              className="img-fluid mb-2"
              src={image[index]}
              alt="card image cap"
            />{" "}
            <div className="d-flex justify-content-start mt-1">
              <span className="float-left font-weight-bold mb-25 ">
                {" "}
                تیتر خبر :{" "}
              </span>
              <span className="mx-2" title={Blog.title}>
                {" "}
                {Blog.title.length > 20
                  ? Blog.title.substr(0, 20) + "..."
                  : Blog.title}
              </span>
            </div>
            <div className="d-flex justify-content-start mt-1">
              {/* <p className="float-left font-weight-bold mb-25 ">
                {" "}
                {Blog.text.length > 20
                  ? Blog.text.substr(0, 20) + "..."
                  : Blog.text}{" "}
              </p> */}
              <span className="float-left font-weight-bold mb-25 ">
                {" "}
                متن خبر :{" "}
              </span>
              <span className="mx-2">
                {" "}
                {Blog.text.length > 20
                  ? Blog.text.substr(0, 20) + "..."
                  : Blog.text}{" "}
              </span>
            </div>
            <div className="d-flex justify-content-start mt-3 mb-4">
              {/* <small className="float-left font-weight-bold mb-25 mr-3 ">
                {" "}
                دسته بندی{" "}
              </small>
              <small className="">{Blog.category}</small> */}
            </div>
            <div className="card-btns d-flex justify-content-between mt-2">
              <Button.Ripple
                className="gradient-light-primary text-white"
                style={{ boxShadow: "none" }}
              >
                {" "}
                <Link
                  to={`/Blog/${Blog._id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  مشاهده خبر
                </Link>
              </Button.Ripple>
              <div className="mt-2">
                <Badge className="py-2 px-3 black" color="">
                  {Blog.category}{" "}
                </Badge>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BlogsItemGrid;
