import React, { useState, useEffect } from "react";
import WizardComponent from "./wizardComponent";
import {
  AvInput,
  AvGroup,
  AvFeedback,
  AvField,
} from "availity-reactstrap-validation";
import {
  Label,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput,
} from "../../../assets/css/mdbreact";
import "./WizardForm.css";
import ForgetPass from "../forgetPaasword";
import ResetPass from "../resetpass";
// import Checkbox from "../checkbox/CheckboxesVuexy";
import { Check, Mail, Lock } from "react-feather";
const Wizard = () => {
  const [steps, setSteps] = useState([
    {
      title: <Mail size={20} />,
      content: (
        <MDBContainer>
          <div className="d-flex justify-content-center mt-5 bg bg-white">
            <div className="">
              <MDBCard
                className="card-image ForgetPassCard"
                style={{
                  // backgroundImage:
                  //   "url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)",
                  width: "28rem",
                }}
              >
                <div className="text-white ForgetPassText-Box py-5 px-5 box-shadow-1">
                  <div className="text-center">
                    <h3 className="dark-text mb-5 mt-4 font-weight-bold">
                      <strong>فراموشی رمز</strong>
                    </h3>
                  </div>
                  <AvGroup>
                    <Label className="dark-text "> ایمیل </Label>
                    <AvInput name="last-name" type="email" required />
                    <AvFeedback> ایمیل درست را وارد کنید </AvFeedback>
                  </AvGroup>
                </div>
              </MDBCard>
            </div>
          </div>
        </MDBContainer>

        // <ForgetPass />
      ),
    },
    {
      title: <Lock size={20} />,
      content: (
        <MDBContainer>
          <div className="d-flex justify-content-center mt-5 bg bg-white">
            <div className="">
              <MDBCard
                className="card-image ForgetPassCard"
                style={{
                  // backgroundImage:
                  //   "url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)",
                  width: "28rem",
                }}
              >
                <div className="text-white ForgetPassText-Box py-5 px-5 box-shadow-1">
                  <div className="text-center">
                    <h3 className="dark-text mb-5 mt-4 font-weight-bold">
                      <strong>تغییر رمز</strong>
                    </h3>
                  </div>
                  <AvGroup>
                    <Label className="dark-text ">
                      {" "}
                      رمز جدید را وارد کنید{" "}
                    </Label>
                    <AvInput name="last-name" type="text" required />
                    <AvFeedback> رمز را وارد کنید </AvFeedback>
                  </AvGroup>
                </div>
              </MDBCard>
            </div>
          </div>
        </MDBContainer>
      ),
    },
  ]);
  return (
    <div className="container">
      <Card>
        <CardBody>
          <WizardComponent validate steps={steps} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Wizard;
