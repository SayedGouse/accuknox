import React from "react";
import ReactApexChart from "react-apexcharts";

const Cardone = ({ removeWidget,name }) => {
  const options = {
    labels: ["USA", "India", "Pakistan", "China"],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
        expandOnClick: false,
      },
    },
    legend: {
      position: "right",
    },
  };

  const series = [25, 25, 25, 25];

  return (
    <>
      <div className="inside">
        <div className="habeeb">
        <h6 style={{marginLeft:'13px',marginTop:'5px'}}>{name}</h6>
          
          <div className="X" onClick={removeWidget}> X </div>
        </div>
        <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width={370}
            height={170}
          />
      </div>
    </>
  );
};

export default Cardone;
