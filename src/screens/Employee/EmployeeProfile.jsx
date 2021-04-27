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
  Nav,
  NavItem,
  NavLink,
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
import Modals from "../../components/layout/modal";
import classnames from "classnames";

import { Link } from "react-router-dom";
import EditEmployee from "./EditEmployee";
import {
  getEmployeeById,
  DeleteEmployeeById,
} from "../../services/Employee.api";
import { getAllTerms } from "../../services/student.api";
import userImg from "../../assets/images/pages/landingPage/62.jpg";
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy";
import {
  Edit,
  Plus,
  Trash,
  Lock,
  Check,
  List,
  Trash2,
  Edit3,
  UserCheck,
  UserMinus,
  UserX,
  UserPlus,
} from "react-feather";
import { toast } from "react-toastify";
import http from "../../services/http-service.api";
import { Editor } from "draft-js";

const API_URL = process.env.REACT_APP_PUBLIC_PATH;

const EmployeeProfile = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const [employeeData, setEmployeeData] = useState({});
  const [AlltermLength, setAlltermLength] = useState("");
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [ModalDelete, setModalDelete] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);

  const employeeId = props.match.params.employeetId;
  const getEmployeeInformation = async () => {
    const employeeData = await getEmployeeById(employeeId);

    setEmployeeData(employeeData);
  };
  const getAllterm = async () => {
    const Allterms = await getAllTerms();
    setAlltermLength(Allterms && Allterms.length);
  };
  useEffect(() => {
    getEmployeeInformation();
  }, []);
  useEffect(() => {
    getAllterm();
  }, []);
  const {
    employeeId: _id,
    isActive,
    fullName,
    email,
    birthDate,
    phoneNumber,
    nationalId,
    terms,
    address,
    role,
  } = employeeData;

  const termCount = terms && terms.length;
  console.log(terms);
  const handleDeleteEmployee = () => {
    setModalDelete(true);
    setDeleteId(employeeId);
  };
  const doDelete = async () => {
    if (!DeleteId) {
      return;
    }
    try {
      const res = await DeleteEmployeeById(DeleteId);
      toast.success("کارمند با موفقیت پاک شد ");
      //   window.location = "/admin/students";
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("دوباره امتحان کنید ");
      }
    } finally {
      setDeleteId(null);
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
        <Col sm="12">
          <Card>
            <CardHeader>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "1",
                    })}
                  >
                    <UserCheck size={16} />
                    <span className="align-middle ml-50">پروفایل کارمند</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>

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
                        height="80"
                        width="80"
                      />
                    </Media>
                    <Media body>
                      <Row>
                        <Col md="5" lg="5">
                          <div className="users-page-view-table m-5">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                وضعیت :
                              </div>
                              <div
                                className={
                                  isActive === true
                                    ? "success px-3 "
                                    : "danger px-3"
                                }
                              >
                                {isActive === true ? "فعال" : "غیرفعال"}
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md="5" lg="5">
                          <div className="users-page-view-table m-5">
                            <div className="d-flex user-info">
                              <div className="user-info-title font-weight-bold">
                                نقش کارمند :
                              </div>
                              <div
                                className={
                                  role === "admin"
                                    ? "success px-3 "
                                    : "primary px-3"
                                }
                              >
                                {role}
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Media>
                  </Media>
                </Col>
                <Col
                  className="mt-1 pl-0 d-flex justify-content-lg-end"
                  sm="12"
                >
                  <Button.Ripple
                    onClick={() => closeEdit()}
                    className="mr-1"
                    color="warning"
                    outline
                  >
                    <Edit size={15} />
                    <span className="align-middle ml-50">ویرایش پروفایل</span>
                  </Button.Ripple>
                  <Button.Ripple
                    onClick={() => handleDeleteEmployee()}
                    className="mr-1"
                    color="danger"
                    outline
                  >
                    <Trash2 size={15} />
                    <span className="align-middle ml-50">حذف کارمند</span>
                  </Button.Ripple>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        {edit === false ? (
          <>
            <Col sm="12" md="12">
              <Card>
                <CardHeader>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "1",
                        })}
                      >
                        <Plus size={16} />
                        <span className="align-middle ml-50">
                          مشخصات کارمند
                        </span>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col sm="9" md="6" lg="5">
                      <div className="users-page-view-table">
                        <div className="d-flex user-info">
                          <div className="user-info-title font-weight-bold">
                            نام :
                          </div>
                          <div className="px-3">{fullName}</div>
                        </div>
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
                            <span className="px-3">
                              {email &&
                                email.length > 30 &&
                                "..." + email.substr(0, 30)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md="12" lg="5">
                      <div className="users-page-view-table">
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
                            آدرس :
                          </div>
                          <div className="text-truncate">
                            <span className="px-3">{address}</span>
                          </div>
                        </div>
                        {employeeData.role === "teacher" && (
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
                        )}
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </>
        ) : (
          <EditEmployee
            employeeInfo={employeeData}
            setEmployeeInfo={setEmployeeData}
            openComponent={edit}
            setOpenComponent={setEdit}
          />
        )}
        {employeeData.role === "teacher" && (
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
                {termCount === 0 ? (
                  "هیچ دوره ای اخذ نشده"
                ) : (
                  <Table className="permissions-table" borderless responsive>
                    <thead>
                      <tr>
                        <th>نام ترم</th>
                        <th>نام دوره </th>
                        <th> فیمت ترم </th>
                        <th> شروع ترم</th>
                        <th> پایان ترم</th>
                        <th> ظرفیت ترم</th>
                      </tr>
                    </thead>
                    <tbody>
                      {terms &&
                        terms.map((term) => (
                          <tr>
                            <td>
                              {term.title && term.title.length >= 12
                                ? term.title.substr(0, 12) + "..."
                                : term.title}
                            </td>
                            <td>
                              {term.course.courseName.length >= 15
                                ? term.course.courseName.substr(0, 15) + "..."
                                : term.course.courseName}
                            </td>
                            <td>{"تومان" + " " + term.cost}</td>
                            <td>{term.startDate.substr(0, 15)}</td>
                            <td>{term.endDate.substr(0, 15)}</td>
                            <td>{term.capacity}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                )}
              </CardBody>
            </Card>
          </Col>
        )}
      </Row>

      <Modals
        modal={ModalDelete}
        setmodal={setModalDelete}
        setChange={doDelete}
        title={"حذف کارمند"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </React.Fragment>
  );
};
export default EmployeeProfile;
