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
import SampleChart from "./component/sampleChart/sampleChart";
import ContactUs from "./component/contactUs/contactUs";

function App() {
  const [menuSelected, setmenuSelected] = useState(6);
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
        <Route exact path="/graph" element={<SampleChart />} />
      </Routes>

      {/* <Login /> */}
    </div>
  );
}

export default App;



.app-holder {
  /* display: flex; */
  margin: 0px;
  font-family: DM sans;
  /* font-family: Poopins; */
}

* {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  padding: 0;
}
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
:root {
  scroll-behavior: smooth;
}

.dashboard-login-holder {
  display: flex;
  justify-content: flex-end;
}

.website-main-component-holder {
  width: 80%;
  background-color: rgb(209 208 208 / 59%);
  padding: 1rem;
  min-height: 100vh;
}

