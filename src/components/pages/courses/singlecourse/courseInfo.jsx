import React, { useEffect, useState } from "react";
import { getCourseById } from "../../../../services/student.api";
import RightInformation from "./rightInfo";
import CenterInformation from "./centerInfo";
import "../../../../assets/css/manual/pages/course-info.css";

const CourseInfo = ({ match }) => {
  const [Course, setCourse] = useState(null);
  const courseData = async () => {
    const res = await getCourseById(match.params.courseID);
    setCourse(res);
  };
  useEffect(() => {
    courseData();
  }, []);

  console.log(Course);
  return (
    <section class="container-fluid course-body">
      <div class="course-style  justify-content-center d-flex">
        {/* <h5>{Course["course"].courseName}</h5> */}
        {Course && (
          <>
            <CenterInformation courseInfo={Course.course} />
            <RightInformation courseInformation={Course} />
          </>
        )}
      </div>
    </section>
  );
};

export default CourseInfo;
