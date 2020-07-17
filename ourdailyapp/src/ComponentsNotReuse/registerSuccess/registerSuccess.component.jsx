import React from "react";
import S from "./registerSuccess.style";

import { Modal } from "react-bootstrap";

const RegisterSuccessScene = () => {
  return (
    <div className="registerSuccessModal">
      <Modal.Header>
        <S.ModalTitle className="registerSuccess-title">
          Successfully Registered
        </S.ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <S.PageContainer className="registerSuccess-body">
          <S.CongraText className="registerSuccess-text">
            Congratulations! You have successfully registered an account.
          </S.CongraText>
        </S.PageContainer>
      </Modal.Body>
    </div>
  );
};

export default RegisterSuccessScene;
