import React, { Component, useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button,
  Table,
} from "reactstrap";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBSelect,
} from "../../assets/css/mdbreact";
import { Link } from "react-router-dom";
import CoursesTable from "./courseList";
import ProfileForm from "./studentForm/ProfileForm";
import {
  getStudentById,
  removeStudentFromTerm,
} from "../../core/api/admin.api";
import { getAllTerms } from "../../services/student.api";
import userImg from "../../assets/images/pages/landingPage/62.jpg";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Edit, Plus, Trash, Lock, Check, List } from "react-feather";
import { toast } from "react-toastify";

const StudentAccountTab = (props) => {
  const [studentData, setStudentData] = useState({});
  const [AlltermLength, setAlltermLength] = useState("");
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);

  const studentId = props.match.params.studentId;
  const getStudentInformation = async () => {
    const studentData = await getStudentById(studentId);

    setStudentData(studentData);
  };
  const getAllterm = async () => {
    const Allterms = await getAllTerms();
    setAlltermLength(Allterms && Allterms.length);
  };
  // console.log(studentData);
  useEffect(() => {
    getStudentInformation();
  }, [studentData]);
  // useEffect(() => {}, [studentData]);
  useEffect(() => {
    getAllterm();
  }, []);
  const {
    studentId: _id,
    isActive,
    fullName,
    email,
    birthDate,
    phoneNumber,
    nationalId,
    terms,
  } = studentData;
  //   console.log("termsdchnsjdhkvnskd", terms);
  //   console.log("teskvnskd11", fullName.split("+")[0]);
  const count = fullName && fullName.split("+").length;
  const termCount = terms && terms.length;
  //   const name = fullName.split("+")[0];
  //   console.log("name", name, "length", count);
  //   console.log("name", name, "length", count);
  //   let firsName = JSON.parse(fullName);
  //   console.log(firsName);
  //   let lastName = fullName;
  //   let userName = fullName;
  //   const firstName = fullName.split("+")[0];
  const DeleteStudentFromTerm = async (termId) => {
    const prevStudentTerms = termCount != 0 && terms;

    const filterTerms =
      termCount != 0 && terms.filter((term) => term._id !== termId._id);
    setStudentData(filterTerms);
    try {
      await removeStudentFromTerm(studentId, termId);
    } catch (error) {
      setStudentData(prevStudentTerms);
    }
  };

  const toggle = () => {
    setModal(!modal);
  };
  const closeEdit = () => {
    setEdit(!edit);
  };
  return (
    <React.Fragment>
      <Row className=" ">
        {/* <Col className="mt-1 pl-0 d-flex justify-content-lg-end" sm="12">
          <Button.Ripple
            onClick={() => closeEdit()}
            className="mr-1"
            color="primary"
            outline
          >
            <Edit size={15} />
            <span className="align-middle ml-50">ویرایش پروفایل</span>
          </Button.Ripple>
        </Col> */}
        {edit === false ? (
          <>
            <Col sm="12">
              <Card>
                <CardHeader>
                  <CardTitle>پروفایل دانشجو</CardTitle>
                </CardHeader>

                <MDBContainer>
                  <MDBModal isOpen={modal} toggle={toggle} centered>
                    <MDBModalHeader toggle={toggle}>
                      لیست دوره ها
                    </MDBModalHeader>
                    <MDBModalBody>
                      {/* <MDBDataTable striped bordered small data={termdata} />{" "} */}
                      <CoursesTable studentID={studentId} />
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={toggle}>
                        بستن
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </MDBContainer>

                <CardBody>
                  <Row className="mx-0" col="12">
                    <Col className="pl-0" sm="12">
                      <Media className="d-sm-flex d-block">
                        <Media className="mt-md-1 mt-0" left>
                          <Media
                            className="rounded mr-2"
                            object
                            src={userImg}
                            alt="Generic placeholder image"
                            height="112"
                            width="112"
                          />
                        </Media>
                        <Media body>
                          <Row>
                            <Col sm="9" md="6" lg="5">
                              <div className="users-page-view-table">
                                {count === 3 ? (
                                  <>
                                    <div className="d-flex user-info">
                                      <div className="user-info-title font-weight-bold ml-2">
                                        نام :
                                      </div>
                                      <div className="px-3">
                                        {fullName.split("+")[0]}
                                      </div>
                                    </div>
                                    <div className="d-flex user-info">
                                      <div className="user-info-title font-weight-bold">
                                        نام خانوادگی :
                                      </div>
                                      <div className="px-3">
                                        {fullName.split("+")[1]}
                                      </div>
                                    </div>
                                    <div className="d-flex user-info">
                                      <div className="user-info-title font-weight-bold">
                                        نام کاربری :
                                      </div>
                                      <div className="px-3">
                                        {fullName.split("+")[2]}
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      نام :
                                    </div>
                                    <div className="px-3">{fullName}</div>
                                  </div>
                                )}
                              </div>
                            </Col>
                            <Col md="12" lg="5">
                              <div className="users-page-view-table">
                                <div className="d-flex user-info">
                                  <div className="user-info-title font-weight-bold">
                                    وضعیت :
                                  </div>
                                  <div className="px-3">
                                    {isActive === true ? "فعال" : "غیرفعال"}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Media>
                      </Media>
                    </Col>
                    <Col
                      className="mt-1 pl-0 d-flex justify-content-lg-between"
                      sm="12"
                    >
                      <Button.Ripple
                        onClick={() => toggle()}
                        className="mr-1"
                        color="primary"
                        outline
                      >
                        <Plus size={15} />
                        <span className="align-middle ml-50">
                          اضافه کردن به دوره
                        </span>
                      </Button.Ripple>
                      <Button.Ripple
                        onClick={() => closeEdit()}
                        className="mr-1"
                        color="danger"
                        outline
                      >
                        <Edit size={15} />
                        <span className="align-middle ml-50">
                          ویرایش پروفایل
                        </span>
                      </Button.Ripple>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle>مشخصات دانشجو</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="users-page-view-table">
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        تاریخ تولد :
                      </div>
                      <div className="px-3"> {birthDate}</div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        شماره همراه :
                      </div>
                      <div className="px-3">{phoneNumber}</div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        ایمیل :
                      </div>
                      <div className="text-truncate">
                        <span className="px-3">{email}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        شماره ملی :
                      </div>
                      <div className="text-truncate">
                        <span className="px-3">{nationalId}</span>
                      </div>
                    </div>
                    <div className="d-flex user-info">
                      <div className="user-info-title font-weight-bold">
                        تعداد دوره های اخذ شده:
                      </div>
                      <div className="text-truncate">
                        <span className="px-3">
                          {" "}
                          {terms && terms.length} از {AlltermLength}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </>
        ) : (
          <ProfileForm
            studentInfo={studentData}
            setStudentIfo={setStudentData}
            openComponent={edit}
            setOpenComponent={setEdit}
          />
        )}
        <Col sm="12">
          <Card>
            <CardHeader className="border-bottom pb-1 mx-2 px-0">
              <CardTitle>
                <List size={18} />
                <span className="align-middle ml-50">ترم ها</span>
              </CardTitle>
            </CardHeader>
            <CardBody>
              {" "}
              <Table className="permissions-table" borderless responsive>
                <thead>
                  <tr>
                    <th>نام دوره </th>
                    <th>نام استاد</th>
                    <th>نام ترم</th>
                    <th>حذف دوره</th>
                  </tr>
                </thead>
                <tbody>
                  {termCount === 0
                    ? "هیچ دوره ای اخذ نشده"
                    : terms &&
                      terms.map((term) => (
                        <tr>
                          <td>
                            {term.course.courseName.length >= 12
                              ? term.course.courseName.substr(0, 12) + "..."
                              : term.course.courseName}
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
                          <td>
                            <Button.Ripple
                              onClick={() => DeleteStudentFromTerm(term._id)}
                              color="danger"
                              outline
                            >
                              <Trash size={15} />
                            </Button.Ripple>
                          </td>
                        </tr>
                      ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default StudentAccountTab;
