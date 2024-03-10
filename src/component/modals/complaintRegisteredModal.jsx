import React from "react";
import { Modal } from "react-bootstrap";
import complaintAnnimation from "../../assets/animations/complaintRegisterAnnimation.json";
import Lottie from "lottie-react";

import "./ModalsCssFiles/signUpModal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CopyToClipboard from "react-copy-to-clipboard";
import copyLogo from "../../assets/copy-svgrepo-com.svg";

function ComplaintRegisteredModal({
  showModal,
  onHide,
  setmenuSelected,
  uniqueComplaintId,
}) {
  const toastConfig = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  return (
    <>
      <Modal
        show={showModal}
        onHide={onHide}
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
        <Modal.Body>
          <div className="signup-modal-image-logo-holder">
            <Lottie
              animationData={complaintAnnimation}
              loop={false}
              autoplay={true}
              style={{ height: 100 }}
            />
          </div>
          <p className="signup-modal-heading">
            Complaint Registered Successfully
          </p>
          <div className="signup-modal-content">
            <span>
              Your Complaint is registered with us! Our team will get back to
              you as soon as possible.
            </span>
            <div className="signup-modal-userId-holder">
              Complaint Id:{" "}
              <CopyToClipboard text={uniqueComplaintId}>
                <span
                  onClick={() => {
                    toast.success("Complaint Id copied!", toastConfig);
                  }}
                >
                  {uniqueComplaintId}
                  <img
                    src={copyLogo}
                    width="15px"
                    style={{ marginLeft: "4px", marginBottom: "2px" }}
                  />
                </span>
              </CopyToClipboard>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                minWidth: "25%",
              }}
              className="btn signup-form-loginButton"
              onClick={() => {
                setmenuSelected(4);
              }}
            >
              See Complaint Status
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default ComplaintRegisteredModal;
