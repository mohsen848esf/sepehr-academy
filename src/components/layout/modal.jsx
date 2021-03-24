import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "../../assets/css/mdbreact";
import "../../assets/css/manual/layout/Modal.css";

const Modal = ({ title, modal, setmodal, message, setChange }) => {
  const [state, setstate] = useState(false);
  const toggle = () => {
    setmodal(!modal);
  };
  // useEffect(() => {
  // }, []);
  const handleChange = () => {
    setmodal(!modal);
    setChange();
  };
  return (
    <MDBContainer>
      <MDBModal isOpen={modal} toggle={toggle} centered>
        <MDBModalHeader className="text-center modalTitle" toggle={toggle}>
          {title}
        </MDBModalHeader>
        <MDBModalBody className=" text-center fa-2x">{message}</MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="danger" onClick={toggle}>
            خیر
          </MDBBtn>
          <MDBBtn color="success" onClick={handleChange}>
            {" "}
            بله
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
};

export default Modal;
