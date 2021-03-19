import React, { useEffect, useState } from "react";
import { addStudentToTerm } from "../../../../core/api/admin.api";
import { getItem } from "../../../../services/storage/storage";

const RightInfo = ({ courseInformation }) => {
  // const {cost} = courseInformation
  const [courseInfo, setcourseInfo] = useState(courseInformation);
  const [Loding, setLoding] = useState(false);
  const {
    teacher,
    course,
    _id: termId,
    title: termTitle,
    cost: coursePrice,
    endDate,
    startDate,
    capacity,
    students,
  } = courseInfo;
  // const {length : studentCount} = students
  const studentCount = students ? students.length : 0;
  const maxCapacity = 100 - capacity > 90 ? 10 : 100;
  const courseStartDate = startDate ? startDate.split("T") : "";
  const courseEndDate = endDate ? endDate.split("T") : "";

  // const handleRegister = async () => {
  //     const userId= getItem()
  //     setLoding(true)
  //     try {
  //         await addStudentToTerm()
  //     } catch (error) {

  //     }finally{setLoding(false)}
  // }
  return (
    <div class="col-md-4 col-sm-12 col-xs-12 left-style">
      <div class="row">
        <div class="col-md-9 col-sm-10 col-xs-5 items course-price">
          <p class="col-md-10 col-sm-10 col-xs-12 price-items">
            قیمت دوره: {coursePrice} تومان
          </p>
          <div class="col-md-9 col-sm-9 col-xs-10 price-items">
            <button>ثبت نام</button>
          </div>
          <p class="col-md-10 col-sm-10 col-xs-12 price-items">
            امتیاز دوره : {capacity} از {maxCapacity}
          </p>
        </div>
        <div class="col-md-9 col-sm-10 col-xs-4 items course-instructor">
          <p>
            نام دوره : {course.courseName}
            <i class="fa fa-clone" aria-hidden="true"></i>
          </p>
          <p>
            مدرس : {teacher.fullName}
            <i class="fa fa-user" aria-hidden="true"></i>
          </p>
        </div>

        <div class="col-md-9 col-sm-10 col-xs-5 items course-access">
          <div class="row ">
            <div class="col-md-12 col-sm-12 col-12 access-items title">
              <p>راه ارتباطی</p>
            </div>
            <div class="col-md-4 col-sm-4 col-4 access-items access_icon">
              {teacher.email}{" "}
            </div>
          </div>
        </div>

        <div class="col-md-9 col-sm-10 col-xs-3 items course-comments">
          <p>
            تاریخ شروع : {courseStartDate[0]}{" "}
            <i class="fa fa-clock-o" aria-hidden="true"></i>
          </p>
          <p>
            تاریخ پایان : {courseEndDate[0]}{" "}
            <i class="fa fa-times-rectangle" aria-hidden="true"></i>
          </p>
        </div>
        <div class="col-md-9 col-sm-10 col-xs-3 items course-student">
          <p>
            تعداد دانشجو : {studentCount}
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightInfo;
