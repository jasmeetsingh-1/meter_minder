import React, { useState } from "react";
import Header from "../header";
import DeleteComplaintModal from "../modals/deleteComplaintModal";
import "./cssFiles/complaintStatus.css";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

function ComplaintStatus() {
  const [showDeleteComplaintModal, setShowDeleteComplaintModal] =
    useState(false);
  const [complaintIDToDelete, setcomplaintIDToDelete] = useState("");
  let complaintData = useSelector(
    (state) => state.complaintStore.complaintData[0]
  );
  // complaintData = complaintData[0];

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
                    <th scope="col">Si No:</th>
                    <th scope="col">Complaint ID</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {complaintData ? (
                    <>
                      {complaintData.complaintDetails.map((item, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.complaintId}</td>
                            <td>{item.category}</td>
                            <td>{item.complaintStatus}</td>
                            <td>
                              <button
                                className="btn  btn-danger"
                                onClick={(e) => {
                                  setShowDeleteComplaintModal(true);
                                  setcomplaintIDToDelete(item.complaintId);
                                  e.preventDefault();
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      </div>
      <DeleteComplaintModal
        complaintIDToDelete={complaintIDToDelete}
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
