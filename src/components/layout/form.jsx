import React, { Component, Fragment } from "react";
import Joi from "joi-browser";
import Input from "./input";
// import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
    console.log(this.validate())
  };

  renderButton(label , classname ="primary" ) {
    return (
      // <Button.Ripple disabled={this.validate()} className={`btn btn-${classname} `} >
      //     Login 
      // </Button.Ripple>
      <button disabled={this.validate()} className={`btn btn-${classname} `} >
        {label}
      </button>
    );
  }



  renderInput(name, label, type = "text" , placeholder = ""  , icon="") {
    const { data, errors } = this.state;

    return (
      <Fragment>
        <Input
          type={type}
          name={name}
          value={data[name]}
          label={label}
          onChange={this.handleChange}
          error={errors[name]}
          aria-describedby="sizing-addon2"
          placeholder={placeholder}
          icon = {icon}
        />
        
      </Fragment>
    );
  }
}

export default Form;
