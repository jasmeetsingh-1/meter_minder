import React, { useState } from "react";
import "./paybill.css";
import Header from "../header";
import PaymentModal from "../modals/paymentModal";
import PaymentSuccessfullModal from "../modals/PaymentSuccessfulModal";

function PayBill({ setmenuSelected }) {
  const [showPaymentModal, setshowPaymentModal] = useState(false);
  const [showPaymentSuccessfulModal, setshowPaymentSuccessfulModal] =
    useState(false);
  return (
    <div>
      <Header heading="View Bill & Pay" />
      <div className="header-paybill">
        <div>
          Invoice: <span>#AB2324-01</span>
        </div>
        <div>
          Date: <span>01 Aug, 2023</span>
        </div>
      </div>
      <div className="dashboard-card-holders">
        <div className="card-paybill">
          <span>Billing Address:</span>
          <p>Jasmeet Singh</p>
          <p>Address of the customer</p>
        </div>
        <div className="card-paybill">
          <span className="card-paybill-heading">Details:</span>
          <div className="details-card-paybill">
            Units used : <span>67 units</span>
          </div>
          <div className="details-card-paybill">
            From : <span>01 Aug, 2023</span>
          </div>
          <div className="details-card-paybill">
            To : <span>01 Sept, 2023</span>
          </div>
        </div>
      </div>
      <div
        className="header-paybill"
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          fontSize: "x-large",
        }}
      >
        <span style={{ color: "blue", fontWeight: "bolder" }}>₹8424</span>{" "}
        &nbsp;dues on 15 Aug, 2023
      </div>
      <div className="cost-table-holder-paybill">
        <table className="bill-table-paybill">
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>Service</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Line Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electricity</td>
              <td>67</td>
              <td>₹3</td>
              <td>₹1244</td>
            </tr>
            <tr>
              <td>Electricity</td>
              <td>67</td>
              <td>₹3</td>
              <td>₹1244</td>
            </tr>
            <tr>
              <td>Electricity</td>
              <td>67</td>
              <td>₹3</td>
              <td>₹1244</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>SubTotal</td>
              <td>₹1244</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Tax(0%)</td>
              <td>₹0</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>₹1244</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Amount due</td>
              <td>₹1244</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="payment-card-holders-paybill">
        <button
          className="btn btn-secondary"
          onClick={() => {
            setmenuSelected(1);
          }}
        >
          Back to home
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            setshowPaymentModal(true);
          }}
        >
          Pay now
        </button>
      </div>

      <PaymentModal
        showModal={showPaymentModal}
        onHide={() => {
          setshowPaymentModal(false);
        }}
        showPaymentModal={() => {
          setshowPaymentModal(false);
          setshowPaymentSuccessfulModal(true);
        }}
      />
      <PaymentSuccessfullModal
        setmenuSelected={setmenuSelected}
        showModal={showPaymentSuccessfulModal}
        onHide={() => {
          setshowPaymentSuccessfulModal(false);
        }}
      />
    </div>
  );
}

export default PayBill;

/* .bill-heading-color {
  background-color: rgb(0, 183, 255);
  font-weight: 800;
  color: white;
}
.bills-fileds {
  border: none;
}
.second-text {
  color: rgb(255, 102, 0);
} */
