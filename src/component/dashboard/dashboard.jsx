import React, { useState } from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faWallet,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../header";
import { useNavigate } from "react-router";
import ViewBill from "./viewbill/viewbill";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import NewsSection from "../newsSection/newsSection";
import ExpensesChart from "../sampleChart/expensesChart";

function Dashboard() {
  const navigate = useNavigate();
  const [viewingBill, setViewingBill] = useState(false);
  const [monthViewBill, setMonthViewBill] = useState("");
  const allData = useSelector((state) => state.loginStore);

  useEffect(() => {
    if (!allData.isloggedIn) {
      navigate("/login");
    }
  }, [allData.isloggedIn, navigate]);
  return (
    <div>
      <Header heading={"Dashboard"} />
      {viewingBill ? (
        <ViewBill month={monthViewBill} setViewingBill={setViewingBill} />
      ) : (
        <>
          <div className="dashboard-card-holders">
            <div className="card-dashboard">
              <div className="card-logo-holder">
                <FontAwesomeIcon icon={faRupeeSign} size="lg" />
              </div>
              <div className="card-content-holder">
                <p>This month Bill</p>
                {allData.isloggedIn ? (
                  <span>₹{allData.data.pendingBills[0].invoiceTotal}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-dashboard">
              <div className="card-logo-holder">
                <FontAwesomeIcon icon={faWallet} size="lg" />
              </div>
              <div className="card-content-holder">
                <p>Total Money spent</p>
                {allData.isloggedIn ? (
                  <span>₹{allData.data.pendingBills[0].totalAmount}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-dashboard">
              <div className="card-logo-holder">
                <FontAwesomeIcon icon={faBoltLightning} size="lg" />
              </div>
              <div className="card-content-holder">
                <p>Unit Used</p>
                {allData.isloggedIn ? (
                  <span>{allData.data.pendingBills[0].unitsUsed} Units</span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="main-yearly-news-holder-dashboard">
            <div className="yearly-chart-holder-dashboard">
              <ExpensesChart />
            </div>
            <div className="news-showholder-dashboard" sec>
              <NewsSection />
            </div>
          </div>

          <div style={{ margin: "0 1rem" }}>
            <div className="monthly-bill-dashboard-holder">
              <span>Recent Payment</span>

              {!allData.data.paidBills ? (
                <div
                  style={{
                    fontSize: "xx-large",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  No Payment Made
                </div>
              ) : (
                <div className="monthly-expenses-holder">
                  <span>March</span>
                  <span>Rs. {allData.data.paidBills.invoiceTotal}</span>
                  <span
                    onClick={() => {
                      setMonthViewBill("April");
                      setViewingBill(true);
                    }}
                  >
                    View Bill
                  </span>
                  <span>{allData.data.paidBills.startDate.slice(0, 10)}</span>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
