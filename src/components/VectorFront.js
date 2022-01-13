import React from "react";
import vectorFront from "../assets/images/vectorFront.svg";

function VectorFront() {
  return (
    <div className=" justify-center bg-white p-10 rounded-3xl ">
      <div className="w-full aspect-w-1 aspect-h-1  hidden md:block flex justify-center">
        <div className="basis-1/2 xl:ml-12">
          <div className="ml-10">
            <img src={vectorFront} width="461" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VectorFront;
