import React, { useState } from "react";
import Modal from "../layout/modal";
import { removeItem, getItem } from "../../services/storage/storage";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "../../assets/css/mdbreact";
import "../../assets/css/manual/layout/Modal.css";

const Logout = () => {
  const [logout, setLogout] = useState(true);
  const toggle = () => {
    setLogout(!logout);
  };
  const LogOut = (res) => {
    const role = getItem("role");
    if (res === false && role != "student") {
      window.location = "/admin/dashboard";
      return;
    } else if (res === false && role == "student") {
      window.location = "/";
      return;
    } else if (res === true) {
      removeItem("user");
      removeItem("token");
      removeItem("role");
      window.location = "/logIn";
    }
  };
  //   const LogOut = () => {
  //     removeItem("user");
  //     removeItem("token");
  //       removeItem("role");

  //   };
  return (
    <MDBContainer>
      <MDBModal isOpen={logout} toggle={toggle} centered>
        <MDBModalHeader className="text-center modalTitle" toggle={toggle}>
          {"خارج شدن از حساب کاربری"}
        </MDBModalHeader>
        <MDBModalBody className=" text-center fa-2x">
          {"آیا مطمئنید؟"}
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={() => LogOut(false)}>
            خیر
          </MDBBtn>
          <MDBBtn color="success" onClick={() => LogOut(true)}>
            {" "}
            بله
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default Logout;
