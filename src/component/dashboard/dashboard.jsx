import React, { useState } from "react";
import "./dashboard.css";
import Lottie from "lottie-react";
import DashboardProfileAnimation from "../../assets/animations/Animation - 1706339793428.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faWallet,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../header";
// import SampleChart from "../sampleChart/sampleChart";
import { useNavigate } from "react-router";
import ViewBill from "./viewbill/viewbill";

function Dashboard() {
  const navigate = useNavigate();
  const [viewingBill, setViewingBill] = useState(false);
  const [monthViewBill, setMonthViewBill] = useState("");
  return (
    <div>
      <Header heading={"Dashboard"} />
      {viewingBill ? (
        <ViewBill month={monthViewBill} />
      ) : (
        <>
          <div className="dashboard-card-holders">
            <div className="card-dashboard">
              <div className="card-logo-holder">
                <FontAwesomeIcon icon={faRupeeSign} size="lg" />
              </div>
              <div className="card-content-holder">
                <p>This month Bill</p>
                <span>₹1244</span>
              </div>
            </div>
            <div className="card-dashboard">
              <div className="card-logo-holder">
                <FontAwesomeIcon icon={faWallet} size="lg" />
              </div>
              <div className="card-content-holder">
                <p>Total Money spent</p>
                <span>₹8424</span>
              </div>
            </div>
            <div className="card-dashboard">
              <div className="card-logo-holder">
                <FontAwesomeIcon icon={faBoltLightning} size="lg" />
              </div>
              <div className="card-content-holder">
                <p>Unit Used</p>
                <span>67 Units</span>
              </div>
            </div>
          </div>
          <div className="main-yearly-news-holder-dashboard">
            <div
              className="yearly-chart-holder-dashboard"
              onClick={() => {
                navigate("/graph");
              }}
            >
              Sample chart to show monthly Electricity bill
            </div>
            <div className="news-showholder-dashboard">news section holder</div>
          </div>

          <div style={{ margin: "0 1rem" }}>
            <div className="monthly-bill-dashboard-holder">
              <span>Recent Payment</span>
              <div className="monthly-expenses-holder">
                <span>January</span>
                <span>Rs. 3000</span>
                <span
                  onClick={() => {
                    setMonthViewBill("January");
                    setViewingBill(true);
                  }}
                >
                  View Bill
                </span>
                <span>5 Feb, 2023</span>
              </div>

              <div className="monthly-expenses-holder">
                <span>January</span>
                <span>Rs. 3000</span>
                <span
                  onClick={() => {
                    setMonthViewBill("Febrary");
                    setViewingBill(true);
                  }}
                >
                  View Bill
                </span>
                <span>5 Feb, 2023</span>
              </div>

              <div className="monthly-expenses-holder">
                <span>January</span>
                <span>Rs. 3000</span>
                <span>View Bill</span>
                <span>5 Feb, 2023</span>
              </div>

              <div className="monthly-expenses-holder">
                <span>January</span>
                <span>Rs. 3000</span>
                <span>View Bill</span>
                <span>5 Feb, 2023</span>
              </div>

              <div className="monthly-expenses-holder">
                <span>January</span>
                <span>Rs. 3000</span>
                <span>View Bill</span>
                <span>5 Feb, 2023</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
