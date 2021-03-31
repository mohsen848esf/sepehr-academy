import React, { useState, useEffect } from "react";
import _ from "lodash";
import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
  removeStudentFromTerm,
} from "../../../services/student.api";

import Pagination from "../../layout/pagination";
import SearchBox from "../../layout/searchBox";
import { paginate } from "../../layout/utils/paginate";
import { getUserID } from "../../../services/storage/storage";
import Modals from "../../layout/modal";

import CoursesTable from "./CoursesTable";
import "./StudentCourses.css";
import { Fragment } from "react";

const StudentCourses = ({ Data, setData, AllDataCount }) => {
  //         state = {
  //     courses: [],
  //     searchQuery: '',
  //     currentPage:1,
  //     pageSize: 2,
  //     sortColumn: { path: "course.courseName", order: "asc" }

  // }
  const [ModalDeleteTerm, setModalDeleteTerm] = useState(false);
  const [DeleteTermId, setDeleteTermId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [propData, setPropData] = useState([]);

  // const changeData = () => {
  //   setPropData(Data);
  // };
  // useEffect(() => {
  //   changeData();
  // }, [propData]);
  console.log("object data", Data);
  const DeleteStudentFromTerm = (termId) => {
    setModalDeleteTerm(true);
    setDeleteTermId(termId);
  };
  const doDeleteTerm = async () => {
    console.log(DeleteTermId);
    if (!DeleteTermId) {
      return;
    }
    const studentId = getUserID();
    const prevStudentTerms = Data;

    const filterTerms =
      Data && Data.filter((term) => term._id !== DeleteTermId);
    setData(filterTerms);
    try {
      await removeStudentFromTerm(studentId, DeleteTermId);
    } catch (error) {
      setData(prevStudentTerms);
    } finally {
      setDeleteTermId(null);
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
            tableBtn={DeleteStudentFromTerm}
            tableBtnColor="danger"
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
        modal={ModalDeleteTerm}
        setmodal={setModalDeleteTerm}
        setChange={doDeleteTerm}
        title={"حذف ترم"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </Fragment>
  );
};

export default StudentCourses;
