import React from "react";
import book from '../Assets/image/Banner_image2.jpg';


import book from "../Assets/image/Book_appoinment.png";
export default function Home() {
  return (
    <>
    <div>
      {/* First banner image */}
      <div className="bg-Banner_image  bg-no-repeat w-[100vw] h-64 bg-cover -z-10  lg:h-[80vh]">
        {/* Second banner image */}
        <div className="bg-Banner_image2 w-[80vw] h-60 bg-cover m-auto border-8 border-white translate-y-10 text-center lg:h-[80vh]">
          <div className="text-center text-white font-semibold text-xl mt-6 px-2 md:text-6xl">
            WE ARE HERE TO HELP YOU
          </div>
          <div className="text-xs text-white  md:text-2xl md:mt-2">
            We provide expert doctor and keep you healthy
          </div>
          <div>
            <button className="bg-primaryColor py-1 px-3 text-white rounded-full mt-6 font-semibold home-btn-lg ">
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
      <div className="banner mt-10">
        <h1 className="text-center text-2xl font-bold mt-4 md:text-4xl md:mt-14">Learn by Video</h1>
        <hr className="m-auto w-1/2 bg-primaryColor border-2 border-primaryColor md:w-48" />
        <div>
          <iframe
            src="https://www.youtube.com/embed/wKJcasPqZPk"
            title="Tailwind CSS setup | Tutorial for Beginners | Quick Revision #tailwindcss"
            framborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full md:w-3/4 md:m-auto h-[60vh] p-4 md:h-[80vh] md:p-16 xl:h-[100vh]"
          ></iframe>
        </div>
        <p className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          fugit ipsa voluptatibus asperiores sed quas eos officiis, non
          explicabo. Mollitia tenetur, et odit commodi a consectetur numquam
          corporis consequatur assumenda, sequi dicta est saepe?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Suscipit debitis
          voluptatem voluptas aliquid temporibus in quidem? Asperiores a
          explicabo minus iusto ullam fugit quo cum molestias ad magni! Veniam,
          voluptas?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit quos, quibusdam sapiente repudiandae, in laudantium a debitis
          distinctio excepturi ipsam odit temporibus dolorum praesentium, natus
          deleniti hic asperiores repellendus fuga.
        </p>
      </div>
      <div className="feature">
        <h1 className="text-center text-2xl font-bold mt-4 md:text-4xl md:mt-14">Features</h1>
        <hr className="m-auto w-1/2 bg-primaryColor border-2 border-primaryColor mb-4 md:w-28" />
        <div className="flex flex-col sm:flex-row sm:flex-wrap">
        
           
            <div className="sm:w-1/2 p-6">
              <img src={book} alt="" className="w-full  m-auto" />
              <h1 className="text-center font-semibold underline text-xl lg:text-3xl lg:my-3">Book appointment with expert doctor</h1>
              <p className="m-auto md:text-lg">Lorem ipsum dolor sit amet cons adipisicing elit. Ab omnis, at nostrum, accusamus animi rem temporibus reiciendis vitae mollitia aliquid eius ex? Eligendi laudantium, ad neque quaerat nesciunt nisi magni?</p>
              <div className="flex justify-center">
              <button className="btn px-3 py-2 bg-primaryColor rounded-full text-white mt-3 home-btn-lg">Book Now</button>
              </div>
            </div>
            <div className="sm:w-1/2 p-6">
              <img src={book} alt="" className="w-full  m-auto" />
              <h1 className="text-center font-semibold underline text-xl lg:text-3xl lg:my-3">Book appointment with expert doctor</h1>
              <p className="m-auto md:text-lg">Lorem ipsum dolor sit amet cons adipisicing elit. Ab omnis, at nostrum, accusamus animi rem temporibus reiciendis vitae mollitia aliquid eius ex? Eligendi laudantium, ad neque quaerat nesciunt nisi magni?</p>
              <div className="flex justify-center">
              <button className="btn px-3 py-2 bg-primaryColor rounded-full text-white mt-3 home-btn-lg">Book Now</button>
              </div>  
            </div>
            <div className="sm:w-1/2 lg:w-1/2 p-6">
              <img src={book} alt="" className="w-full m-auto" />
              <h1 className="text-center font-semibold underline text-xl lg:text-3xl lg:my-3">Book appointment with expert doctor</h1>
              <p className="m-auto md:text-lg">Lorem ipsum dolor sit amet cons adipisicing elit. Ab omnis, at nostrum, accusamus animi rem temporibus reiciendis vitae mollitia aliquid eius ex? Eligendi laudantium, ad neque quaerat nesciunt nisi magni?</p>
              <div className="flex justify-center">
              <button className="btn px-3 py-2 bg-primaryColor rounded-full text-white mt-3 home-btn-lg">Book Now</button>
              </div>
            </div>
   
          
           
            
          
        </div>

      </div> 
    </>
  );
}
