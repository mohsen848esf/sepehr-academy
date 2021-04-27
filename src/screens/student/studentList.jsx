import React, { Component, useState, useEffect } from "react";
import { getAllStudents } from "../../core/api/admin.api";
import http from "../../services/http-service.api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Chip from "../../components/@vuexy/chips/ChipComponent";
import { MDBDataTable, MDBBtn } from "../../assets/css/mdbreact";
import Modals from "../../components/layout/modal";

import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import {
  Edit,
  Trash,
  // ChevronDown,
  Plus,
  Delete,
  User,
  Trash2,
  // Check,
  // ChevronLeft,
  // ChevronRight
} from "react-feather";
import { Fragment } from "react";
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [Modal, setModal] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);

  const data = {
    columns: [
      {
        label: "نام دانشجو",
        field: "fullName",
        sort: "asc",
        width: 270,
      },
      {
        label: "ایمیل",
        field: "email",
        sort: "asc",
        width: 170,
      },
      {
        label: "شماره همراه",
        field: "phoneNumber",
        sort: "asc",
        width: 200,
      },
      {
        label: " دوره ها",
        field: "countTerms",
        sort: "asc",
        width: 200,
      },
      {
        label: " وضعیت",
        field: "isActive",
        sort: "asc",
        width: 10,
      },
      {
        label: "پروفایل ",
        field: "editStudentInfo",
        width: 100,
      },
      {
        label: "حذف ",
        field: "deleteStudent",
        width: 100,
      },
    ],
    rows: students.map((student) => ({
      fullName: student.fullName.split("+")[2]
        ? student.fullName.split("+")[0] +
          " " +
          student.fullName.split("+")[1].substr(0, 3) +
          "..."
        : student.fullName.split("+"),

      email:
        student.email.length >= 15
          ? "..." + student.email.substr(0, 15)
          : student.email,
      phoneNumber: student.phoneNumber,
      countTerms: student.terms.length,

      isActive: (
        <div className={student.isActive === true ? "success" : "danger"}>
          {/* <Chip
            className="m-0 px-2 py-0"
            
          /> */}
          {student.isActive === true ? "فعال" : "غیرفعال"}
        </div>
      ),
      editStudentInfo: (
        <div className="data-list-action">
          <Button
            className="add-new-btn"
            color="primary"
            onClick={() => handleEditStudent(student._id)}
          >
            <User size={15} />
            <span className="align-middle"> </span>
          </Button>
        </div>
      ),
      deleteStudent: (
        <div className="data-list-action">
          <Button
            className="add-new-btn"
            color="danger"
            onClick={() => handledeleteStudent(student._id)}
          >
            <Trash2 size={15} />
          </Button>
        </div>
      ),
    })),
  };
  const history = useHistory();
  const StudentsItems = async () => {
    const allStudents = await getAllStudents();
    //   console.log(allCourses)
    setStudents(allStudents);
  };
  const handleEditStudent = (studentId) => {
    history.push(`/admin/studentProfile/${studentId}`);
  };
  const handledeleteStudent = (studentId) => {
    setModal(true);
    setDeleteId(studentId);
  };
  const doDelete = async () => {
    if (!DeleteId) {
      return;
    }
    try {
      const res = await http.delete(API_URL + `student/${DeleteId}`);
      toast.success("دانشجو با موفقیت پاک شد ");
      const allStudents = students.filter(
        (student) => student._id !== DeleteId
      );
      setStudents(allStudents);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("دوباره امتحان کنید ");
      }
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    StudentsItems();
  }, []);
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle> لیست دانشجو ها </CardTitle>
        </CardHeader>

        <CardBody>
          <MDBDataTable striped bordered small data={data} />
        </CardBody>
      </Card>
      <Modals
        modal={Modal}
        setmodal={setModal}
        setChange={doDelete}
        title={"حذف دانشجو"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </Fragment>
  );
};
export default StudentsList;
