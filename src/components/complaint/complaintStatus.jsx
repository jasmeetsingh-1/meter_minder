import React, { useState } from "react";
import Header from "../header";
import DeleteComplaintModal from "../modals/deleteComplaintModal";
import "./cssFiles/complaintStatus.css";
import { ToastContainer, toast } from "react-toastify";

function ComplaintStatus() {
  const [showDeleteComplaintModal, setShowDeleteComplaintModal] =
    useState(false);
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

  const complaintDeletedHandler = () => {
    toast.success("Complaint deleted Successfully!", toastConfig);
  };

  return (
    <>
      <Header heading={"Complaint History"} />
      <div className="col-12">
        <div className="card shadow-lg">
          <div className="container view-bil-form mt-4 my-4">
            <form>
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Sl No:</th>
                    <th scope="col">Complaint ID</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>123</td>
                    <td>Electric shock</td>
                    <td>Waiting</td>
                    <td>
                      <button
                        className="btn  btn-danger"
                        onClick={(e) => {
                          setShowDeleteComplaintModal(true);
                          e.preventDefault();
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>345</td>
                    <td>Cash back</td>
                    <td>success</td>
                    <td>
                      <button
                        className="btn  btn-success"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        view report
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                {/* <!-- <button>button name</buttoxn> --> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <DeleteComplaintModal
        showModal={showDeleteComplaintModal}
        onHide={() => {
          setShowDeleteComplaintModal(false);
        }}
        complaintDeletedHandler={() => {
          complaintDeletedHandler();
        }}
      />
      <ToastContainer />
    </>
  );
}

export default ComplaintStatus;
