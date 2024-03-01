import { useState } from "react";
import Header from "../header";
import ComplaintRegisteredModal from "../modals/complaintRegisteredModal";
import "./cssFiles/complaintRegister.css";

function ComplaintRegister(props) {
  const [showComplaintRegisteredModal, setshowComplaintRegisteredModal] =
    useState(false);
  return (
    <>
      <Header heading={"Register Complaint"} />

      <div className="col-12 mt-4">
        <div className="card shadow-lg complaint-register-holder">
          <div className="container view-bil-form mt-4">
            <form>
              <label htmlFor="details" className="main-heading">
                Complaint Details
              </label>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label htmlFor="complaint-type" className="complaint-labels">
                    Complaint/Service type
                  </label>
                  <select
                    className="form-control"
                    name="complaint-type-contents"
                    id="complaint-type-contents"
                  >
                    <option value="street light related">
                      STREET LIGHT RELATED
                    </option>
                    <option value="frequent interruption">
                      frequent interruption
                    </option>
                    <option value="billing related">BILLING RELATED</option>
                    <option value="meter related">METER RELATED</option>
                    <option value="voltage related">VOLTAGE RELATED</option>
                    <option value="no power supply related">
                      NO POWER SUPPLY RELATED
                    </option>
                    <option value="transformer related">
                      TRANSFORMER RELATED
                    </option>
                    <option value="line related">LINE RELATED</option>
                    <option value="pole related">POLE RELATED</option>
                    <option value="service wire related">
                      SERVICE WIRE RELATED
                    </option>
                    <option value="billing/meter related">
                      BILING/METER RELATED
                    </option>
                    <option value="theft misconduct streetlight related">
                      THEFT MISCONDUCT STREETLIGHT RELATED
                    </option>
                    <option value="service at door step">
                      SERVICE AT DOOR STEP
                    </option>
                    <option value="new connection at door step">
                      NEW CONNECTION AT DOOR STEP
                    </option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="land mark" className="complaint-labels">
                    Land mark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="land-mark"
                    id="land-mark"
                  />
                </div>
              </div>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label htmlFor="complaint-type" className="complaint-labels">
                    Category
                  </label>
                  <select
                    className="form-control"
                    name="complaint-type-contents"
                    id="complaint-type-contents"
                  >
                    <option value="street light related">
                      STREET LIGHT RELATED
                    </option>
                    <option value="frequent interruption">
                      frequent interruption
                    </option>
                    <option value="billing related">BILLING RELATED</option>
                    <option value="meter related">METER RELATED</option>
                    <option value="voltage related">VOLTAGE RELATED</option>
                    <option value="no power supply related">
                      NO POWER SUPPLY RELATED
                    </option>
                    <option value="transformer related">
                      TRANSFORMER RELATED
                    </option>
                    <option value="line related">LINE RELATED</option>
                    <option value="pole related">POLE RELATED</option>
                    <option value="service wire related">
                      SERVICE WIRE RELATED
                    </option>
                    <option value="billing/meter related">
                      BILING/METER RELATED
                    </option>
                    <option value="theft misconduct streetlight related">
                      THEFT MISCONDUCT STREETLIGHT RELATED
                    </option>
                    <option value="service at door step">
                      SERVICE AT DOOR STEP
                    </option>
                    <option value="new connection at door step">
                      NEW CONNECTION AT DOOR STEP
                    </option>
                  </select>
                </div>
                <div className="col-6">
                  <label htmlFor="consumer number" className="complaint-labels">
                    User ID <span className="star-color">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="land-mark"
                    id="land-mark"
                  />
                </div>
              </div>
              <label htmlFor="details" className="main-heading">
                Person Details
              </label>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label htmlFor="contact person" className="complaint-labels">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    name="contact-person"
                    id="contact-person"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="consumer number" className="complaint-labels">
                    Problem description
                  </label>
                  <input
                    type="text"
                    name="problem-description"
                    id="problem-description"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label htmlFor="contact person" className="complaint-labels">
                    Mobile number
                  </label>
                  <input
                    type="text"
                    name="contact-person"
                    id="contact-person"
                    className="form-control"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="consumer number" className="complaint-labels">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="problem-description"
                    id="problem-description"
                  />
                </div>
              </div>
              {/* <label htmlFor="details" className="main-heading">
                Confirmation
              </label>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label htmlFor="contact person" className="complaint-labels">
                    Captcha
                  </label>
                  <input
                    type="text"
                    name="captcha-code"
                    id="captcha-code"
                    className="form-control captcha-complaint"
                    readonly
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="consumer number" className="complaint-labels">
                    Verification code <span className="star-color">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="problem-description"
                    id="problem-description"
                  />
                </div>
              </div> */}
              <div className="row text-center">
                <div className="col-12 register-complaint-button-holder">
                  <button
                    className="btn btn-secondary register-complaint-buttons"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary register-complaint-buttons"
                    onClick={(e) => {
                      setshowComplaintRegisteredModal(true);
                      e.preventDefault();
                    }}
                  >
                    Submit Complaint
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ComplaintRegisteredModal
        showModal={showComplaintRegisteredModal}
        onHide={() => {
          setshowComplaintRegisteredModal(false);
        }}
        setmenuSelected={props.setmenuSelected}
      />
    </>
  );
}

export default ComplaintRegister;
