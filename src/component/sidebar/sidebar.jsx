import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./sidebar.css";

function Sidebar({ menuSelected, setmenuSelected }) {
  const navigate = useNavigate();
  return (
    <div className="sidebar-holder">
      <div
        className="logo-sidebar-holder"
        onClick={() => {
          setmenuSelected(1);
        }}
      >
        Kerala State Electricity Board
      </div>

      <div className="sidebar-menu-holder">
        <div
          className="menu-option-sidebar"
          onClick={() => {
            setmenuSelected(1);
          }}
          style={{ color: menuSelected === 1 ? "#2b3674" : "" }}
        >
          <div className="dashboard-svg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_111_972)">
                <path
                  d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.6C12.2901 3.26 11.7101 3.26 11.3301 3.6L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z"
                  fill={menuSelected === 1 ? "#4318FF" : "#A3AED0"}
                />
              </g>
              <defs>
                <clipPath id="clip0_111_972">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          Dashboard
        </div>
        <div
          className="menu-option-sidebar"
          onClick={() => {
            setmenuSelected(2);
          }}
          style={{ color: menuSelected === 2 ? "#2b3674" : "" }}
        >
          <div className="payBill-svg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5833 23.2917H6.49992C5.49431 23.2917 4.52988 22.8922 3.81881 22.1811C3.10773 21.47 2.70825 20.5056 2.70825 19.5V5.35492C2.70825 4.199 3.85225 3.46559 4.85867 3.81442C5.00275 3.86425 5.14359 3.93684 5.27792 4.03325L5.4675 4.16867C5.92863 4.49587 6.48029 4.67118 7.0457 4.67021C7.61112 4.66923 8.16217 4.49203 8.62217 4.16325C9.26788 3.70372 10.0407 3.45679 10.8333 3.45679C11.6258 3.45679 12.3986 3.70372 13.0443 4.16325C13.5043 4.49203 14.0554 4.66923 14.6208 4.67021C15.1862 4.67118 15.7379 4.49587 16.199 4.16867L16.3886 4.03325C17.4643 3.26409 18.9583 4.03325 18.9583 5.35492V13.5417H22.7499C22.9654 13.5417 23.1721 13.6273 23.3244 13.7796C23.4768 13.932 23.5624 14.1387 23.5624 14.3542V20.3125C23.5624 21.1026 23.2485 21.8604 22.6898 22.4191C22.1311 22.9778 21.3734 23.2917 20.5833 23.2917ZM19.2291 15.1667V20.3125C19.2291 20.6717 19.3718 21.0161 19.6257 21.27C19.8797 21.524 20.2241 21.6667 20.5833 21.6667C20.9424 21.6667 21.2868 21.524 21.5408 21.27C21.7947 21.0161 21.9374 20.6717 21.9374 20.3125V15.1667H19.2291ZM14.6249 10.5625C14.6249 10.347 14.5393 10.1404 14.3869 9.98798C14.2346 9.83561 14.0279 9.75 13.8124 9.75H7.31242C7.09693 9.75 6.89027 9.83561 6.73789 9.98798C6.58552 10.1404 6.49992 10.347 6.49992 10.5625C6.49992 10.778 6.58552 10.9847 6.73789 11.137C6.89027 11.2894 7.09693 11.375 7.31242 11.375H13.8124C14.0279 11.375 14.2346 11.2894 14.3869 11.137C14.5393 10.9847 14.6249 10.778 14.6249 10.5625ZM13.5416 13.8125C13.5416 13.597 13.456 13.3904 13.3036 13.238C13.1512 13.0856 12.9446 13 12.7291 13H7.31242C7.09693 13 6.89027 13.0856 6.73789 13.238C6.58552 13.3904 6.49992 13.597 6.49992 13.8125C6.49992 14.028 6.58552 14.2347 6.73789 14.387C6.89027 14.5394 7.09693 14.625 7.31242 14.625H12.7291C12.9446 14.625 13.1512 14.5394 13.3036 14.387C13.456 14.2347 13.5416 14.028 13.5416 13.8125ZM13.8124 16.25C14.0279 16.25 14.2346 16.3356 14.3869 16.488C14.5393 16.6404 14.6249 16.847 14.6249 17.0625C14.6249 17.278 14.5393 17.4847 14.3869 17.637C14.2346 17.7894 14.0279 17.875 13.8124 17.875H7.31242C7.09693 17.875 6.89027 17.7894 6.73789 17.637C6.58552 17.4847 6.49992 17.278 6.49992 17.0625C6.49992 16.847 6.58552 16.6404 6.73789 16.488C6.89027 16.3356 7.09693 16.25 7.31242 16.25H13.8124Z"
                fill={menuSelected === 2 ? "#4318FF" : "#A3AED0"}
              />
            </svg>
          </div>
          Paybill
        </div>
        <div
          className="menu-option-sidebar"
          onClick={() => {
            setmenuSelected(3);
          }}
          style={{ color: menuSelected === 3 ? "#2b3674" : "" }}
        >
          <div className="register-svg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.46659 5.73333H2.69992C3.59825 5.73333 4.33325 6.46833 4.33325 7.36666V15.5333C4.33325 16.4317 3.59825 17.1667 2.69992 17.1667H2.46659C1.56825 17.1667 0.833252 16.4317 0.833252 15.5333V7.36666C0.833252 6.46833 1.56825 5.73333 2.46659 5.73333ZM8.99992 0.833328C9.89825 0.833328 10.6333 1.56833 10.6333 2.46666V15.5333C10.6333 16.4317 9.89825 17.1667 8.99992 17.1667C8.10158 17.1667 7.36659 16.4317 7.36659 15.5333V2.46666C7.36659 1.56833 8.10158 0.833328 8.99992 0.833328ZM15.5333 10.1667C16.4316 10.1667 17.1666 10.9017 17.1666 11.8V15.5333C17.1666 16.4317 16.4316 17.1667 15.5333 17.1667C14.6349 17.1667 13.8999 16.4317 13.8999 15.5333V11.8C13.8999 10.9017 14.6349 10.1667 15.5333 10.1667Z"
                fill={menuSelected === 3 ? "#4318FF" : "#A3AED0"}
              />
            </svg>
          </div>
          Register Complaint
        </div>
        <div
          className="menu-option-sidebar"
          onClick={() => {
            setmenuSelected(4);
          }}
          style={{ color: menuSelected === 4 ? "#2b3674" : "" }}
        >
          <div className="complaint-svg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.5833 23.2917H6.49992C5.49431 23.2917 4.52988 22.8922 3.81881 22.1811C3.10773 21.47 2.70825 20.5056 2.70825 19.5V5.35492C2.70825 4.199 3.85225 3.46559 4.85867 3.81442C5.00275 3.86425 5.14359 3.93684 5.27792 4.03325L5.4675 4.16867C5.92863 4.49587 6.48029 4.67118 7.0457 4.67021C7.61112 4.66923 8.16217 4.49203 8.62217 4.16325C9.26788 3.70372 10.0407 3.45679 10.8333 3.45679C11.6258 3.45679 12.3986 3.70372 13.0443 4.16325C13.5043 4.49203 14.0554 4.66923 14.6208 4.67021C15.1862 4.67118 15.7379 4.49587 16.199 4.16867L16.3886 4.03325C17.4643 3.26409 18.9583 4.03325 18.9583 5.35492V13.5417H22.7499C22.9654 13.5417 23.1721 13.6273 23.3244 13.7796C23.4768 13.932 23.5624 14.1387 23.5624 14.3542V20.3125C23.5624 21.1026 23.2485 21.8604 22.6898 22.4191C22.1311 22.9778 21.3734 23.2917 20.5833 23.2917ZM19.2291 15.1667V20.3125C19.2291 20.6717 19.3718 21.0161 19.6257 21.27C19.8797 21.524 20.2241 21.6667 20.5833 21.6667C20.9424 21.6667 21.2868 21.524 21.5408 21.27C21.7947 21.0161 21.9374 20.6717 21.9374 20.3125V15.1667H19.2291ZM14.6249 10.5625C14.6249 10.347 14.5393 10.1404 14.3869 9.98798C14.2346 9.83561 14.0279 9.75 13.8124 9.75H7.31242C7.09693 9.75 6.89027 9.83561 6.73789 9.98798C6.58552 10.1404 6.49992 10.347 6.49992 10.5625C6.49992 10.778 6.58552 10.9847 6.73789 11.137C6.89027 11.2894 7.09693 11.375 7.31242 11.375H13.8124C14.0279 11.375 14.2346 11.2894 14.3869 11.137C14.5393 10.9847 14.6249 10.778 14.6249 10.5625ZM13.5416 13.8125C13.5416 13.597 13.456 13.3904 13.3036 13.238C13.1512 13.0856 12.9446 13 12.7291 13H7.31242C7.09693 13 6.89027 13.0856 6.73789 13.238C6.58552 13.3904 6.49992 13.597 6.49992 13.8125C6.49992 14.028 6.58552 14.2347 6.73789 14.387C6.89027 14.5394 7.09693 14.625 7.31242 14.625H12.7291C12.9446 14.625 13.1512 14.5394 13.3036 14.387C13.456 14.2347 13.5416 14.028 13.5416 13.8125ZM13.8124 16.25C14.0279 16.25 14.2346 16.3356 14.3869 16.488C14.5393 16.6404 14.6249 16.847 14.6249 17.0625C14.6249 17.278 14.5393 17.4847 14.3869 17.637C14.2346 17.7894 14.0279 17.875 13.8124 17.875H7.31242C7.09693 17.875 6.89027 17.7894 6.73789 17.637C6.58552 17.4847 6.49992 17.278 6.49992 17.0625C6.49992 16.847 6.58552 16.6404 6.73789 16.488C6.89027 16.3356 7.09693 16.25 7.31242 16.25H13.8124Z"
                fill={menuSelected === 4 ? "#4318FF" : "#A3AED0"}
              />
            </svg>
          </div>
          Complaint Status
        </div>

        <div
          className="menu-option-sidebar"
          onClick={() => {
            setmenuSelected(5);
          }}
          style={{ color: menuSelected === 5 ? "#2b3674" : "" }}
        >
          <div className="profile-svg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 20.5833H6.5V19.0667C6.5 16.9 10.8333 15.7083 13 15.7083C15.1667 15.7083 19.5 16.9 19.5 19.0667M13 7.58334C13.862 7.58334 14.6886 7.92575 15.2981 8.53525C15.9076 9.14474 16.25 9.97139 16.25 10.8333C16.25 11.6953 15.9076 12.5219 15.2981 13.1314C14.6886 13.7409 13.862 14.0833 13 14.0833C12.138 14.0833 11.3114 13.7409 10.7019 13.1314C10.0924 12.5219 9.75 11.6953 9.75 10.8333C9.75 9.97139 10.0924 9.14474 10.7019 8.53525C11.3114 7.92575 12.138 7.58334 13 7.58334ZM13 3.25001C13.2873 3.25001 13.5629 3.36415 13.766 3.56731C13.9692 3.77048 14.0833 4.04603 14.0833 4.33334C14.0833 4.62066 13.9692 4.89621 13.766 5.09938C13.5629 5.30254 13.2873 5.41668 13 5.41668C12.7127 5.41668 12.4371 5.30254 12.234 5.09938C12.0308 4.89621 11.9167 4.62066 11.9167 4.33334C11.9167 4.04603 12.0308 3.77048 12.234 3.56731C12.4371 3.36415 12.7127 3.25001 13 3.25001ZM20.5833 3.25001H16.055C15.6 1.99334 14.4083 1.08334 13 1.08334C11.5917 1.08334 10.4 1.99334 9.945 3.25001H5.41667C4.84203 3.25001 4.29093 3.47828 3.8846 3.88461C3.47827 4.29094 3.25 4.84204 3.25 5.41668V20.5833C3.25 21.158 3.47827 21.7091 3.8846 22.1154C4.29093 22.5217 4.84203 22.75 5.41667 22.75H20.5833C21.158 22.75 21.7091 22.5217 22.1154 22.1154C22.5217 21.7091 22.75 21.158 22.75 20.5833V5.41668C22.75 4.84204 22.5217 4.29094 22.1154 3.88461C21.7091 3.47828 21.158 3.25001 20.5833 3.25001Z"
                fill={menuSelected === 5 ? "#4318FF" : "#A3AED0"}
              />
            </svg>
          </div>
          Profile
        </div>
        <div
          className="menu-option-sidebar"
          onClick={() => {
            setmenuSelected(6);
          }}
          style={{ color: menuSelected === 6 ? "#2b3674" : "" }}
        >
          <div className="profile-svg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              fill={menuSelected === 6 ? "#4318FF" : "#A3AED0"}
              class="si-glyph si-glyph-contact-book"
            >
              <title>Contact-book</title>

              <defs></defs>

              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill={menuSelected === 6 ? "#4318FF" : "#A3AED0"}>
                  <path
                    d="M1.061,2.917 L2.083,2.917 L2.083,4.132 L1.061,4.132 L1.061,11.967 L2.049,11.967 L2.049,13.084 L1.061,13.084 L1.061,15.881 L12.958,15.881 L12.958,0 L1.061,0 L1.061,2.917 L1.061,2.917 Z M4.445,4.392 C4.475,4.368 4.716,4.188 4.802,4.123 L4.796,4.121 C4.804,4.118 4.808,4.117 4.813,4.114 C4.818,4.108 4.834,4.097 4.837,4.094 L4.841,4.099 C4.987,4.013 5.138,3.953 5.31,3.927 C5.772,3.859 6.109,4.339 6.328,4.614 C6.547,4.886 6.851,5.32 6.814,5.617 C6.792,5.796 6.587,5.961 6.393,6.123 L6.386,6.113 C6.333,6.17 6.099,6.409 6.079,6.441 C5.972,6.619 5.849,7.022 6.021,7.326 C6.184,7.621 6.506,8.099 6.811,8.498 C7.133,8.885 7.528,9.308 7.778,9.535 C8.04,9.772 8.471,9.755 8.673,9.697 C8.712,9.687 9.027,9.5 9.068,9.48 C9.277,9.336 9.488,9.184 9.675,9.207 C9.978,9.245 10.331,9.641 10.55,9.914 C10.769,10.188 11.163,10.626 10.983,11.046 C10.914,11.205 10.814,11.332 10.69,11.451 L10.694,11.455 L10.672,11.471 C10.668,11.475 10.666,11.479 10.666,11.479 L10.662,11.48 C10.58,11.542 10.338,11.727 10.308,11.749 C9.972,11.966 9.242,12.237 8.216,11.634 C7.455,11.185 6.62,10.423 5.823,9.471 L5.819,9.474 C5.782,9.427 5.747,9.38 5.712,9.333 C5.675,9.287 5.636,9.244 5.598,9.196 L5.602,9.193 C4.854,8.206 4.304,7.228 4.046,6.397 C3.699,5.277 4.148,4.656 4.445,4.392 L4.445,4.392 Z"
                    class="si-glyph-fill"
                  ></path>

                  <rect
                    x="0"
                    y="3"
                    width="0.979"
                    height="0.992"
                    class="si-glyph-fill"
                  ></rect>

                  <rect
                    x="0"
                    y="12"
                    width="0.977"
                    height="0.943"
                    class="si-glyph-fill"
                  ></rect>

                  <rect
                    x="14"
                    y="2"
                    width="0.916"
                    height="2.875"
                    class="si-glyph-fill"
                  ></rect>

                  <rect
                    x="14"
                    y="11"
                    width="0.887"
                    height="2.847"
                    class="si-glyph-fill"
                  ></rect>

                  <rect
                    x="14"
                    y="6"
                    width="0.901"
                    height="3.895"
                    class="si-glyph-fill"
                  ></rect>
                </g>
              </g>
            </svg>
          </div>
          Contact Us
        </div>
      </div>
      <div
        className="logout-button-holder"
        onClick={() => {
          navigate("/login");
        }}
      >
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;