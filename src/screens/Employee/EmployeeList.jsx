import React, { Component, useState, useEffect, Fragment } from "react";
import {
  getAllEmployees,
  DeleteEmployeeById,
} from "../../services/Employee.api";
import Modals from "../../components/layout/modal";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { MDBDataTable, MDBBtn } from "../../assets/css/mdbreact";
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap";
import {
  Edit,
  Edit2,
  Trash,
  // ChevronDown,
  Plus,
  Trash2,
  // Check,
  // ChevronLeft,
  // ChevronRight
} from "react-feather";
export const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [Modal, setModal] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const data = {
    columns: [
      {
        label: "نام کارمند",
        field: "fullName",
        sort: "asc",
        width: 150,
      },
      {
        label: "ایمیل کارمند",
        field: "email",
        sort: "asc",
        width: 270,
      },
      {
        label: " شماره همراه  ",
        field: "phoneNumber",
        sort: "asc",
        width: 200,
      },
      {
        label: " شماره ملی  ",
        field: "nationalId",
        sort: "asc",
        width: 200,
      },
      {
        label: " نقش کارمند  ",
        field: "role",
        sort: "asc",
        width: 200,
      },
      {
        label: "",
        field: "position",
        width: 100,
      },
    ],
    rows: employeeData.map((employee) => ({
      fullName:
        employee.fullName.length >= 12
          ? employee.fullName.substr(0, 12) + "..."
          : employee.fullName,
      email:
        employee.email.length >= 15
          ? "..." + employee.email.substr(0, 15)
          : employee.email,
      phoneNumber: employee.phoneNumber,
      nationalId: employee.nationalId,
      role: employee.role,
      position: (
        <div className="data-list-action">
          <Button
            className="add-new-btn mr-1"
            color="primary"
            onClick={() => handleEditEmployee(employee._id)}
          >
            <Edit2 size={15} className="cursor-pointer" />
          </Button>
          <Button
            className="add-new-btn"
            color="danger"
            onClick={() => handleDeleteEmployee(employee._id)}
          >
            <Trash2 size={15} className="cursor-pointer" />
          </Button>
        </div>
      ),
    })),
  };
  const history = useHistory();
  const employeeItems = async () => {
    const allEmployee = await getAllEmployees();
    setEmployeeData(allEmployee);
  };
  const handleEditEmployee = (employeeId) => {
    history.push(`/admin/Employee/EmployeeProfile/${employeeId}`);
  };
  const handleDeleteEmployee = (employeeId) => {
    setModal(true);
    setDeleteId(employeeId);
  };
  const doDelete = async () => {
    if (!DeleteId) {
      return;
    }
    try {
      const res = await DeleteEmployeeById(DeleteId);
      toast.success("کارمند با موفقیت پاک شد ");
      const newemployee = employeeData.filter(
        (employee) => employee._id !== DeleteId
      );
      setEmployeeData(newemployee);
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error("دوباره امتحان کنید ");
      }
    } finally {
      setDeleteId(null);
    }
  };

  useEffect(() => {
    employeeItems();
  }, []);
  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle> لیست کارمندان </CardTitle>
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
        fullName={"حذف کارمند"}
        message={"آیا مطمئنید؟"}
        pic={"trach.png"}
      />
    </Fragment>
  );
};
export default EmployeeList;
