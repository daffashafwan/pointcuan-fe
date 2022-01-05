import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function DashboardPointViewComponent({ percentage }) {
  return (
    <div className="  bg-white p-10 rounded-3xl drop-shadow-xl  4/5 md:w-full md:mx-8">
      <div className="grid grid-cols-1 justify-items-center mb-5">
        <div className="font-semibold text-center w-20 md:w-40">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}% `}
            styles={buildStyles({
              textSize: "30px",
              textColor: "rgb(37 99 235)",

              strokeLinecap: "butt",
              trailColor: " rgb(229 231 235)",
              pathColor: "#f97316",
            })}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-5 md:gap-0 ">
        <div className="text-xs md:text-sm text-left">
          <p>Total Point Masuk</p>
          <h2 className="font-bold">13.000</h2>
        </div>
        <div className="text-xs md:text-sm text-right">
          <p>Total Point Keluar</p>
          <h2 className="font-bold">1.400</h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardPointViewComponent;
