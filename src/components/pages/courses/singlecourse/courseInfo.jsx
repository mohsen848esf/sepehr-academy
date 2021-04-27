import React, { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

import {
  getCourseById,
  addStudentToTerm,
} from "../../../../services/student.api";
import RightInformation from "./rightInfo";
import CenterInformation from "./centerInfo";
import {
  getUserID,
  getItem,
  removeItem,
} from "../../../../services/storage/storage";
import Modals from "../../../layout/modal";
import "../../../../assets/css/manual/pages/course-info.css";
const CourseInfo = ({ match }) => {
  const [Course, setCourse] = useState(null);
  const [ModalAddTerm, setModalAddTerm] = useState(false);
  const [ModalLogged, setModalLogged] = useState(false);
  const [AddTermId, setAddTermId] = useState(null);
  const [Bought, setBought] = useState(false);
  const history = useHistory();
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
    const IsLogged = getItem("role");
    if (!IsLogged && IsLogged !== "student") {
      setModalLogged(true);
    }
    setModalAddTerm(true);
    setAddTermId(termId);
  };
  const ClearStorage = () => {
    removeItem("role");
    removeItem("user");
    removeItem("token");
  };
  const GotToTheLoginPage = () => {
    ClearStorage();
    history.push("/logIn");
    setModalLogged(false);
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
      <Modals
        modal={ModalAddTerm}
        setmodal={setModalAddTerm}
        setChange={doAddTerm}
        title={"خرید دوره"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
      <Modals
        modal={ModalLogged}
        setmodal={setModalLogged}
        setChange={GotToTheLoginPage}
        title={"  "}
        message={"شما نیاز دارید وارد حساب خود شوید"}
        pic={"trach.png"}
      />
      <section class="container-fluid course-body my-5">
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
    </Fragment>
  );
};

export default CourseInfo;
