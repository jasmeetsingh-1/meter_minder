import React from "react";

import Chart from "./chart";

function ExpensesChart(props) {
  const datapointsArray = [
    { label: "Jan", value: 3000 },
    { label: "Feb", value: 2000 },
    { label: "Mar", value: 6000 },
    { label: "Apr", value: 6000 },
    { label: "May", value: 6000 },
    { label: "Jun", value: 5000 },
    { label: "Jul", value: 6000 },
    { label: "Aug", value: 2000 },
    { label: "Sept", value: 7000 },
    { label: "Oct", value: 6000 },
    { label: "Nov", value: 10000 },
    { label: "Dec", value: 6000 },
  ];

  // props.expenses.map((ele) => {
  //   const eleMonth = new Date(ele.date).getMonth();
  //   datapointsArray[eleMonth].value += ele.amount;
  //   return null;
  // });

  return <Chart datapoints={datapointsArray} />;
}

export default ExpensesChart;
