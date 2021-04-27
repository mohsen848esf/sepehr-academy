import React, { Component, useState, useEffect, Fragment } from "react";
import {
  getAllCoursesFromTerms as getCourses,
  getCourseById,
  getAllTerms,
  getTermById,
} from "../../services/student.api";
import http from "../../services/http-service.api";
import TermEdit from "./term/termEdit";
import Sidebar from "./DataListSidebar";
import Modals from "../../components/layout/modal";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { MDBDataTable, MDBBtn } from "../../assets/css/mdbreact";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import {
  Edit,
  Trash,
  // ChevronDown,
  Plus,
  Trash2,
  // Check,
  // ChevronLeft,
  // ChevronRight
} from "react-feather";
const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const TermList = () => {
  const [terms, setTerms] = useState([]);
  const [Modal, setModal] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const data = {
    columns: [
      {
        label: "نام ترم",
        field: "termName",
        sort: "asc",
        width: 150,
      },
      {
        label: "استاد",
        field: "teacherName",
        sort: "asc",
        width: 270,
      },
      {
        label: "نام دوره",
        field: "courseName",
        sort: "asc",
        width: 200,
      },
      {
        label: "قیمت ترم",
        field: "price",
        sort: "asc",
        width: 100,
      },
      {
        label: "شروع ترم",
        field: "startDate",
        sort: "asc",
        width: 150,
      },
      {
        label: "پایان دوره",
        field: "endDate",
        sort: "asc",
        width: 100,
      },
      {
        label: "",
        field: "position",
        width: 100,
      },
    ],
    rows: terms.map((term) => ({
      termName:
        term.title.length >= 8 ? term.title.substr(0, 8) + "..." : term.title,
      teacherName:
        term.teacher.fullName.length >= 8
          ? term.teacher.fullName.substr(0, 8) + "..."
          : term.teacher.fullName,
      courseName:
        term.course.courseName.length >= 10
          ? term.course.courseName.substr(0, 10) + "..."
          : term.course.courseName,
      price: `تومان ${" " + term.cost}`,
      startDate: term.startDate.split("T")[0].replaceAll("-", "/"),
      endDate: term.endDate.split("T")[0].replaceAll("-", "/"),
      position: (
        <div className="data-list-action">
          <Button
            className="add-new-btn mr-1"
            color="primary"
            onClick={() => handleEditTerm(term._id)}
          >
            <Edit size={15} className="cursor-pointer" />
          </Button>
          <Button
            className="add-new-btn"
            color="danger"
            onClick={() => handleDeleteTerm(term._id)}
          >
            <Trash2 size={15} className="cursor-pointer" />
          </Button>
        </div>
      ),
    })),
  };
  const history = useHistory();
  const termItems = async () => {
    const allCourses = await getAllTerms();
    setTerms(allCourses);
  };
  const handleCreateTerm = () => {
    history.push(`/admin/createTerm`);
  };
  const handleEditTerm = (termId) => {
    history.push(`/admin/editterm/${termId}`);
    console.log(termId);
  };
  const handleDeleteTerm = (termId) => {
    setModal(true);
    setDeleteId(termId);
  };
  const doDelete = async () => {
    if (!DeleteId) {
      return;
    }
    try {
      const res = await http.delete(API_URL + `term/${DeleteId}`);
      toast.success("ترم با موفقیت پاک شد ");
      const newTerms = terms.filter((term) => term._id !== DeleteId);
      setTerms(newTerms);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("دوباره امتحان کنید ");
      }
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    termItems();
  }, []);
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle> لیست ترم ها</CardTitle>
          <div className="data-list-header d-flex justify-content-between flex-wrap">
            <div className="actions-left d-flex flex-wrap">
              <Button
                className="add-new-btn"
                color="primary"
                onClick={() => handleCreateTerm()}
                outline
              >
                <Plus size={15} />
                <span className="align-middle">اضافه کردن ترم</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <MDBDataTable
            className="MDBTABLE"
            striped
            bordered
            small
            data={data}
          />
        </CardBody>
      </Card>
      <Modals
        modal={Modal}
        setmodal={setModal}
        setChange={doDelete}
        title={"حذف ترم"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </Fragment>
  );
};
export default TermList;
