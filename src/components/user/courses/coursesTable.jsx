import React, { Component } from 'react'
import { Link } from "react-router-dom";
import _ from "lodash";

import Table from '../../layout/table'
const CoursesTable = (props)=>{
  const { courses, onSort, sortColumn, tab } = props
    const columns = [
        // { path: "", label: "تصویر" },
        {
            path: "course.courseName",
            label: "نام دوره ",
            content: course => <Link to={`/course/${course.course._id}`}>{course.course.courseName}</Link>
        },
        { path: "teacher.fullName", label: "استاد" },
        { path: "title", label: "ترم" },
        { path: "capacity", label: "امتیاز" },
        { path: "startDate", label: "تاریخ شروع" },
      { path: "endDate", label: "تاریخ پایان" },
      {path: "cost",label: "قیمت دوره"}
  ];
  const cost = {
    path: "cost",
    label: "قیمت دوره"
  }
  // console.log(tab)
  // const allColumns = columns;
  // const allColumns = tab === "courses-list" ? columns.push(cost) : "nashod";
  // console.log(allColumns)
  // const allColumns = tab === "courses-list" ? columns.push(cost) : columns;
  // if(selectedTab["_id"] === "courses-list") {
  //   columns.push(cost);
  // }
  // console.log(allColumns)

        return (
      <Table
        columns={columns}
        data={courses}
        sortColumn={sortColumn}
        onSort={onSort}
      />
        )
}

export default CoursesTable
