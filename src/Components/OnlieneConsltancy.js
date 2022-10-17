import React from "react";

export default function OnlieneConsltancy() {
  return (
    <div>
      <div className="lg:flex lg:justify-around lg:pb-10">
        <div className="h-[35vh] m-5 bg-slate-300 lg:h-[70vh] lg:w-[40vw]"></div>
        <div className="h-[35vh] m-5 bg-slate-300 lg:h-[70vh] lg:w-[40vw]"></div>
      </div>
      <div className="text-center">
        <button className="bg-red-500 text-white text-2xl font-semibold px-5 py-1.5 rounded-full">
          End Call
        </button>
      </div>
    </div>
  );
}
