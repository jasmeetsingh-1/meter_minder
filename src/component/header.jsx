import React, { useEffect } from "react";
import Lottie from "lottie-react";
import HeaderAnimation from "../assets/animations/Animation - 1706339793428.json";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Header({ heading }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.loginStore);

  useEffect(() => {
    if (!userData.isloggedIn) {
      navigate("/login");
    }
  }, [userData]);
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
              {userData.data.customerName}
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
