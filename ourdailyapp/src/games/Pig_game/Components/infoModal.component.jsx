import React from "react";
import S from "./infoModal.style";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleInfoModal } from "../../../redux/pigGameModals/pigGameModals.actions";
import { selectShowInfoModal } from "../../../redux/pigGameModals/pigGameModals.selectors";

import { Modal } from "react-bootstrap";

const InfoModal = ({ showInfoModal, toggleInfoModal }) => {
  return (
    <S.InfoModal
      show={showInfoModal}
      onHide={() => {
        toggleInfoModal();
      }}
      centered
    >
      <Modal.Header closeButton>
        <S.ModalTitle>Pig Game</S.ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <S.Button variant="primary">Nailed it</S.Button>
      </Modal.Body>
    </S.InfoModal>
  );
};

const mapStateToProps = createStructuredSelector({
  showInfoModal: selectShowInfoModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleInfoModal: () => dispatch(toggleInfoModal),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoModal);
