// import React from "react";
import userImg from "../../../assets/img/profile/pages/page-01.jpg";
import React, { useState } from "react";
import { Button, Table } from "reactstrap";
import { Star, Search, Plus, Trash, Trash2 } from "react-feather";
import { NavLink } from "react-router-dom";
import "./Table.css";
const CoursesTable = ({ tableData, tableBtn, tableBtnColor }) => {
  // if (value.length) {
  //   filteredData = data.filter((item) => {
  //     let startsWithCondition =
  //       item.name.toLowerCase().startsWith(value.toLowerCase()) ||
  //       item.date.toLowerCase().startsWith(value.toLowerCase()) ||
  //       item.email.toLowerCase().startsWith(value.toLowerCase()) ||
  //       item.revenue.toLowerCase().startsWith(value.toLowerCase()) ||
  //       item.status.toLowerCase().startsWith(value.toLowerCase());
  //     let includesCondition =
  //       item.name.toLowerCase().includes(value.toLowerCase()) ||
  //       item.date.toLowerCase().includes(value.toLowerCase()) ||
  //       item.email.toLowerCase().includes(value.toLowerCase()) ||
  //       item.revenue.toLowerCase().includes(value.toLowerCase()) ||
  //       item.status.toLowerCase().includes(value.toLowerCase());

  //     if (startsWithCondition) {
  //       return startsWithCondition;
  //     } else if (!startsWithCondition && includesCondition) {
  //       return includesCondition;
  //     } else return null;
  //   });
  console.log("dataTabale", tableData);
  return (
    <div className=" CoursesTable-Box">
      {tableData && tableData.length === 0 ? (
        <p className="d-flex justify-content-center CourseNotFound">
          دوره ای یافت نشد
        </p>
      ) : (
        <Table className="permissions-table CoursesTable" borderless responsive>
          {" "}
          <thead>
            <tr>
              <th className="pic"> عکس دوره</th>
              <th>نام دوره</th>
              <th>نام استاد</th>
              <th>نام ترم</th>
              <th>تاریخ شروع</th>
              <th>تاریخ پایان</th>
              <th>قیمت</th>
              <th className="Btn"></th>
            </tr>
          </thead>
          <tbody style={{ marginTop: "20px" }}>
            {tableData &&
              tableData.map((term) => (
                <tr>
                  <td className="Courses-imageBox">
                    <div className="user-img ml-xl-0 ml-2">
                      <img
                        className="img-fluid rounded-circle "
                        height="36"
                        width="36"
                        src={userImg}
                        alt="pic"
                      />
                    </div>
                  </td>

                  <td>
                    <NavLink to={`/course/${term.course._id}`}>
                      {term.course.courseName.length >= 12
                        ? term.course.courseName.substr(0, 12) + "..."
                        : term.course.courseName}
                    </NavLink>
                  </td>
                  <td>
                    {term.teacher.fullName.length >= 12
                      ? term.teacher.fullName.substr(0, 12) + "..."
                      : term.teacher.fullName}
                  </td>
                  <td>
                    {term.title.length >= 12
                      ? term.title.substr(0, 12) + "..."
                      : term.title}
                  </td>

                  <td>{term.startDate.split("T")[0].replaceAll("-", "/")}</td>
                  <td>{term.endDate.split("T")[0].replaceAll("-", "/")}</td>
                  <td>{"تومان" + term.cost}</td>
                  <td className="Btn">
                    <Button
                      onClick={() => tableBtn(term._id)}
                      color={tableBtnColor}
                    >
                      {tableBtnColor === "danger" ? (
                        <Trash size={15} />
                      ) : (
                        <Plus size={15} />
                      )}
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default CoursesTable;
