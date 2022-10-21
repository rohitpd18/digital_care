import React from "react";
import Doctor from "./Doctor";


const BookDoctor=()=> {
  return ( 
    <div>
      {/* Heading */}   
      <div className=" mt-10 mb-6 ">
        <h1 className="text-center font-bold text-3xl mb-2 md:text-4xl">Book Appoinment</h1>
        <div className="bg-primaryColor h-1 w-56 m-auto rounded-full "></div>
      </div>

      {/* Search button */}
      <div className="m-auto text-center">
        <input
          type="text"
          className="border-slate-500 border-2 rounded-md px-2 py-0.5 text-center md:text-xl"
          placeholder="Search our Doctor"
        />
      </div>

      {/* fetching doctor */}
      <div className="md:flex justify-center gap-14 px-10 flex-wrap">

      <Doctor /> 
      <Doctor /> 
      <Doctor /> 
      <Doctor /> 
      <Doctor /> 
      <Doctor /> 
      </div>

      {/* Book button */}
      <div className=" fixed bottom-5 mx-auto left-[50%] -translate-x-20 md:-translate-x-32">
        <button className="bg-primaryColor py-1 px-3 text-white rounded-full font-semibold text-2xl md:text-3xl md:px-7 md:py-3 lg:text-4xl">
          Book Ticket
        </button>
      </div>
    </div>
  );
}


export default BookDoctor;
