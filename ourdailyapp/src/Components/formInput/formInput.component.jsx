import React from "react";
import "./formInput.style.scss";

import { Form } from "react-bootstrap";

const FormInput = ({
  id,
  labelText,
  type,
  placeholder,
  handleInputChange,
  value,
  name,
  minLength,
  maxLength,
  formText,
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
        minLength={minLength}
        maxLength={maxLength}
        required
      />
      {formText && <Form.Text className="text-muted">{formText}</Form.Text>}
    </Form.Group>
  );
};

export default FormInput;
