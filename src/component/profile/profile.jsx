import React, { useState } from "react";
import Header from "../header";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./profile.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { signUpReducers } from "../redux-store/store";

function Profile() {
  // const { submitForm } = useFormikContext();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loginStore);
  const [editingForm, setEditingForm] = useState(false);
  const [passwordChanging, setPasswordChanging] = useState(false);

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

  const initialEditProfileValues = {
    userId: userData.data.userId,
    name: userData.data.customerName,
    address: userData.data.address,
    contactNo: userData.data.phoneNumber,
    email: userData.data.email,
    password: userData.data.password,
    confirmPassword: userData.data.password,
  };

  const editProfileValidation = Yup.object({
    userId: Yup.number().required("Please enter the User Id"),
    name: Yup.string().required("Please enter Name"),
    email: Yup.string()
      .email("Enter valid Email")
      .required("Please enter email"),
    contactNo: Yup.string().required("Please enter your phone Number"),
    address: Yup.string().required("Please enter your address"),
    password: Yup.string()
      .required("Please enter password")
      .min(8, "Password must be 8 characters long")
      .max(30, "Password can be at max 30 digits"),
    confirmPassword: Yup.string().required("Please confirm password"),
  });

  const alreadyInDB = (emailValue) => {
    if (emailValue === "rovy123@gmail.com") return true;
    return false;
  };

  const myProfileSubmitHandler = (values) => {
    if (alreadyInDB(values.email)) {
      toast.error("Email already taken by user", toastConfig);
      return;
    }
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords don't match", toastConfig);
      return;
    }
    console.log("form submitted");
    dispatch(
      signUpReducers.editProfileHandler({
        ...values,
      })
    );
    toast.success("Details updated successfully", toastConfig);
  };

  //  Calling an API

  return (
    <>
      <Header heading={"Profile"} />
      <div className="profile-details-holder">
        <div className="profile-details-heading-div">Your Profile</div>
        <div className="profile-details-form-holder">
          <div className="profile-form-holder-left">
            <Formik
              initialValues={initialEditProfileValues}
              validationSchema={editProfileValidation}
              onSubmit={myProfileSubmitHandler}
            >
              {({
                values,
                handleChange,
                resetForm,
                errors,
                touched,
                handleSubmit,
              }) => (
                <Form className="myProfile-login-page">
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label
                              htmlFor="userId"
                              className="label-myprofile-details"
                            >
                              User Id:
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              className="field-myprofile-details"
                              name="userId"
                              id="userId"
                              disabled={true}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label
                              htmlFor="name"
                              className="label-myprofile-details"
                            >
                              Name:
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              className="field-myprofile-details"
                              name="name"
                              id="name"
                              disabled={!editingForm}
                              onKeyPress={(e) => {
                                if (
                                  !/^[a-zA-Z0-9 ]*$/.test(e.key) ||
                                  e.target.value.length > 49
                                )
                                  e.preventDefault();
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label
                              htmlFor="address"
                              className="label-myprofile-details"
                            >
                              Address:
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              className="field-myprofile-details"
                              name="address"
                              id="address"
                              disabled={!editingForm}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label
                              htmlFor="contactNo"
                              className="label-myprofile-details"
                            >
                              Contact No.:
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              className="field-myprofile-details"
                              name="contactNo"
                              id="contactNo"
                              disabled={!editingForm}
                              onKeyPress={(e) => {
                                if (
                                  !/^[0-9]*$/.test(e.key) ||
                                  e.target.value.length > 9
                                )
                                  e.preventDefault();
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label
                              htmlFor="email"
                              className="label-myprofile-details"
                            >
                              Email:
                            </label>
                          </td>
                          <td>
                            <Field
                              type="text"
                              className="field-myprofile-details"
                              name="email"
                              id="email"
                              disabled={!editingForm}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label
                              htmlFor="password"
                              className="label-myprofile-details"
                            >
                              Password:
                            </label>
                          </td>
                          <td>
                            <Field
                              type="password"
                              className="field-myprofile-details"
                              name="password"
                              id="password"
                              disabled={!editingForm}
                              onKeyPress={(e) => {
                                setPasswordChanging(true);
                                if (
                                  !/^\S*$/.test(e.key) ||
                                  e.target.value.length > 29
                                )
                                  e.preventDefault();
                              }}
                            />
                          </td>
                          {passwordChanging ? (
                            <td>
                              <Field
                                type="password"
                                className="field-myprofile-details"
                                name="confirmPassword"
                                id="confirmPassword"
                                disabled={!editingForm}
                                onKeyPress={(e) => {
                                  setPasswordChanging(true);
                                  if (
                                    !/^\S*$/.test(e.key) ||
                                    e.target.value.length > 29
                                  )
                                    e.preventDefault();
                                }}
                              />
                            </td>
                          ) : (
                            ""
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    {editingForm ? (
                      <button className="edit-profile-button" type="submit">
                        Save
                      </button>
                    ) : (
                      <button
                        className="edit-profile-button"
                        onClick={(e) => {
                          e.preventDefault();
                          setEditingForm(true);
                        }}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Profile;
