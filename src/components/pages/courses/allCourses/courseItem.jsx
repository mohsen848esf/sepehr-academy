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
} from "reactstrap";
import img1 from "../../../../assets/img/pages/content-img-1.jpg";
import img2 from "../../../../assets/img/pages/content-img-2.jpg";
import img3 from "../../../../assets/img/pages/content-img-3.jpg";
import Bg from "../../../../assets/images/pages/landingPage/images.png";

const CourseItem = (course) => {
  // const { teacher , } = courses
  const maxCapacity =
    course.students.length > course.capacity
      ? 50 - course.capacity > 40
        ? 10
        : 50
      : course.capacity;
  const percent = parseInt((course.students.length * 100) / maxCapacity) + 1;

  const image = [img1, img2, img3];
  const index = course.capacity % 3;
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
                نام دوره :{" "}
              </span>
              <span className="mx-2" title={course.course.courseName}>
                {" "}
                {course.course.courseName.length > 20
                  ? course.course.courseName.substr(0, 20) + "..."
                  : course.course.courseName}
              </span>
            </div>
            <div className="d-flex justify-content-start mt-1">
              <span className="float-left font-weight-bold mb-25 ">
                {" "}
                نام استاد :{" "}
              </span>
              <span className="mx-2">{course.teacher.fullName}</span>
            </div>
            <div className="d-flex justify-content-between mt-1">
              <small className="float-left font-weight-bold mb-25 ">
                {" "}
                ظرفیت{" "}
              </small>
              {/* <small className="float-left font-weight-bold mb-25">
                {course.students.length}
              </small>
              <small className="float-left font-weight-bold mb-25">
                {maxCapacity}
              </small> */}
            </div>
            <Progress className=" " value={percent}>
              {percent + "%"}
            </Progress>
            <div className="card-btns d-flex justify-content-between mt-2">
              <Button.Ripple
                className="gradient-light-primary text-white"
                style={{ boxShadow: "none" }}
              >
                {" "}
                <Link
                  to={`/course/${course.course._id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  بیشتر
                </Link>
              </Button.Ripple>
            </div>
          </CardBody>
        </Card>
      </Col>

      <div className="col-lg-4 col-md-6 my-2" style={{ display: "none" }}>
        <MDBCard className="h-100 " style={{ width: "20rem" }}>
          <MDBCardImage
            className="img-fluid mx-auto  w-75"
            // style={{ border: "1px solid red" }}
            src={
              require("../../../../assets/images/pages/landingPage/angular.png")
                .default
            }
            waves
          />
          <MDBCardBody>
            <MDBCardTitle title={course.course.courseName}>
              {course.course.courseName.length > 20
                ? course.course.courseName.substr(0, 20) + "..."
                : course.course.courseName}
            </MDBCardTitle>
            <table className="table table-sm">
              <tbody>
                <tr>
                  <th scope="col">مدرس:</th>
                  <td>{course.teacher.fullName}</td>
                  <th scope="col">قیمت:</th>
                  <td>{"تومان" + " " + course.cost}</td>
                </tr>
              </tbody>
            </table>
            <MDBBtn>
              {" "}
              <Link
                to={`/course/${course.course._id}`}
                className="dark"
                style={{ textDecoration: "none" }}
              >
                بیشتر
              </Link>
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        {/* <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay="white-slight"
              className="card-img-top"
              src={
                require("../../../../assets/images/pages/landingPage/angular.png")
                  .default
              }
              alt="food"
            />
          </MDBView>

          <MDBCardBody>
            <h5 className="pink-text">
              <MDBIcon icon="utensils" />
            </h5>

            <MDBCardTitle className="font-weight-bold">
              {course.course.courseName.length > 20
                ? course.course.courseName.substr(0, 20) + "..."
                : course.course.courseName}
            </MDBCardTitle>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

            <MDBBtn color="unique">Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
       */}
      </div>
    </Fragment>
  );
};

export default CourseItem;
