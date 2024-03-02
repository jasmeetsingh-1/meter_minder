import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ComplaintRegister from "./component/complaint/complaintRegister";
import Dashboard from "./component/dashboard/dashboard";
import Login from "./component/loginSignup/login/login";
import PayBill from "./component/payBill/paybill";
import Sidebar from "./component/sidebar/sidebar";
import ComplaintStatus from "./component/complaint/complaintStatus";
import Profile from "./component/profile/profile";
// import SampleChart from "./component/sampleChart/sampleChart";
import ContactUs from "./component/contactUs/contactUs";

function App() {
  const [menuSelected, setmenuSelected] = useState(1);
  return (
    <div className="app-holder">
      <Routes>
        <Route
          path="/"
          element={
            <div className="dashboard-login-holder">
              <Sidebar
                menuSelected={menuSelected}
                setmenuSelected={setmenuSelected}
              />
              <div className="website-main-component-holder">
                {menuSelected === 1 ? <Dashboard /> : ""}
                {menuSelected === 2 ? (
                  <PayBill setmenuSelected={setmenuSelected} />
                ) : (
                  ""
                )}
                {menuSelected === 3 ? (
                  <ComplaintRegister setmenuSelected={setmenuSelected} />
                ) : (
                  ""
                )}
                {menuSelected === 4 ? <ComplaintStatus /> : ""}
                {menuSelected === 5 ? <Profile /> : ""}
                {menuSelected === 6 ? <ContactUs /> : ""}
              </div>
            </div>
          }
        />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/graph" element={<SampleChart />} /> */}
      </Routes>
    </div>
  );
}

export default App;
