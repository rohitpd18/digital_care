import React from "react";
import Doctor_profile from "../Assets/image/Doctor_profile.jpg";

const Doctor=()=> {
  
  return (
    <div>
      <div className="doctorImage doctorCard border shadow-lg w-[60vw] m-auto mt-10 md:w-[25vw]">
        <div>
          <img src={Doctor_profile} alt="" />
        </div>
        <div className="text-center p-4">
          <div className="font-bold text-xl ">Full Name</div>
          <div> MBBS, Eye Spealist</div>
          <div>5 Year exprience</div>
        </div>
      </div>
    </div>
  );
}
export default Doctor;