import { Field, Form, Formik } from "formik";
import React from "react";
import Header from "../header";
import "./contactUs.css";
import * as Yup from "yup";

function ContactUs() {
  const contactUsFormInitials = {
    firstName: "",
    lastName: "",
    emailContactUs: "",
    phoneNumberContactUs: "",
    subjectContactUs: "",
    extraCommentContactUs: "",
  };

  const contactUsValdationSchema = Yup.object({
    firstName: Yup.string().required("Please enter your firstName"),
    lastName: Yup.string().required("Please enter your lastName"),
    emailContactUs: Yup.string()
      .email("Enter valid Email")
      .required("Please enter email"),
    phoneNumberContactUs: Yup.string()
      .required("Please enter Phone Number")
      .min(10, "Phone number must be 10 Digits")
      .max(10, "Phone number must be 10 Digits"),
    subjectContactUs: Yup.string().required("Please choose Subject"),
  });

  return (
    <>
      <Header heading={"Contact Us"} />
      <div className="main-outer-div-contactUs">
        <div className="header-of-contactUs">
          <div className="heading-holder-contactUs">
            <span>Contact Information</span>
            <span>Say something to start a live chat!</span>
          </div>
          <div className="contact-detials-section-header-contactUS">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z"
                  fill="#c9c9c9"
                />
                <path
                  d="M13 7.99999C15.103 7.99999 16 8.89699 16 11H18C18 7.77499 16.225 5.99999 13 5.99999V7.99999ZM16.422 13.443C16.2298 13.2683 15.9773 13.1752 15.7178 13.1832C15.4582 13.1912 15.212 13.2998 15.031 13.486L12.638 15.947C12.062 15.837 10.904 15.476 9.71198 14.287C8.51998 13.094 8.15898 11.933 8.05198 11.361L10.511 8.96699C10.6974 8.78612 10.8061 8.53982 10.8141 8.2802C10.8222 8.02059 10.7289 7.76804 10.554 7.57599L6.85898 3.51299C6.68402 3.32035 6.44086 3.2035 6.18113 3.18725C5.9214 3.17101 5.66557 3.25665 5.46798 3.42599L3.29798 5.28699C3.12509 5.46051 3.0219 5.69145 3.00798 5.93599C2.99298 6.18599 2.70698 12.108 7.29898 16.702C11.305 20.707 16.323 21 17.705 21C17.907 21 18.031 20.994 18.064 20.992C18.3085 20.9783 18.5393 20.8747 18.712 20.701L20.572 18.53C20.7414 18.3325 20.8273 18.0768 20.8112 17.817C20.7951 17.5573 20.6785 17.3141 20.486 17.139L16.422 13.443Z"
                  fill="#c9c9c9"
                />
              </svg>
              <span>+91 00000 00000</span>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="#c9c9c9"
                />
              </svg>
              <span>demo@gmail.com</span>
            </div>
            <div>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00001 0.5C6.81276 0.50258 4.71584 1.3726 3.16923 2.91922C1.62261 4.46584 0.752589 6.56276 0.750009 8.75C0.747389 10.5374 1.33124 12.2763 2.41201 13.7C2.41201 13.7 2.63701 13.9963 2.67376 14.039L9.00001 21.5L15.3293 14.0353C15.3623 13.9955 15.588 13.7 15.588 13.7L15.5888 13.6978C16.669 12.2747 17.2526 10.5366 17.25 8.75C17.2474 6.56276 16.3774 4.46584 14.8308 2.91922C13.2842 1.3726 11.1873 0.50258 9.00001 0.5ZM9.00001 11.75C8.40666 11.75 7.82665 11.5741 7.3333 11.2444C6.83995 10.9148 6.45543 10.4462 6.22837 9.89805C6.00131 9.34987 5.9419 8.74667 6.05765 8.16473C6.17341 7.58279 6.45913 7.04824 6.87869 6.62868C7.29825 6.20912 7.83279 5.9234 8.41474 5.80764C8.99668 5.69189 9.59988 5.7513 10.1481 5.97836C10.6962 6.20542 11.1648 6.58994 11.4944 7.08329C11.8241 7.57664 12 8.15666 12 8.75C11.999 9.54535 11.6826 10.3078 11.1202 10.8702C10.5578 11.4326 9.79535 11.749 9.00001 11.75Z"
                  fill="#c9c9c9"
                />
              </svg>

              <span>Business Address, City, State, IN- 000 0001</span>
            </div>
          </div>
        </div>

        <Formik
          initialValues={contactUsFormInitials}
          validationSchema={contactUsValdationSchema}
          // onSubmit={contactUsFormOnSubmitHandler}
          onSubmit={(values) => {
            console.log({ values });
          }}
        >
          {({ values }) => (
            <Form>
              <div className="contactUs-form">
                <div className="container">
                  <div className="row my-5 row-contactUs-form">
                    <div className="col-6">
                      <label htmlFor="firstName" className="label-color-change">
                        First Name
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control from-text-fileds"
                        value={values.firstName}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="">Last Name</label>
                      <Field
                        type="text"
                        className="form-control from-text-fileds"
                        name="lastName"
                        id="lastName"
                        value={values.lastName}
                      />
                    </div>
                  </div>
                  <div className="row row-contactUs-form">
                    <div className="col-6">
                      <label htmlFor="emailContactUs">Email</label>
                      <Field
                        type="text"
                        className="form-control from-text-fileds"
                        name="emailContactUs"
                        id="emailContactUs"
                        value={values.emailContactUs}
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="phoneNumberContactUs">Phone Number</label>
                      <Field
                        type="text"
                        className="form-control from-text-fileds"
                        name="phoneNumberContactUs"
                        id="phoneNumberContactUs"
                        value={values.phoneNumberContactUs}
                        onKeyPress={(e) => {
                          if (
                            !/^[0-9]*$/.test(e.key) ||
                            e.target.value.length > 9
                          )
                            e.preventDefault();
                        }}
                      />
                    </div>
                  </div>
                  <div className="row my-5 row-contactUs-form">
                    <div>
                      <label htmlFor="subjectContactUs">Select Subject?</label>
                      <div className="subject-options-holder">
                        <Field
                          name="subjectContactUs"
                          render={({ field }) => (
                            <>
                              <div className="radio-item">
                                <input
                                  {...field}
                                  id="newConnection"
                                  value="newConnection"
                                  checked={field.value === "newConnection"}
                                  name="subjectContactUs"
                                  type="radio"
                                />
                                <label htmlFor="newConnection">
                                  New Connection
                                </label>
                              </div>

                              <div className="radio-item">
                                <input
                                  {...field}
                                  id="closeConnection"
                                  value="closeConnection"
                                  name="subjectContactUs"
                                  checked={field.value === "closeConnection"}
                                  type="radio"
                                />
                                <label htmlFor="closeConnection">
                                  Close Connection
                                </label>
                              </div>
                              <div className="radio-item">
                                <input
                                  {...field}
                                  id="others"
                                  value="others"
                                  name="subjectContactUs"
                                  checked={field.value === "others"}
                                  type="radio"
                                />
                                <label htmlFor="others">Others</label>
                              </div>
                            </>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row my-5 row-contactUs-form">
                    <div className="col-12">
                      <label htmlFor="extraCommentContactUs">Comment</label>
                      <Field
                        className="form-control"
                        name="extraCommentContactUs"
                        id="extraCommentContactUs"
                        value={values.extraCommentContactUs}
                      />
                    </div>
                  </div>
                  <div className="row my-5">
                    <div className="col-6"></div>
                    <div className="col-6">
                      <div className="text-center button-holder-contactUS">
                        <button>Reset</button>
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ContactUs;
