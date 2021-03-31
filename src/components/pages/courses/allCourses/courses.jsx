import React, { Component } from "react";
import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
} from "../../../../services/student.api";
import Pagination from "../../../layout/pagination";
import SearchBox from "../../../layout/searchBox";
import { paginate } from "../../../layout/utils/paginate";
import { Link } from "react-router-dom";
import _ from "lodash";
import CourseItem from "./courseItem";
import "../../../../assets/css/manual/pages/AllCourses.css";
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
} from "../../../../assets/css/mdbreact";

class Courses extends Component {
  state = {
    courses: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 6,
  };
  async componentDidMount() {
    const allCourses = await getCourses();
    this.setState({ courses: allCourses });
  }
  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };
  handlePagechange = (page) => {
    this.setState({ currentPage: page });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      searchQuery,
      courses: allCourses,
    } = this.state;

    let filtered = allCourses;
    if (searchQuery) {
      filtered = allCourses.filter(
        (c) =>
          c.teacher.fullName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          c.course.courseName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.course.topics.find((t) =>
            t.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }
    const sorted = _.orderBy(filtered);

    const courses = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: courses };
  };
  render() {
    // const {courses :AllCourses} = this.state
    // const { length } = this.state.courses
    // const allcourses= paginate( AllCourses, this.state.currentPage , this.state.pageSize)
    const { totalCount, data: courses } = this.getPagedData();

    return (
      <div className="container">
        <div className=" mt-5 mb-5 d-flex justify-content-center">
          <h1>دوره ها</h1>
          <hr />
        </div>
        {/* {courses.map((course) => (
            <CourseItem {...course} />
          ))} */}
        <div className="row " style={{ width: "50%", margin: "0 auto" }}>
          <SearchBox
            value={this.state.searchQuery}
            onChange={this.handleSearch}
          />
        </div>
        <div className="row my-5 courses">
          {courses.length === 0 ? (
            <p className="d-flex justify-content-center">
              دوره مورد نظر یافت نشد
            </p>
          ) : (
            courses.map((course) => <CourseItem {...course} />)
          )}
        </div>
        <div className=" my-5 d-flex justify-content-center">
          <div>
            <Pagination
              itemsCount={totalCount}
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePagechange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
