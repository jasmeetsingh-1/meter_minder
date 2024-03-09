import React from "react";
import { Modal } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import "./ModalsCssFiles/signUpModal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CopyToClipboard from "react-copy-to-clipboard";
import copyLogo from "../../assets/copy-svgrepo-com.svg";

function SignupModal({ showModal, onHide, loginButtonClicked, userId }) {
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
            <img
              src={logo}
              width="50px"
              className="img-fluid"
              alt="website-logo"
              title="meterMinder"
            />
            <h1>Meter Minder</h1>
          </div>
          <p className="signup-modal-heading">Sign Up Successful</p>
          <div className="signup-modal-content">
            <span>
              Welcome to Meter Minder! Kindly note down the user Id for future
              logins.
            </span>
            <div className="signup-modal-userId-holder">
              User id:{" "}
              <CopyToClipboard text={userId}>
                <span
                  onClick={() => {
                    toast.success("User Id copied", toastConfig);
                  }}
                >
                  {userId}
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
              className="btn signup-form-loginButton"
              style={{ display: "flex", justifyContent: "center" }}
              onClick={loginButtonClicked}
            >
              Login
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default SignupModal;
