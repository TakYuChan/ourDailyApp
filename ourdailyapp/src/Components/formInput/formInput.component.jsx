import React from "react";
import "./formInput.style.scss";

import { Form } from "react-bootstrap";

import FormErrorMessage from "../formErrorMessage/formErrorMessage.component";

const FormInput = ({
  id,
  labelText,
  type,
  placeholder,
  handleInputChange,
  value,
  name,
  formText,
  errorObj,
}) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{labelText}</Form.Label>
      <Form.Control
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        required
      />
      {errorObj !== undefined && <FormErrorMessage errorObj={errorObj} />}
      {formText && <Form.Text className="text-muted">{formText}</Form.Text>}
    </Form.Group>
  );
};

export default FormInput;
