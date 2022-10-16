import React from "react";
import Menu_bar from "../Assets/image/Menu_bar.png";

export default function navbar() {
  return (
    <div>
      <nav className="p-5 font-bold text-xl flex justify-between">
        <h1>DigitalCare</h1>
        <div className="grid items-center">
          <img className="h-4" src={Menu_bar} alt="" />
        </div>
      </nav>
      <hr />
    </div>
  );
}