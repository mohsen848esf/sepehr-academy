import React, { Component, Fragment } from "react";
import _ from "lodash";

import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
} from "../../../services/student.api";
import {
  getUserID,
  getCurrentUser,
  postCurrentUser,
} from "../../../services/storage/storage";
import CoursesTable from "./coursesTable";

import Pagination from "../../layout/pagination";
import SearchBox from "../../layout/searchBox";
import { paginate } from "../../layout/utils/paginate";
import "../../../assets/css/manual/user/panel-all-courses.css";
import ReactIcone from "../../../assets/images/pages/landingPage/React.png";

class CoursesList extends Component {
  state = {
    courses: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 2,
    sortColumn: { path: "course.courseName", order: "asc" },
  };

  async componentDidMount() {
    const userId = getUserID();
    const allCourses = await getCourses();
    const userCourses = allCourses.filter((co) =>
      co.students.find((st) => st._id !== "5e72a9b3a92daf0013caabdb")
    );
    this.setState({ courses: allCourses });
  }
  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };
  handlePagechange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      searchQuery,
      sortColumn,
      courses: allCourses,
    } = this.state;

    let filtered = allCourses;
    if (searchQuery) {
      filtered = allCourses.filter(
        (c) =>
          c.teacher.fullName.startsWith(searchQuery) ||
          c.course.courseName.startsWith(searchQuery) ||
          c.course.topics.find((t) => t.startsWith(searchQuery))
      );
    }
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const courses = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: courses };
  };
  render() {
    const { length: count } = this.state.courses;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { totalCount, data: List } = this.getPagedData();
    const { selectedTab } = this.props;
    return (
      <Fragment>
        {selectedTab["_id"] === "courses-list" && count === 0 ? (
          <p>هیچ دوره ای ثبت نشده است.</p>
        ) : (
          <div
            className={
              selectedTab["_id"] === "courses-list"
                ? "tab-pane fade allCourses-panel show active"
                : "tab-pane fade allCourses-panel "
            }
            id="v-pills-allCourses"
            role="tabpanel"
            aria-labelledby="v-pills-allCourses-tab"
          >
            <header className="panel-header">
              <SearchBox
                value={this.state.searchQuery}
                onChange={this.handleSearch}
              />
            </header>
            <h4>دوره های ثبت شده{" " + count}</h4>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-10 table-responsive">
                  <CoursesTable
                    courses={List}
                    sortColumn={sortColumn}
                    onSort={this.handleSort}
                    tab={selectedTab["_id"]}
                  />
                </div>
              </div>
              <Pagination
                itemsCount={totalCount}
                pageSize={this.state.pageSize}
                currentPage={this.state.currentPage}
                onPageChange={this.handlePagechange}
              />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default CoursesList;
