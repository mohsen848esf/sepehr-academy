import React, { Fragment } from "react";
import { Mail, Lock, Check, Facebook, Twitter, GitHub } from "react-feather"

// import Alert from './Alert'
import {
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap"
const iconNames = [
  { name: "Lock", value: <Lock size={15} /> },
  { name: "Mail", value: <Mail size={15} /> },
]
const Inputs = ({icon, name, label, error, ...rest }) => {
  const dis = error ? "block" : "none";
  const iconName = iconNames.find(ic => ic.name === icon)
  return (
    <FormGroup className="form-label-group position-relative has-icon-left" style={{margin: "20px 0"}}>
      <Input {...rest} name={name} id={name} className="form-control"  />
      {iconName &&
        <div className="form-control-position">
          {iconName.value}
        </div>
      }
      
      <Label  htmlFor={name}>{label}</Label>
      <h5 className="alert " style={{height: "12px" , margin: "2px" ,color: "red" , fontSize: "12px" ,padding: '0', display:{dis}}} >{error}</h5>
    </FormGroup>
  );
};

export default Inputs;
