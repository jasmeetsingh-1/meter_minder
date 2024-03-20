import { Formik, Form } from "formik";
import React from "react";
import logo from "../../../assets/logo.svg";
import backButton from "../../../assets/back-svgrepo-com.svg";
import "./viewbill.css";

function ViewBill({ month, setViewingBill }) {
  var converter = require("number-to-words");
  const innvoiceDatesData = {
    dueDate: "2024-04-28",
    invoiceDate: "2024-03-31",
    invoiceNumber: "#AB2324-01",
    refernceNumber: "INV-057",
  };
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="view-bill-main-holder">
      <img
        src={backButton}
        alt=""
        width="20px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setViewingBill(false);
        }}
      />
      <div className="view-bill-header">
        <div>
          <img src={logo} alt="logo" title="logo" />
          <span>KSEB</span>
        </div>
        <div>
          <span>
            Business Address <br />
            City, State, IN- 000 0001 <br />
            TAX ID00XXXX1234X0XX
          </span>
        </div>
      </div>
      <div className="billed-to-address">
        <span>Billed to</span>
        <span style={{ fontWeight: "700", color: "black" }}>Jasmeet Singh</span>
        <span>
          Info Park <br />
          Kochi <br />
          +0 (000) 123-4567
        </span>
      </div>
      <div className="table-holder-view-bill">
        <Formik initialValues={innvoiceDatesData}>
          {({ values }) => (
            <Form>
              <div className="table-heading-view-bill">
                <div className="table-heading-left-div-viewBill">
                  <div className="left-div-inner-table">
                    <label>Due Date</label>
                    <input value={values.dueDate} disabled />
                  </div>
                  <div className="right-div-inner-table">
                    <label className="text-end">Invoice date</label>
                    <input
                      value={values.invoiceDate}
                      disabled
                      className="text-end"
                    />
                  </div>
                </div>
                <div>
                  <div className="left-div-inner-table">
                    <label>Invoice number</label>
                    <input value={values.invoiceNumber} disabled />
                  </div>
                  <div className="right-div-inner-table">
                    <label className="text-end">Reference</label>
                    <input
                      value={values.refernceNumber}
                      disabled
                      className="text-end"
                    />
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="cost-table-holder-viewBill">
          <table className="bill-table-paybill">
            <thead style={{ color: "#5E6470", fontSize: "medium" }}>
              <tr>
                <th style={{ textAlign: "left", paddingLeft: "1rem" }}>
                  Service
                </th>

                <th>Qty</th>
                <th>Rate</th>
                <th style={{ paddingRight: "1rem" }}>Line Total</th>
              </tr>
            </thead>
            <tbody className="viewBill-table-body">
              <tr className="tr-to-color-view-bill">
                <td>Electricity</td>

                <td>67</td>
                <td>₹10</td>
                <td>₹670</td>
              </tr>

              <tr className="sub-table-view-bill">
                <td></td>
                <td></td>

                <td>SubTotal</td>
                <td>₹670</td>
              </tr>
              <tr className="sub-table-view-bill">
                <td></td>
                <td></td>

                <td>Tax(0%)</td>
                <td>₹0</td>
              </tr>
              <tr className="sub-table-view-bill">
                <td></td>
                <td></td>

                <td>Total</td>
                <td>₹670</td>
              </tr>
              <tr className="sub-table-view-bill">
                <td></td>
                <td></td>

                <td
                  className="last-col-viewBill-special"
                  style={{
                    borderBottomLeftRadius: "20px",
                  }}
                >
                  Amount due
                </td>
                <td
                  className="last-col-viewBill-special"
                  style={{
                    borderBottomRightRadius: "20px",
                  }}
                >
                  ₹670
                </td>
              </tr>
            </tbody>
          </table>
          <div className="total-amount-in-Words-holder">
            Rs. {capitalizeFirstLetter(converter.toWords(670))} only
          </div>
        </div>
        <div className="footer-view-bill-portion">
          <div>Thank you for the business!</div>
          <div>
            <span>+91 00000 00000</span>
            <span>demo@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewBill;
