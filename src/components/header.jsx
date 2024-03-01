import React from "react";
import Lottie from "lottie-react";
import HeaderAnimation from "../assets/animations/Animation - 1706339793428.json";

function Header({ heading }) {
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
            <span className="name-dashboard-header">Rovy Michael varghese</span>
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
