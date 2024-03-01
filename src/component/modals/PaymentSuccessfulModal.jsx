import React from "react";
import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import paymentSuccessful from "../../assets/animations/paymentSuccessful.json";
import "./ModalsCssFiles/paymentSuccessfulModal.css";
import { useNavigate } from "react-router";

function PaymentSuccessfullModal({ showModal, onHide, setmenuSelected }) {
  const navigate = useNavigate();
  return (
    <>
      <Modal show={showModal} onHide={onHide}>
        <Modal.Header className="heading-payment-successful-modal">
          Payment Successful
        </Modal.Header>
        <Modal.Body>
          <div className="annimation-holder">
            <Lottie
              animationData={paymentSuccessful}
              loop={true}
              autoplay={true}
              style={{ height: 250 }}
            />
          </div>
          <div className="content-holder-payment-successful">
            Your payment for <span>₹8424</span> (Eight thousand four hundred
            twenty-four only) successful for invoice <span>#AB2324-01.</span>
          </div>
          <div className="login-button-holder">
            <button
              className="btn signup-form-loginButton"
              onClick={() => {
                onHide();
                setmenuSelected(1);
              }}
            >
              Home Page
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentSuccessfullModal;
