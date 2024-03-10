import { useFormik } from "formik";
import { useState } from "react";
import Header from "../header";
import ComplaintRegisteredModal from "../modals/complaintRegisteredModal";
import "./cssFiles/complaintRegister.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { complaintReducers } from "../redux-store/store";

function ComplaintRegister(props) {
  const [showComplaintRegisteredModal, setshowComplaintRegisteredModal] =
    useState(false);
  const [uniqueComplaintId, setuniqueComplaintId] = useState("");
  const userData = useSelector((state) => state.loginStore);

  const dispatcher = useDispatch();

  const complaintCategory = [
    {
      value: "Choose Category",
    },
    {
      value: "Power outages",
    },
    {
      value: "Voltage fluctuations",
    },
    {
      value: "High electricity bills",
    },
    {
      value: "Flickering lights",
    },
    {
      value: "Electrical surges",
    },
    {
      value: "Faulty wiring",
    },
    {
      value: "Meter reading",
    },
    {
      value: "Tripping circuit breakers",
    },
    {
      value: "Transformer issues",
    },
    {
      value: "Street light outages",
    },
  ];

  const subCategories = [
    {
      category: "Choose Category",
      subCategory: [{ value: "Choose category to see Subcategory" }],
    },
    {
      category: "Power outages",
      subCategory: [
        {
          value: "Unplanned Outages",
        },
        {
          value: "Equipment Failure",
        },
      ],
    },
    {
      category: "Voltage fluctuations",
      subCategory: [
        {
          value: "Overvoltage",
        },
        {
          value: "Undervoltage",
        },
      ],
    },
    {
      category: "High electricity bills",
      subCategory: [
        {
          value: "Incorrect Meter Reading",
        },
        {
          value: "Billing Error",
        },
      ],
    },
    {
      category: "Flickering lights",
      subCategory: [
        {
          value: "Faulty Bulbs or Fixtures",
        },
        {
          value: "Wiring Issues",
        },
      ],
    },
    {
      category: "Electrical surges",
      subCategory: [
        {
          value: "Internal Surges (within the home)",
        },
        {
          value: "External Surges (from the grid)",
        },
      ],
    },
    {
      category: "Faulty wiring",
      subCategory: [
        {
          value: "Frayed or Exposed Wires",
        },
        {
          value: "Inadequate Wiring for Load",
        },
      ],
    },
    {
      category: "Meter reading",
      subCategory: [
        {
          value: "Meter Not Recording Consumption Accurately",
        },
        {
          value: "Billing Discrepancies",
        },
      ],
    },
    {
      category: "Tripping circuit breakers",
      subCategory: [
        {
          value: "Overloaded Circuits",
        },
        {
          value: "Faulty Appliances Causing Trips",
        },
      ],
    },
    {
      category: "Transformer issues",
      subCategory: [
        {
          value: "Transformer Malfunction",
        },
        {
          value: "Overloaded Transformer",
        },
      ],
    },
    {
      category: "Street light outages",
      subCategory: [
        {
          value: "Bulb Replacement Needed",
        },
        {
          value: "Wiring or Connection Issues",
        },
      ],
    },
  ];

  function getRandom(length) {
    return Math.floor(
      Math.pow(10, length - 1) +
        Math.random() * 9 * Math.pow(10, length - 1).toString()
    );
  }

  const complaintRegisteredSubmtHandler = (values) => {
    const payload = {
      userId: values.complaintUserId,
      complaintDetails: {
        complaintId: getRandom(5),
        complaintStatus: "Pending",
        category: values.complaintCategory,
        subCategory: values.complaintSubCategory,
        problemDescription: values.problemDescription,
        contactPersonName: values.contactPersonName,
        contactPersonNumber: values.contactPersonNumber,
        complaintAddress: values.complaintAddress,
        complaintAddressLandmark: values.complaintAddressLandmark,
      },
    };
    setuniqueComplaintId(payload.complaintDetails.complaintId);
    dispatcher(complaintReducers.addComplaint(payload));
    setshowComplaintRegisteredModal(true);
  };

  const complaintRegisterFormValidator = Yup.object({
    complaintCategory: Yup.string()
      .required("Please choose category")
      .notOneOf(["Choose Category"], "Please choose a category"),
    // complaintSubCategory: Yup.string()
    //   .required("Please choose Subcategory")
    //   .notOneOf(
    //     ["Choose category to see Subcategory"],
    //     "Please choose a Subcategory"
    //   ),
    complaintUserId: Yup.string().required("Please enter User Id"),
    problemDescription: Yup.string().required(
      "Please enter problem Description"
    ),
    contactPersonName: Yup.string().required("Please enter your name"),
    contactPersonNumber: Yup.string()
      .required("Please enter your number")
      .min(10, "Phone number must be 10 digits")
      .max(10, "Phone number must be 10 digits"),
    complaintAddress: Yup.string().required("Please enter your address"),
    // complaintAddressLandmark: Yup.string(),
  });

  const complaintRegisterFormInitialValue = {
    complaintCategory: "Choose Category",
    complaintSubCategory: "Choose category to see Subcategory",
    complaintUserId: userData.data.userId,
    problemDescription: "desfr",
    contactPersonName: "Jasmeet ",
    contactPersonNumber: "9877998276",
    complaintAddress: "address",
    complaintAddressLandmark: "",
  };

  const formik = useFormik({
    initialValues: complaintRegisterFormInitialValue,
    validationSchema: complaintRegisterFormValidator,
    onSubmit: complaintRegisteredSubmtHandler,
  });

  return (
    <>
      <Header heading={"Register Complaint"} />

      <div className="col-12 mt-4">
        <div
          className="card shadow-lg complaint-register-holder"
          style={{ padding: "0 20px 20px" }}
        >
          <div className="container view-bil-form mt-4">
            <form onSubmit={formik.handleSubmit}>
              <div
                className="main-heading"
                style={{ marginBottom: "5px", fontSize: "x-large" }}
              >
                Complaint Details
              </div>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label
                    htmlFor="complaintCategory"
                    className="complaint-labels"
                  >
                    Complaint/Service type <span className="star-color">*</span>
                  </label>
                  <select
                    className="form-control"
                    name="complaintCategory"
                    id="complaintCategory"
                    value={formik.values.complaintCategory}
                    onChange={formik.handleChange}
                  >
                    {complaintCategory.map((item) => {
                      return <option value={item.value}>{item.value}</option>;
                    })}
                  </select>
                  {formik.errors.complaintCategory &&
                  formik.touched.complaintCategory ? (
                    <p
                      className="error-class-complaintRegister"
                      style={{ right: "52%" }}
                    >
                      {formik.errors.complaintCategory}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-6" style={{ position: "relative" }}>
                  <label
                    htmlFor="complaintSubCategory"
                    className="complaint-labels"
                  >
                    Category <span className="star-color">*</span>
                  </label>
                  <select
                    className="form-control"
                    name="complaintSubCategory"
                    id="complaintSubCategory"
                    value={formik.values.complaintSubCategory}
                    onChange={formik.handleChange}
                  >
                    {subCategories.map((item) => {
                      if (item.category == formik.values.complaintCategory) {
                        return item.subCategory.map((item) => {
                          return (
                            <option value={item.value}>{item.value}</option>
                          );
                        });
                      }
                      return null;
                    })}
                    {formik.errors.complaintSubCategory &&
                    formik.touched.complaintSubCategory ? (
                      <p
                        className="error-class-complaintRegister"
                        style={{ right: "15px" }}
                      >
                        {formik.errors.complaintSubCategory}
                      </p>
                    ) : (
                      ""
                    )}
                  </select>
                </div>
              </div>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label htmlFor="complaintUserId" className="complaint-labels">
                    User ID <span className="star-color">*</span>
                  </label>
                  <input
                    style={{ cursor: "not-allowed" }}
                    type="text"
                    className="form-control"
                    name="complaintUserId"
                    id="complaintUserId"
                    disabled={true}
                    value={formik.values.complaintUserId}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="col-6" style={{ position: "relative" }}>
                  <label
                    htmlFor="problemDescription"
                    className="complaint-labels"
                  >
                    Problem description <span className="star-color">*</span>
                  </label>
                  <input
                    type="text"
                    name="problemDescription"
                    id="problemDescription"
                    className="form-control"
                    value={formik.values.problemDescription}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.problemDescription &&
                  formik.touched.problemDescription ? (
                    <p
                      className="error-class-complaintRegister"
                      style={{ right: "15px" }}
                    >
                      {formik.errors.problemDescription}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div
                className="main-heading"
                style={{ marginBottom: "5px", fontSize: "x-large" }}
              >
                Contact Person Details
              </div>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label
                    htmlFor="contactPersonName"
                    className="complaint-labels"
                  >
                    Contact Person Name <span className="star-color">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPersonName"
                    id="contactPersonName"
                    className="form-control"
                    value={formik.values.contactPersonName}
                    onChange={formik.handleChange}
                    onKeyPress={(e) => {
                      if (
                        !/^[a-zA-Z0-9 ]*$/.test(e.key) ||
                        e.target.value.length > 49
                      )
                        e.preventDefault();
                    }}
                  />
                  {formik.errors.contactPersonName &&
                  formik.touched.contactPersonName ? (
                    <p
                      className="error-class-complaintRegister"
                      style={{ right: "52%" }}
                    >
                      {formik.errors.contactPersonName}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-6">
                  <label
                    htmlFor="contactPersonNumber"
                    className="complaint-labels"
                  >
                    Mobile number <span className="star-color">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPersonNumber"
                    id="contactPersonNumber"
                    className="form-control"
                    value={formik.values.contactPersonNumber}
                    onChange={formik.handleChange}
                    onKeyPress={(e) => {
                      if (!/^[0-9]*$/.test(e.key) || e.target.value.length > 9)
                        e.preventDefault();
                    }}
                  />
                  {formik.errors.contactPersonNumber &&
                  formik.touched.contactPersonNumber ? (
                    <p
                      className="error-class-complaintRegister"
                      style={{ right: "38px" }}
                    >
                      {formik.errors.contactPersonNumber}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="row complaint-form-content">
                <div className="col-6">
                  <label
                    htmlFor="complaintAddress"
                    className="complaint-labels"
                  >
                    Address <span className="star-color">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="complaintAddress"
                    id="complaintAddress"
                    value={formik.values.complaintAddress}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.complaintAddress &&
                  formik.touched.complaintAddress ? (
                    <p
                      className="error-class-complaintRegister"
                      style={{ right: "52%" }}
                    >
                      {formik.errors.complaintAddress}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-6">
                  <label
                    htmlFor="complaintAddressLandmark"
                    className="complaint-labels"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="complaintAddressLandmark"
                    id="complaintAddressLandmark"
                    value={formik.values.complaintAddressLandmark}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.complaintAddressLandmark &&
                  formik.touched.complaintAddressLandmark ? (
                    <p
                      className="error-class-complaintRegister"
                      style={{ right: "38px" }}
                    >
                      {formik.errors.complaintAddressLandmark}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className=" row text-centercol-12 register-complaint-button-holder">
                <button
                  className="btn btn-secondary register-complaint-buttons"
                  onClick={(e) => {
                    e.preventDefault();
                    formik.resetForm();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary register-complaint-buttons"
                  style={{ width: "23%" }}
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ComplaintRegisteredModal
        uniqueComplaintId={uniqueComplaintId}
        showModal={showComplaintRegisteredModal}
        onHide={() => {
          setshowComplaintRegisteredModal(false);
        }}
        setmenuSelected={props.setSideMenuState}
      />
    </>
  );
}

export default ComplaintRegister;
