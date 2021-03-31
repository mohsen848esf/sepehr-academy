import React, { useEffect, useState, Fragment } from "react";
import {
  getCourseById,
  addStudentToTerm,
} from "../../../../services/student.api";
import RightInformation from "./rightInfo";
import CenterInformation from "./centerInfo";
import { getUserID } from "../../../../services/storage/storage";
import Modals from "../../../layout/modal";
import "../../../../assets/css/manual/pages/course-info.css";
const CourseInfo = ({ match }) => {
  const [Course, setCourse] = useState(null);
  const [ModalAddTerm, setModalAddTerm] = useState(false);
  const [AddTermId, setAddTermId] = useState(null);
  const [Bought, setBought] = useState(false);

  const courseData = async () => {
    const studentId = getUserID();
    const res = await getCourseById(match.params.courseID);
    const isBought = res.students.find((st) => st._id === studentId)
      ? true
      : false;
    setCourse(res);
    setBought(isBought);
  };
  useEffect(() => {
    courseData();
  }, []);
  const AddStudentToTerm = (termId) => {
    setModalAddTerm(true);
    setAddTermId(termId);
  };
  const doAddTerm = async () => {
    if (!AddTermId) {
      return;
    }
    setBought(true);
    const studentId = getUserID();
    try {
      await addStudentToTerm(studentId, AddTermId);
    } catch (error) {
      setBought(false);
    } finally {
      setAddTermId(null);
    }
  };
  console.log(Course);
  return (
    <Fragment>
      {" "}
      <section class="container-fluid course-body">
        <div class="course-style   justify-content-center row">
          {/* <h5>{Course["course"].courseName}</h5> */}
          {Course && (
            <>
              {" "}
              <div class="col-md-8  col-sm-12 col-12 right-style">
                <CenterInformation courseInfo={Course.course} />
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-12 left-style">
                <div className="row">
                  <RightInformation
                    courseInformation={Course}
                    handleCourseBuy={AddStudentToTerm}
                    Bought={Bought}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Modals
        modal={ModalAddTerm}
        setmodal={setModalAddTerm}
        setChange={doAddTerm}
        title={"خرید دوره"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </Fragment>
  );
};

export default CourseInfo;
