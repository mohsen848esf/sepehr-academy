import React, { Component, useState, useEffect, Fragment } from "react";
import {
  getAllCourses,
  getCourseById,
  addCourse,
  UpdateCourse,
  DeleteCourseById,
} from "../../services/courses.api";
import http from "../../services/http-service.api";
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
// const API_URL = process.env.REACT_APP_PUBLIC_PATH;

export const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [Modal, setModal] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const topic = "";
  const data = {
    columns: [
      {
        label: "نام دوره",
        field: "courseName",
        sort: "asc",
        width: 150,
      },
      {
        label: "توضیحات",
        field: "description",
        sort: "asc",
        width: 270,
      },
      {
        label: " سرفصل ها",
        field: "topics",
        sort: "asc",
        width: 200,
      },
      {
        label: "زمان ایجاد دوره",
        field: "createDate",
        sort: "asc",
        width: 150,
      },
      {
        label: "  ترم های ارائه شده",
        field: "terms",
        sort: "asc",
        width: 150,
      },

      {
        label: "",
        field: "position",
        width: 100,
      },
    ],
    rows: courses.map((course) => ({
      courseName:
        course.courseName.length >= 10
          ? course.courseName.substr(0, 10) + "..."
          : course.courseName,
      description:
        course.description.length >= 15
          ? course.description.substr(0, 15) + "..."
          : course.description,
      topics: course.topics.map((top) => top + " , "),
      // course.topics.map((top) => (topic += " , " + top)) && topic.length > 15
      //   ? topic.substr(0, 15) + "..."
      //   : topic,
      createDate: course.createDate.split("T")[0].replaceAll("-", "/"),
      terms: course.terms.length,
      position: (
        <div className="data-list-action">
          <Button
            className="add-new-btn mr-1"
            color="primary"
            onClick={() => handleEditCourse(course._id)}
          >
            <Edit size={15} className="cursor-pointer" />
          </Button>
          <Button
            className="add-new-btn"
            color="danger"
            onClick={() => handleDeleteCourse(course._id)}
          >
            <Trash2 size={15} className="cursor-pointer" />
          </Button>
        </div>
      ),
    })),
  };
  const history = useHistory();
  const CoursesItems = async () => {
    const allCourses = await getAllCourses();
    setCourses(allCourses);
  };
  const handleCreateCourse = () => {
    history.push(`/admin/CreateCourse`);
  };
  const handleEditCourse = (courseId) => {
    history.push(`/admin/EditCourse/${courseId}`);
    // console.log(courseId);
  };
  const handleDeleteCourse = (courseId) => {
    setModal(true);
    setDeleteId(courseId);
  };
  const doDelete = async () => {
    if (!DeleteId) {
      return;
    }
    try {
      const res = await DeleteCourseById(DeleteId);
      toast.success("دوره با موفقیت پاک شد ");
      const newCourses = courses.filter((course) => course._id !== DeleteId);
      setCourses(newCourses);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("دوباره امتحان کنید ");
      }
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    CoursesItems();
  }, []);
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle> لیست دوره ها</CardTitle>
          <div className="data-list-header d-flex justify-content-between flex-wrap">
            <div className="actions-left d-flex flex-wrap">
              <Button
                className="add-new-btn"
                color="primary"
                onClick={() => handleCreateCourse()}
                outline
              >
                <Plus size={15} />
                <span className="align-middle">ایجاد دوره</span>
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
        title={"حذف دوره"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </Fragment>
  );
};
export default CoursesList;
