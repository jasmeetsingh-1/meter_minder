import React from "react";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import "./ModalsCssFiles/deleteComplaintModal.css";
import deleteWarning from "../../assets/warning-svg.svg";

function DeleteComplaintModal({ showModal, onHide, complaintDeletedHandler }) {
  return (
    <Modal
      show={showModal}
      onHide={onHide}
      //   size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        style={{ border: "none", padding: "10px 9px 0" }}
        closeButton
      ></Modal.Header>
      <Modal.Body className="modal-body-deleteComplaint">
        <div className="heading-div-deleteComplaint-modal">
          Delete Complaint #123
        </div>

        <p className="delete-modal-heading">
          Are you sure you want to delete this complaint?
        </p>
        <div className="warning-div-deleteComplaint">
          <div>
            <img src={deleteWarning} width="17px" />
            Warning
          </div>
          <div>You will not be able to undo the action.</div>
        </div>

        <div className="button-deleteComplaint-modal">
          <button
            onClick={(e) => {
              e.preventDefault();
              onHide();
            }}
          >
            No, Cancel
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              complaintDeletedHandler();
              onHide();
            }}
          >
            Yes, Delete
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteComplaintModal;
