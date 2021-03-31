import React, { useState, useEffect } from "react";
import _ from "lodash";
import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
  removeStudentFromTerm,
  addStudentToTerm,
} from "../../../services/student.api";

import Pagination from "../../layout/pagination";
import SearchBox from "../../layout/searchBox";
import { paginate } from "../../layout/utils/paginate";
import { getUserID } from "../../../services/storage/storage";
import Modals from "../../layout/modal";

import CoursesTable from "./CoursesTable";
import "./StudentCourses.css";
import { Fragment } from "react";

const AllCoursesList = ({ Data, setData, AllDataCount }) => {
  const [ModalAddTerm, setModalAddTerm] = useState(false);
  const [AddTermId, setAddTermId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  console.log("object data", Data);
  const AddStudentToTerm = (termId) => {
    setModalAddTerm(true);
    setAddTermId(termId);
  };
  const doAddTerm = async () => {
    console.log(AddTermId);
    if (!AddTermId) {
      return;
    }
    const studentId = getUserID();
    const prevStudentTerms = Data;

    const filterTerms = Data && Data.filter((term) => term._id !== AddTermId);
    setData(filterTerms);

    try {
      await addStudentToTerm(studentId, AddTermId);
    } catch (error) {
      setData(prevStudentTerms);
    } finally {
      setAddTermId(null);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const handlePagechange = (page) => {
    setCurrentPage(page);
  };
  const getPagedData = () => {
    let filtered = Data;

    if (searchQuery) {
      filtered = Data.filter(
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
    // const sorted = _.orderBy(filtered);

    const courses = paginate(filtered, currentPage, pageSize);
    return { totalCount: filtered.length, data: courses };
  };
  const { totalCount, data: courses } = getPagedData();
  return (
    <Fragment>
      {" "}
      <div className="container-fluid StuddentCourses-container">
        <div className="row my-2 StuddentCourses-Header">
          <div className="col-md-7 col-7 StuddentCourses-Title">
            <span>دوره های ثبت شده : </span>
            <small>
              {Data.length} از {AllDataCount}{" "}
            </small>
          </div>
          <div className="col-md-5 col-4 StuddentCourses-SearchBox">
            <SearchBox value={searchQuery} onChange={handleSearch} />
          </div>
        </div>
        {/* <div className="row StuddentCourses-Title">AllDataCount</div> */}

        <div className="row StuddentCourses-TableBox">
          <CoursesTable
            tableData={courses}
            tableBtn={AddStudentToTerm}
            tableBtnColor="success"
          />
        </div>
        <div className="row CoursesTable-PaginationBox">
          <div className=" my-3 d-flex justify-content-center">
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePagechange}
            />
          </div>
        </div>
      </div>
      <Modals
        modal={ModalAddTerm}
        setmodal={setModalAddTerm}
        setChange={doAddTerm}
        title={"اضافه کردن  ترم"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </Fragment>
  );
};

export default AllCoursesList;
