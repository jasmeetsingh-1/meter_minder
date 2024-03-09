import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ComplaintRegister from "./component/complaint/complaintRegister";
import Dashboard from "./component/dashboard/dashboard";
import PayBill from "./component/payBill/paybill";
import Sidebar from "./component/sidebar/sidebar";
import ComplaintStatus from "./component/complaint/complaintStatus";
import Profile from "./component/profile/profile";
// import SampleChart from "./component/sampleChart/sampleChart";
import ContactUs from "./component/contactUs/contactUs";
import LoginPage from "./component/loginSignup/login/login";

function App() {
  const [sideMenuState, setSideMenuState] = useState(3);
  return (
    <div className="app-holder">
      <Routes>
        <Route
          path="/"
          element={
            <div className="dashboard-login-holder">
              <Sidebar
                sideMenuState={sideMenuState}
                setSideMenuState={setSideMenuState}
              />
              <div className="website-main-component-holder">
                {sideMenuState === 1 ? <Dashboard /> : ""}
                {sideMenuState === 2 ? (
                  <PayBill setSideMenuState={setSideMenuState} />
                ) : (
                  ""
                )}
                {sideMenuState === 3 ? (
                  <ComplaintRegister setSideMenuState={setSideMenuState} />
                ) : (
                  ""
                )}
                {sideMenuState === 4 ? <ComplaintStatus /> : ""}
                {sideMenuState === 5 ? <Profile /> : ""}
                {sideMenuState === 6 ? <ContactUs /> : ""}
              </div>
            </div>
          }
        />
        <Route exact path="/login" element={<LoginPage />} />
        {/* <Route exact path="/graph" element={<SampleChart />} /> */}
      </Routes>
    </div>
  );
}

export default App;
