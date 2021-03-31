import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Progress,
  Button,
  CardHeader,
  CardTitle,
  Badge,
} from "reactstrap";
import {
  ChevronsRight,
  BookOpen,
  Clipboard,
  Clock,
  DollarSign,
  Plus,
  PlusSquare,
  ShoppingCart,
  CheckSquare,
  User,
} from "react-feather";

import { addStudentToTerm } from "../../../../core/api/admin.api";
import { getItem } from "../../../../services/storage/storage";
import CapacityOverview from "../../../layout/capacityOverview";
const RightInfo = ({ courseInformation, handleCourseBuy, Bought }) => {
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
  const studentCount = students ? students.length : 0;
  const maxCapacity =
    studentCount > capacity ? (50 - capacity > 40 ? 10 : 50) : capacity;
  const courseStartDate =
    startDate && startDate.split("T")[0].replaceAll("-", "/");
  const courseEndDate = endDate && endDate.split("T")[0].replaceAll("-", "/");
  const percent = parseInt((studentCount * 100) / maxCapacity) + 1;
  const DiscountedPrice = parseInt(coursePrice * (1 - percent / 100));
  return (
    <>
      <div class="row" style={{ display: "none" }}>
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
      <div className="col-md-12 col-sm-6 col-12 border-bottom CourseInformation-RightItemCol CourseName">
        <Card className="CourseNameCard px-2">
          <CardHeader>
            {" "}
            <p className="font-medium-4 text-bold-600 my-2 CourseNameCardTitle">
              مشخصات دوره
            </p>
          </CardHeader>
          <CardBody className=" d-flex justify-content-between  CourseNameCardBody ">
            <p className="fonticon-wrap font-medium-2">
              <BookOpen size={18} className="mr-2 fonticon-wrap" />
              نام دوره
            </p>
            <span className="font-medium-1 text-bold-200">
              {" "}
              {course.courseName}
            </span>
          </CardBody>
          <CardBody className=" d-flex justify-content-between CourseNameCardBody ">
            <p className="fonticon-wrap font-medium-2">
              <Clipboard size={18} className="mr-2 fonticon-wrap" />
              ترم ارائه شده
            </p>
            <span className="font-medium-1 text-bold-200"> {termTitle}</span>
          </CardBody>
          <CardBody className=" d-flex justify-content-between CourseNameCardBody ">
            <p className="fonticon-wrap font-medium-2">
              <Clock size={18} className="mr-2 fonticon-wrap" />
              شروع ترم
            </p>{" "}
            <span className="font-medium-1 text-bold-200">
              {" "}
              {courseStartDate}
            </span>
          </CardBody>
          <CardBody className=" d-flex justify-content-between CourseNameCardBody ">
            <p className="fonticon-wrap font-medium-2">
              <Clock size={18} className="mr-2 fonticon-wrap" />
              پایان ترم
            </p>{" "}
            <span className="font-medium-1 text-bold-200">
              {" "}
              {courseEndDate}
            </span>
          </CardBody>
        </Card>
      </div>

      <div className="col-md-12 col-sm-6 col-12 CourseInformation-RightItemCol CapacityOverview ">
        <CapacityOverview
          OverViewTitle={"ظرفیت دوره"}
          capacityTitle={"ظرفیت کل دوره"}
          capacity={capacity}
          InProgressTitle={"تعداد دانشجو دوره"}
          InProgress={studentCount}
          percent={percent}
        />
      </div>
      <div className="col-12 CourseInformation-RightItemCol ">
        <Card className="CoursePriceCard">
          <CardHeader>
            <p className="fonticon-wrap font-medium-2 text-bold-200">
              <User size={15} className="mr-2 fonticon-wrap" />
              مدرس
            </p>{" "}
            <div className="user-img ml-xl-0 ml-2 mt-2 CourseInfo-teacherImage-box">
              <img
                className="img-fluid rounded-circle mr-2  box-shadow-1"
                height="42"
                width="45"
                src={
                  require("../../../../assets/img/profile/pages/page-01.jpg")
                    .default
                }
                alt="pic"
              />
              <div className="CourseInfo-teacherInfo">
                <p className="font-medium-1 text-bold-600">
                  {teacher.fullName}
                </p>
                <span className="font-medium-1 text-bold-600 text-primary">
                  {teacher.email}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div className=" d-flex justify-content-between border-top mt-2 pt-3 ">
              <p className="fonticon-wrap font-medium-2 mb-3">
                <DollarSign size={18} className="mr-2 fonticon-wrap" />
                قیمت دوره
              </p>{" "}
              <h5 className="mt-1">
                <del className="text-danger">{coursePrice + " " + "تومان"}</del>
              </h5>
            </div>

            <div className=" d-flex justify-content-between ">
              <p className="fonticon-wrap font-medium-2 mb-3">
                <PlusSquare size={18} className="mr-2 fonticon-wrap" />
                با تخفیف{" "}
                <Badge className="py-2" color="success">
                  {percent + "%"}
                </Badge>
              </p>{" "}
              <h5 className="mt-1">
                <small className="text-success">
                  {DiscountedPrice + " " + "تومان"}
                </small>
              </h5>
            </div>
            <div className=" d-flex justify-content-between mt-3 ">
              <span className="fonticon-wrap font-medium-2 mb-3">فقط</span>{" "}
              <h5 className="mt-1">
                <span className="text-warning">00:00:01</span>
              </h5>
              <span>وقت دارید </span>
            </div>
            <div className=" d-flex justify-content-center">
              <Button
                disabled={Bought}
                color="success"
                className="w-75 box-shadow-1 mt-2"
                onClick={() => handleCourseBuy(termId)}
              >
                ثبت نام
                <ShoppingCart size={15} className="ml-2 " />
              </Button>
            </div>
            <hr className="my-4" />
            <p className="font-medium-3 ">مزایای شرکت در این دوره </p>
            <div className=" ml-3 mt-3">
              <p>
                <CheckSquare size={18} className="mr-2 fonticon-wrap success" />
                ارتباط مستقیم با مدرس
              </p>
              <p>
                <CheckSquare size={18} className="mr-2 fonticon-wrap success" />
                ساخت رزومه مناسب برای بازار کار
              </p>
              <p>
                <CheckSquare size={18} className="mr-2 fonticon-wrap success" />
                معرفی به بهترین شرکت ها
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default RightInfo;
