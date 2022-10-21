import React from "react";
import ProfileImage from "../Assets/image/Create_profile.png";

export default function UserProfile() {
  return (
    //parent element
    <div className="m-4 md:mx-14 md:my-6 lg:flex lg:mx-6">
      {/* UserProfile Details */}
      <div className="userDetails space-y-4 mt-10 lg:w-[25%]">
        <div className="UserImage ">
          <img className="m-auto" src={ProfileImage} alt="" />
        </div>
        <div className="userName">
          <h1 className="font-bold text-2xl">Full Name:</h1>
          <h2 className="text-lg">Test Subject</h2>
        </div>
        <div className="useraddress">
          <h1 className="font-bold text-2xl">Address:</h1>
          <h2 className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            aspernatur nisi nam quae exercitationem sint dolores recusandae
            fugit
          </h2>
        </div>
        <div className="contactDetails">
          <h1 className="font-bold text-2xl">Contact Details:</h1>
          <h2 className="text-lg">Mobile No. - 1234567890</h2>
          <h2 className="text-lg">Alternate Mobile No. - (Emergency)</h2>
          <h2 className="text-lg">Email Id- example@gmail.com</h2>
        </div>
      </div>

      {/* user medical details */}
      <div className="userHealthDetails md:mt-20 lg:w-[75%] lg:mt-0 lg:ml-32">
        <div className=" mt-10 mb-6 ">
          <h1 className="text-center font-bold text-3xl mb-1">
            Health Details
          </h1>
          <div className="bg-primaryColor h-1 w-40 m-auto rounded-full "></div>
        </div>
        <div className="lg:my-20">
          <div className="text-lg">Rating: *****</div>
          <div className="text-lg">Next Booking: None</div>
        </div>

        <div className="goThrough mt-10">
          <h1 className="font-bold text-2xl lg:text-3xl lg:mb-8">Go Through:</h1>
          <div className="mt-4 text space-y-3">
            <button className="rounded-full block bg-primaryColor text-white px-4 py-1 font-semibold text-lg lg:text-xl">
              Medical Report
            </button>
            <button className="rounded-full block bg-primaryColor text-white px-4 py-1 font-semibold text-lg lg:text-xl">
              Book Appoinment
            </button>
            <button className="rounded-full block bg-primaryColor text-white px-4 py-1 font-semibold text-lg lg:text-xl">
              Pyment History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
