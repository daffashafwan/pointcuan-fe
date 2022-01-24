import React, {useState, useEffect} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { read_cookie } from 'sfcookies';
import axios from 'axios';
import { BASE_URL_API, HEADER_API } from "../config/urlApi";
import "react-circular-progressbar/dist/styles.css";

function DashboardPointViewComponent() {
  const [dataTrans, setDataTrans] = useState()
  const [dataRed, setDataRed] = useState()
  const [data, setData] = useState({
    percentage :0,
    pointIn : 0,
    pointOut: 0
  })
  useEffect(() => {
    var bodyFormData = {
      status: 2
    }
    axios.post(BASE_URL_API + 'users/' + read_cookie('user_cred')+"/transaction/status",bodyFormData, HEADER_API)
      .then(function (response) {
        setDataTrans(response.data.data)
        //console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
      axios.get(BASE_URL_API + 'users/' + read_cookie('user_cred')+"/redeem", HEADER_API)
      .then(function (response) {
        setDataRed(response.data.data)
        //console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  },[])

  useEffect(() => {
      if(dataRed && dataTrans){
        var pointIn = 0
        var pointOut = 0
        dataRed.forEach(element => {
          pointOut = pointOut + element.point
        });
        dataTrans.forEach(element => {
          pointIn = pointIn + element.point
        });
        console.log((pointOut / pointIn)*100)
        setData({
          percentage : (pointOut / pointIn)*100,
          pointIn : pointIn,
          pointOut: pointOut
        })
      }
  },[dataRed, dataTrans])
  return (
    <div className="  bg-white p-10 rounded-3xl drop-shadow-xl  4/5 md:w-full md:mx-8">
      <div className="grid grid-cols-1 justify-items-center mb-5">
        <div className="font-semibold text-center w-20 md:w-40">
          <CircularProgressbar
            value={data.percentage}
            text={`${data.percentage.toFixed(2)}% `}
            styles={buildStyles({
              textSize: "25px",
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
          <h2 className="font-bold">{data.pointIn}</h2>
        </div>
        <div className="text-xs md:text-sm text-right">
          <p>Total Point Keluar</p>
          <h2 className="font-bold">{data.pointOut}</h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardPointViewComponent;
