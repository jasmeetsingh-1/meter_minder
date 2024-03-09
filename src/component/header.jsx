import React, { useEffect } from "react";
import Lottie from "lottie-react";
import HeaderAnimation from "../assets/animations/Animation - 1706339793428.json";
import { useSelector } from "react-redux";

function Header({ heading }) {
  const loginData = useSelector((state) => state.loginStore);

  return (
    <>
      <div className="dashboard-holder">
        {/* header holder */}
        <div className="user-area-holder">
          <div className="main-dashboard-heading">{heading}</div>
          <span>Lalitput branch</span>
        </div>
        <div className="main-header-right-side-dashboard">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              fontSize: "large",
            }}
          >
            Welcome,
            <span className="name-dashboard-header">
              {loginData.data.customerName}
            </span>
          </div>
          <div className="animation-holder-dashboard-header">
            <Lottie
              animationData={HeaderAnimation}
              loop={false}
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
