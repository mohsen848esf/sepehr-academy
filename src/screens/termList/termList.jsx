import React ,{ Component , useState , useEffect  } from 'react';
import { getAllCoursesFromTerms as getCourses, getCourseById, getAllTerms , getTermById } from '../../services/student.api';
import http from '../../services/http-service.api';
import TermEdit from './term/termEdit'
import Sidebar from "./DataListSidebar"
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'

import {
  MDBDataTable,
  MDBBtn
} from 'mdbreact';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button
} from "reactstrap"
import {
  Edit,
  Trash,
  // ChevronDown,
  Plus,
  // Check,
  // ChevronLeft,
  // ChevronRight
} from "react-feather"
const API_URL= process.env.REACT_APP_PUBLIC_PATH;

export const TermList = () => {
  const [terms, setTerms] = useState([])
  const data = {
    columns: [
      {
        label: 'نام ترم',
        field: 'termName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'استاد',
        field: 'teacherName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'نام دوره',
        field: 'courseName',
        sort: 'asc',
        width: 200
      },
      {
        label: 'قیمت ترم',
        field: 'price',
        sort: 'asc',
        width: 100
      },
      {
        label: 'شروع ترم',
        field: 'startDate',
        sort: 'asc',
        width: 150
      },
      {
        label: 'پایان دوره',
        field: 'endDate',
        sort: 'asc',
        width: 100
      },
      {
        label: "",
        field: "position",
        width: 100,
      }
    ],
    rows: terms.map((term) => ({
      termName: term.title.length >= 8 ? term.title.substr(0, 8) + "..." : term.title,
      teacherName: term.teacher.fullName.length >= 8 ? term.teacher.fullName.substr(0, 8) + "..." : term.teacher.fullName,
      courseName: term.course.courseName.length >= 10 ? term.course.courseName.substr(0, 10) + "..." : term.course.courseName,
      price: `تومان ${" " + term.cost}`,
      startDate: term.startDate.split("T")[0].replaceAll("-", "/"),
      endDate: term.endDate.split("T")[0].replaceAll("-", "/"),
      position:
        <div className="data-list-action">
          <Edit
            className="cursor-pointer mr-1"
            size={20}
            onClick={() => {
              handleEditTerm(term._id)
            }}
          />
          <Trash
            className="cursor-pointer"
            size={20}
            onClick={() => {
              handleDeleteTerm(term._id)

            }}
          />
        </div>
    }))
  };
  const history = useHistory();
  const termItems = async() => {
    const allCourses = await getAllTerms();
    setTerms(allCourses)
    
  }
  const handleCreateTerm = () => {
    history.push(`/admin/createTerm`)
  }
  const handleEditTerm = (termId) => {
    history.push(`/admin/editterm/${termId}`)
    console.log(termId)
  }
  const handleDeleteTerm = async(termId) => {
  try {
    const res = await http.delete(API_URL + `term/${termId}`)
    toast.success("ترم با موفقیت پاک شد ")
    const newTerms = terms.filter(term => term._id !== termId);
    setTerms(newTerms)
  } catch (ex) {
    if (ex.response && ex.response.status >= 400) {
    toast.error("دوباره امتحان کنید ")
      
    }
  }
  }

  useEffect(() => {
    termItems();
  }, []);
  return (
        <Card>
          <CardHeader>
        <CardTitle> لیست ترم ها</CardTitle>
        <div className="data-list-header d-flex justify-content-between flex-wrap">
          <div className="actions-left d-flex flex-wrap">
            <Button
              className="add-new-btn"
              color="primary"
              onClick={() => handleCreateTerm()}
              outline>
              <Plus size={15} />
              <span className="align-middle">اضافه کردن ترم</span>
            </Button>
          </div>
        </div>
          </CardHeader>
          <CardBody>
              <MDBDataTable
                striped
                bordered
                small
                data = { data }
            />
          </CardBody>
        </Card>
      )
}
export default TermList;