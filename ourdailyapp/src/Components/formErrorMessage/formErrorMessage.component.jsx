import React from "react";
import "./formErrorMessage.style.scss";

import { Form } from "react-bootstrap";

const FormErrorMessage = ({error}) => {

    let errorType = null;
    let errorText = null;

    for (const e in error) {
        if(error[e] === true) {
            errorType = e;
        }
    }

    switch(errorType) {
        //displayName
        case "shortDisplayName":
            errorText = <Form.Text className="form-error">
            The length of display name must between 1 to 30
            </Form.Text>;
            break;
        case "longDisplayName":
            errorText = <Form.Text className="form-error">
            The length of display name must between 1 to 30
            </Form.Text>;
            break;
        default:
            errorText = null;
    }

    return errorText;
}

export default FormErrorMessage;