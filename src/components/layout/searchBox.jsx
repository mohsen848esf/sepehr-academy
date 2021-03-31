import React from "react";
import { Search } from "react-feather";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Row,
  Col,
  Button,
} from "reactstrap";
const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-label-group position-relative has-icon-left">
      <input
        type="text"
        name="query"
        className="form-control my-3"
        placeholder="جستجو کنید ..."
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />

      <div className="form-control-position searchBox" style={{ top: "18%" }}>
        <Search size={15} />
      </div>
      {/* <Label>Password</Label> */}
    </div>
  );
};

export default SearchBox;
