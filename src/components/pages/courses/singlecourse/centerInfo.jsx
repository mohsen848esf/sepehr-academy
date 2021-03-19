import React from "react";

const CenterInfo = ({ courseInfo }) => {
  const { topics, courseName, description, image } = courseInfo;
  console.log("++++++++++++++++++++++++");
  // console.log(courseInfo['courseName'])

  return (
    <div class="col-md-8 col-sm-12 col-xs-12 right-style">
      <div class="col-md-11 col-sm-10 col-xs-12 course-view">
        <img
          class="courseImage"
          src={
            require("../../../../assets/images/pages/courses/22.png").default
          }
          alt=""
        />
      </div>
      <div class="col-md-11 col-sm-11 col-xs-12 course-description">
        <div class="col-md-10 col-sm-11 col-xs-11  description-title">
          <h4>{courseInfo.courseName}</h4>
        </div>{" "}
        <div class="col-md-10 col-sm-11 col-xs-11  description-text">
          <p>{description}</p>
          <h4>سرفصل های دوره</h4>
          <ul>
            {topics.map((top) => (
              <li key={top}>{top}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CenterInfo;
