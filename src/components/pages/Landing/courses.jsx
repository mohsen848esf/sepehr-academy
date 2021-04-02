import React, { useEffect, useState } from "react";
import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
} from "../../../services/student.api";
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
import CourseSlider from "./slider/CourseSlider";
import img1 from "../../../assets/img/pages/content-img-1.jpg";
import img2 from "../../../assets/img/pages/content-img-2.jpg";
import img3 from "../../../assets/img/pages/content-img-3.jpg";
import img4 from "../../../assets/img/pages/content-img-2.jpg";
import "../../../assets/css/manual/pages/Courses.css";
import { NavLink, useHistory } from "react-router-dom";
const Courses = () => {
  const [AllCourses, setAllCourses] = useState([]);
  const getAllCourses = async () => {
    const allCourses = await getCourses();
    setAllCourses(allCourses);
  };
  useEffect(() => {
    getAllCourses();
  }, []);
  const history = useHistory();
  const image = [img1, img2, img3, img4];
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
            {AllCourses.slice(0, 2).map((course, i) => (
              <div className="col-lg-6 col-md-5 Courses-item ">
                <MDBCard
                  className="Courses-itemCard"
                  onClick={() => history.push(`/course/${course.course._id}`)}
                >
                  <div className="Courses-itemCard-imageBox">
                    <MDBCardImage
                      className="Courses-itemCard-img  img-fluid box-shadow-1"
                      src={image[i]}
                      waves
                    />
                  </div>
                  <MDBCardBody>
                    <div className="Courses-itemCard-title">
                      <h4> {course.course.courseName}</h4>
                      <span>{course.teacher.fullName}</span>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </div>

          <div className="row Courses-itemsRow">
            {AllCourses.slice(2, 4).map((course, i) => (
              <div className="col-lg-6 col-md-5 Courses-item ">
                <MDBCard
                  className="Courses-itemCard"
                  onClick={() => history.push(`/course/${course.course._id}`)}
                >
                  <div className="Courses-itemCard-imageBox">
                    <MDBCardImage
                      className="Courses-itemCard-img  img-fluid box-shadow-1"
                      src={image[i + 2]}
                      waves
                    />
                  </div>
                  <MDBCardBody>
                    <div className="Courses-itemCard-title">
                      <h4> {course.course.courseName}</h4>
                      <span>{course.teacher.fullName}</span>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
            ))}
          </div>

          <MDBBtn className="Courses-moreItem mx-auto"> بیشتر </MDBBtn>
        </div>
        {/* <Col md="6" sm="10" className="CourseSliderCol-box">
          <CourseSlider />
        </Col> */}
      </div>
    </div>
  );
};

export default Courses;
