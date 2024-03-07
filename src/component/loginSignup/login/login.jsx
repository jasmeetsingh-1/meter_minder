import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./login.css";
import logo from "../../../assets/logo.svg";
import SignupModal from "../../modals/signUModal";
import { useDispatch, useSelector } from "react-redux";
import { signUpReducers } from "../../redux-store/store";

library.add(faEye);

function Login() {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const signUpStore = useSelector((state) => state.signupStore.signupdata);
  const countryCodeOptions = useMemo(() => countryList().getData(), []);
  const [loginOrSignUp, setloginOrSignUp] = useState("login");
  const [showSignUpModal, setshowSignUpModal] = useState(false);
  const [loginData, setloginData] = useState({
    loginUserId: "",
    loginPassword: "",
  });

  const [loginError, setLoginError] = useState({
    userIdError: false,
    passwordError: false,
  });

  const [showingPassword, setShowPassword] = useState(false);

  const toastConfig = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const signUpFormIkInitialValues = {
    consumerId: "",
    billNumber: "",
    title: "",
    customerName: "",
    email: "",
    countryCode: "",
    password: "",
    phoneNumber: "",
    address: "",
    confirmPassword: "",
  };

  const validationSignUpSchema = Yup.object({
    consumerId: Yup.number().required("Please enter the Consumer Id"),
    billNumber: Yup.number().required("Please enter valid  number"),
    title: Yup.string().required("Please choose a title"),
    customerName: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Enter valid Email")
      .required("Please enter email"),
    // countryCode: Yup.string().required("Please choose your country code"),
    address: Yup.string().required("Please enter your address"),
    password: Yup.string()
      .required("Please enter password")
      .min(8, "Password must be 8 characters long")
      .max(30, "Password can be at max 30 digits")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one capital letter")
      .matches(
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "passwords must match")
      .required("Please confirm password"),
  });

  const checkingIfAlreadyUser = (signUpFormData, email, phoneNumber) => {
    //return false -> user doesnt exist
    let flag = "nothing";
    signUpFormData.map((item) => {
      if (item.email == email) {
        flag = "email";
        return;
      }
      if (item.phoneNumber == phoneNumber) {
        flag = "Phone Number";
        return;
      }
    });

    return flag;
  };

  const signUpSubmitHandler = (values, resetForm) => {
    if (
      checkingIfAlreadyUser(signUpStore, values.email, values.phoneNumber) ==
      "nothing"
    ) {
      console.log("user doesnt exist");
      dispatcher(signUpReducers.signupButtonHandlerReducer(values));
      resetForm();
      setshowSignUpModal(true);
    } else {
      toast.error(
        `User exist with the given ${checkingIfAlreadyUser(
          signUpStore,
          values.email,
          values.phoneNumber
        )}`,
        toastConfig
      );
    }
    console.log("submited", values);
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    if (!loginData.loginUserId) {
      //empty user ID
      setLoginError({
        ...loginError,
        userIdError: true,
      });
      return;
    }
    if (!loginData.loginPassword) {
      //empty user ID
      setLoginError({
        ...loginError,
        passwordError: true,
      });
      return;
    }

    if (loginData.loginUserId.length != 13) {
      setLoginError({
        ...loginError,
        userIdError: true,
      });
      return;
    }

    if (loginData.loginUserId == "1234567899999") {
      toast.error("No user exist for this user ID", toastConfig);
      console.log({ loginData });
      return;
    }

    toast.success("Login Successful", toastConfig);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div className="loginPage-holder-css">
        {loginOrSignUp === "login" ? (
          <div className="login-page-part-css" style={{ minWidth: "60%" }}>
            <div className="login-form-heading-holder">
              <span>LOGIN</span>
              <p>Take a minute to Login to have a seamless experience!</p>
            </div>
            <form className="login-form-holder-css">
              <div className="login-form-fields-holder">
                <label htmlFor="loginUserId" className="form-label">
                  User ID
                  <span style={{ color: "#4318FF" }}>*</span>
                </label>
                <input
                  style={{ position: "relative" }}
                  type="text"
                  className=" login-form-inputs form-control fields"
                  id="loginUserId"
                  name="loginUserId"
                  value={loginData.loginUserId}
                  placeholder="Enter your user ID"
                  onChange={(e) => {
                    if (
                      /^[0-9]*$/.test(e.target.value) &&
                      e.target.value.length <= 13
                    ) {
                      setloginData({
                        ...loginData,
                        loginUserId: e.target.value,
                      });
                    }
                    setLoginError({
                      ...loginError,
                      userIdError: false,
                    });
                  }}
                />
                {loginError.userIdError ? (
                  <div className="error-message">
                    Please enter valid User ID
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div
                className="login-form-fields-holder"
                style={{ position: "relative" }}
              >
                <label htmlFor="loginPassword" className="form-label">
                  Password
                  <span style={{ color: "#4318FF" }}>*</span>
                </label>
                <input
                  type={showingPassword ? "text" : "password"}
                  className=" login-form-inputs form-control fields"
                  id="loginPassword"
                  name="loginPassword"
                  value={loginData.loginPassword}
                  placeholder="Enter your passsword"
                  onChange={(e) => {
                    setloginData({
                      ...loginData,
                      loginPassword: e.target.value.trim(),
                    });
                    setShowPassword(false);
                    setLoginError({
                      ...loginError,
                      passwordError: false,
                    });
                  }}
                />
                {showingPassword ? (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    style={{
                      position: "absolute",
                      bottom: "42.5%",
                      right: "2%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setShowPassword(!showingPassword);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{
                      position: "absolute",
                      bottom: "42.5%",
                      right: "2%",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setShowPassword(!showingPassword);
                    }}
                  />
                )}

                {loginError.passwordError ? (
                  <div
                    className="error-message"
                    style={{ marginTop: "0.3rem" }}
                  >
                    Please enter password
                  </div>
                ) : (
                  ""
                )}
                <div
                  className="form-labels"
                  onClick={() => {
                    setloginOrSignUp("signup");
                  }}
                >
                  Don't have an account?
                </div>
              </div>

              <button
                type="submit"
                onClick={(e) => loginSubmitHandler(e)}
                className="btn login-button-loginPage"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div className="signUp-form-holder" style={{ minWidth: "60%" }}>
            <div
              className="login-form-heading-holder"
              style={{ width: "61%", marginBottom: "1.5rem" }}
            >
              <span>SIGN UP</span>
              <p style={{ margin: "0" }}>Welcome to Meter Minder!</p>
            </div>
            <Formik
              initialValues={signUpFormIkInitialValues}
              validationSchema={validationSignUpSchema}
              onSubmit={(values, { resetForm }) => {
                signUpSubmitHandler(values, resetForm);
                // console.log({ values });
              }}
            >
              {({ values, handleChange, resetForm, errors, touched }) => (
                <Form className="formik-holder-css">
                  <div className="signup-form-row-holder">
                    <div className="signup-form-text-field-holder">
                      <label htmlFor="consumerId" className="form-label">
                        Consumer Id <span style={{ color: "#4318FF" }}>*</span>
                      </label>
                      <Field
                        className=" login-form-inputs form-control "
                        type="text"
                        placeholder="Enter your Consumer ID"
                        name="consumerId"
                        id="consumerId"
                        value={values.consumerId}
                        onKeyPress={(e) => {
                          if (!/\d/.test(e.key) || e.target.value.length > 12)
                            e.preventDefault();
                        }}
                        style={{
                          border:
                            errors.consumerId && touched.consumerId
                              ? "1px solid red"
                              : "",
                        }}
                      />
                      {/* {errors.consumerId && touched.consumerId ? (
                        <span>{errors.consumerId}</span>
                      ) : null} */}
                    </div>
                    <div className="signup-form-text-field-holder">
                      <label htmlFor="billNumber" className="form-label">
                        Bill No. <span style={{ color: "#4318FF" }}>*</span>
                      </label>
                      <Field
                        className=" login-form-inputs form-control "
                        type="text"
                        placeholder="Last 5 digits of Consumer bill"
                        name="billNumber"
                        id="billNumber"
                        value={values.billNumber}
                        onKeyPress={(e) => {
                          if (!/\d/.test(e.key) || e.target.value.length > 4)
                            e.preventDefault();
                        }}
                        style={{
                          border:
                            errors.billNumber && touched.billNumber
                              ? "1px solid red"
                              : "",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="signup-form-row-holder"
                    style={{ gap: "0.5rem !important" }}
                  >
                    <div>
                      <label htmlFor="title" className="form-label">
                        Title <span style={{ color: "#4318FF" }}>*</span>
                      </label>

                      <select
                        name="title"
                        id="title"
                        onChange={handleChange}
                        className=" login-form-inputs form-control  title-select-option"
                        value={values.title}
                        style={{
                          border:
                            errors.title && touched.title
                              ? "1px solid red"
                              : "",
                        }}
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Miss.">Miss.</option>
                      </select>
                    </div>
                    <div style={{ width: "80%" }}>
                      <label htmlFor="customerName" className="form-label">
                        Customer Name{" "}
                        <span style={{ color: "#4318FF" }}>*</span>
                      </label>
                      <Field
                        className=" login-form-inputs form-control "
                        type="text"
                        placeholder="Enter your name"
                        name="customerName"
                        id="customerName"
                        value={values.customerName}
                        onKeyPress={(e) => {
                          if (
                            !/^[a-zA-Z0-9 ]*$/.test(e.key) ||
                            e.target.value.length > 49
                          )
                            e.preventDefault();
                        }}
                        style={{
                          border:
                            errors.customerName && touched.customerName
                              ? "1px solid red"
                              : "",
                        }}
                      />
                    </div>
                  </div>
                  <div className="signup-form-row-holder">
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email <span style={{ color: "#4318FF" }}>*</span>
                      </label>
                      <Field
                        className=" login-form-inputs form-control "
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        style={{
                          border:
                            errors.email && touched.email
                              ? "1px solid red"
                              : "",
                        }}
                      />
                    </div>
                    {/* </div>
                  <div
                    className="signup-form-row-holder"
                    style={{ gap: "0.5rem !important" }}
                  > */}
                    <div style={{ height: "fit-content" }}>
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone number <span style={{ color: "#4318FF" }}>*</span>
                      </label>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        {/* <Select
                          isMulti={false}
                          options={options}
                          value={values.countryCode}
                          onChange={(e) => {
                            console.log(e);
                          }}
                        /> */}
                        <select
                          name="countryCode"
                          id="countryCode"
                          onChange={handleChange}
                          className=" login-form-inputs form-control  title-select-option"
                          value={values.countryCode}
                          style={{
                            border:
                              errors.title && touched.title
                                ? "1px solid red"
                                : "",
                          }}
                        >
                          {countryCodeOptions.map((item) => {
                            return (
                              <option value={item.value}>{item.label}</option>
                            );
                          })}
                        </select>
                        {/* </div>
                    <div style={{ width: "80%" }}> */}
                        <Field
                          className=" login-form-inputs form-control "
                          type="text"
                          placeholder="Enter your Phone Number"
                          name="phoneNumber"
                          id="phoneNumber"
                          value={values.phoneNumber}
                          onKeyPress={(e) => {
                            if (
                              !/^[0-9]*$/.test(e.key) ||
                              e.target.value.length > 9
                            )
                              e.preventDefault();
                          }}
                          style={{
                            border:
                              errors.phoneNumber && touched.phoneNumber
                                ? "1px solid red"
                                : "",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label htmlFor="address" className="form-label">
                        Address <span style={{ color: "#4318FF" }}>*</span>
                      </label>
                      <Field
                        className=" login-form-inputs form-control "
                        type="text"
                        placeholder="Enter your Address"
                        name="address"
                        id="address"
                        value={values.address}
                        onChange={handleChange}
                        style={{
                          border:
                            errors.address && touched.address
                              ? "1px solid red"
                              : "",
                        }}
                      />
                    </div>
                  </div>
                  <div className="signup-form-row-holder">
                    <div className="signup-form-text-field-holder">
                      <label htmlFor="password" className="form-label">
                        Password <span style={{ color: "#4318FF" }}>*</span>
                      </label>
                      <Field
                        className=" login-form-inputs form-control "
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        id="password"
                        value={values.password}
                        onKeyPress={(e) => {
                          if (
                            !/^\S*$/.test(e.key) ||
                            e.target.value.length > 29
                          )
                            e.preventDefault();
                        }}
                        style={{
                          border:
                            errors.password && touched.password
                              ? "1px solid red"
                              : "",
                        }}
                      />
                    </div>
                    <div className="signup-form-text-field-holder">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password{" "}
                        <span style={{ color: "#4318FF" }}>*</span>
                      </label>
                      <Field
                        className=" login-form-inputs form-control "
                        type="password"
                        placeholder="Enter your confirmPassword"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        style={{
                          border:
                            errors.confirmPassword && touched.confirmPassword
                              ? "1px solid red"
                              : "",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="form-labels"
                    onClick={() => {
                      setloginOrSignUp("login");
                    }}
                  >
                    Already have an account?
                  </div>
                  <div
                    className="signup-form-row-holder"
                    style={{
                      justifyContent: "center",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <button
                      className="btn login-button-loginPage"
                      type="submit"
                    >
                      Register
                    </button>
                    <button
                      className="btn reset-button-signUPForm"
                      onClick={resetForm}
                      type="button"
                    >
                      Reset
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}

        <div className="login-page-part-css right-side">
          <div
            className="img-center image-logo-holder"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              src={logo}
              width="50px"
              className="img-fluid"
              alt="website-logo"
              title="meterMinder"
            />
            <h1>Meter Minder</h1>
          </div>
        </div>
      </div>
      <ToastContainer />
      <SignupModal
        showModal={showSignUpModal}
        onHide={() => {
          setshowSignUpModal(false);
        }}
        loginButtonClicked={() => {
          setshowSignUpModal(false);
          setloginOrSignUp("login");
        }}
      />
    </>
  );
}

export default Login;
