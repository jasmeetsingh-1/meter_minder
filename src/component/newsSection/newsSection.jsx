import React from "react";
import warning from "../../assets/warning-svg.svg";
import info from "../../assets/newsSection_info.svg";
import renew from "../../assets/newsSection_renew_icon.svg";
import "./newsSection.css";

export default function NewsSection() {
  return (
    <div className="news-section-outer-main-div-holder">
      <div className="news-section-holder-css">
        <img src={renew} alt="warning logo" width="35px" />
        <span>
          New Smart grid technology implementation improves energy efficiency
          accross the city.
        </span>
      </div>
      <div className="news-section-holder-css">
        <img src={info} alt="warning logo" width="35px" />
        <span>
          Electricity rates set to decrease following successful negotation with
          renewable energy suppliers.
        </span>
      </div>
      <div className="news-section-holder-css">
        <img src={warning} alt="warning logo" width="35px" />
        <span>
          Lalitput Branch anticipates a temporary electricty outage for the next
          2 Hours, as essential power line renewal work is underway.
        </span>
      </div>
      <div className="news-section-holder-css">
        <img src={warning} alt="warning logo" width="35px" />
        <span>
          Lalitput Branch anticipates a temporary electricty outage for the next
          2 Hours, as essential power line renewal work is underway.
        </span>
      </div>
      <div className="news-section-holder-css">
        <img src={info} alt="warning logo" width="35px" />
        <span>
          Electricity rates set to decrease following successful negotation with
          renewable energy suppliers.
        </span>
      </div>
    </div>
  );
}
