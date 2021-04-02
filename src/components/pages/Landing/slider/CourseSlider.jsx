import React, { useEffect, useState } from "react";
import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
} from "../../../../services/student.api";
import CourseItem from "../../courses/allCourses/courseItem";

import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import Swiper from "react-id-swiper";
import img1 from "../../../../assets/img/slider/banner-26.jpg";
import img2 from "../../../../assets/img/slider/banner-39.jpg";
import img3 from "../../../../assets/img/slider/banner-28.jpg";
import img4 from "../../../../assets/img/slider/banner-29.jpg";
import img5 from "../../../../assets/img/slider/banner-30.jpg";
import "../../../../assets/css/manual/pages/Courses.css";
import "../../../../assets/css/manual/pages/AllCourses.css";
import "swiper/css/swiper.css";
import "../../../../assets/scss/plugins/extensions/swiper.scss";

const params = {
  //   autoplay: {
  //     delay: 5500,
  //     disableOnInteraction: true,
  //   },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
};
const CourseSlider = () => {
  const [AllCourses, setAllCourses] = useState([]);
  const getAllCourses = async () => {
    const allCourses = await getCourses();
    setAllCourses(allCourses);
  };
  console.log("AllCourses :", AllCourses.slice(0, 2));
  useEffect(() => {
    getAllCourses();
  }, []);
  return (
    <div className="container my-4 mb-4 Courses-container">
      <div className="Courses-title">
        <h2>دوره ها</h2>
        <span> بهترین دوره ها را با ما تجربه کنید </span>
      </div>
      <hr />

      <Card className="CourseSliderCard">
        <CardBody>
          <Swiper {...params}>
            {AllCourses.slice(0, 4).map((course) => (
              <div className=" CourseSliderItems">
                <CourseItem {...course} />
              </div>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </div>
  );
};

export default CourseSlider;
