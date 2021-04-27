import React, { Component, useState, useEffect } from "react";
import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
  getTermById,
} from "../../services/student.api";
import { addStudentToTerm } from "../../core/api/admin.api";
import http from "../../services/http-service.api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { MDBDataTable, MDBBtn } from "mdbreact";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import {
  Edit,
  Trash,
  // ChevronDown,
  Plus,
  Delete,
  // Check,
  // ChevronLeft,
  // ChevronRight
} from "react-feather";
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const CourseList = ({ studentID }) => {
  const [courses, setCourses] = useState([]);
  const studentId = studentID;
  const data = {
    columns: [
      {
        label: "نام دوره",
        field: "courseName",
        sort: "asc",
        width: 270,
      },
      {
        label: "استاد",
        field: "teacherName",
        sort: "asc",
        width: 170,
      },
      {
        label: "نام ترم",
        field: "termName",
        sort: "asc",
        width: 200,
      },
      {
        label: "قیمت ترم",
        field: "price",
        sort: "asc",
        width: 100,
      },
      {
        label: "شروع ترم",
        field: "startDate",
        sort: "asc",
        width: 150,
      },
      {
        label: "پایان دوره",
        field: "endDate",
        sort: "asc",
        width: 100,
      },
      {
        label: "اضافه ",
        field: "addStudent",
        width: 100,
      },
    ],
    rows: courses.map((term) => ({
      courseName:
        term.course.courseName.length >= 15
          ? term.course.courseName.substr(0, 15) + "..."
          : term.course.courseName,
      teacherName:
        term.teacher.fullName.length >= 8
          ? term.teacher.fullName.substr(0, 8) + "..."
          : term.teacher.fullName,
      termName:
        term.title.length >= 8 ? term.title.substr(0, 8) + "..." : term.title,
      price: `تومان ${" " + term.cost}`,
      startDate: term.startDate.split("T")[0].replaceAll("-", "/"),
      endDate: term.endDate.split("T")[0].replaceAll("-", "/"),
      addStudent: (
        <div className="data-list-action">
          <Button
            className="add-new-btn"
            color="primary"
            onClick={() => HandleAddStudent(term._id)}
          >
            <Plus size={15} />
            <span className="align-middle"> </span>
          </Button>
        </div>
      ),
    })),
  };

  const history = useHistory();
  const CourseItems = async () => {
    const allCourses = await getAllTerms();
    const FilterCourses = allCourses.filter(
      (item) =>
        !item.students.some((filterItem) => filterItem._id === studentID)
    );
    console.log("FilterCourses");
    setCourses(FilterCourses);
  };
  const HandleAddStudent = async (termId) => {
    const prevCourses = courses;
    try {
      const res = await addStudentToTerm(studentId, termId);
      const filterCourses = courses.filter((term) => term._id !== termId);
      setCourses(filterCourses);
      // CourseItems();
      console.log(courses);
    } catch (error) {
      setCourses(prevCourses);
    }
  };

  useEffect(() => {
    CourseItems();
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle> لیست دوره ها </CardTitle>
        <div className="data-list-header d-flex justify-content-between flex-wrap">
          <div className="actions-left d-flex flex-wrap">
            {/* <Button
                className="add-new-btn"
                color="primary"
                onClick={() => handleCreateCourse()}
                outline
              >
                <Plus size={15} />
                <span className="align-middle">اضافه کردن دوره</span>
              </Button> */}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <MDBDataTable striped bordered small data={data} />
      </CardBody>
    </Card>
  );
};

export default CourseList;
