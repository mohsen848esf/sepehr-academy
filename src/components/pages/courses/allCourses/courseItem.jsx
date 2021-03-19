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
import Bg from "../../../../assets/images/pages/landingPage/images.png";
const CourseItem = (course) => {
  // const { teacher , } = courses
  return (
    <Fragment>
      <div className="col-lg-4 col-md-6 my-2">
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
      {/* <div className="card shadow-sm" style={{ width: "18rem" }}>
                <div className="card-img">
                <img className="" src={require("../../../../assets/images/pages/landingPage/angular.png").default} alt=""/>
                </div>
                <div className="card-body">
                <h5 className="card-title">{course.course.courseName}</h5>
                <table className="table table-sm">
                    <tbody>
                    <tr>
                        <th scope="col">مدرس:</th>
                        <td>{course.teacher.fullName}</td>
                        <th scope="col">امتیاز:</th>
                        <td>{course.capacity}<i className="fa fa-star-half-full"></i></td>
                    </tr>
                    </tbody>
                </table>    
                <Link to={`/course/${course.course._id}`} className="btn btn-primary">بیشتر</Link>
                </div>
            </div> */}
    </Fragment>
  );
};

export default CourseItem;
