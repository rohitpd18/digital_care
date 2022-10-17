import React from 'react'
import Fbicon from '../Assets/image/FbIcon.jpg';
import TwIcon from '../Assets/image/TwIcon.jpg';
import YtIcon from '../Assets/image/YtIcon.jpg';

export default function Footer() {
  return (
    <div>
        <section>
            <div class="hendle flex items-center justify-start mx-4 space-x-4">
                <div>Follow DigitalCare</div>
                <img class="h-8" src={Fbicon} alt=""/>
                <img class="h-8" src={TwIcon} alt=""/>
                <img class="h-8" src={YtIcon} alt=""/>
            </div>
        </section>

        <section>
            <div class=" text-gray-500 text-sm mt-14 px-6 pt-6 pb-3 space-y-6 bg-[#F2F2F2] md:flex md:flex-wrap md:justify-start lg:justify-center">
                <br/>
                <div class="space-y-3 md:w-[20vw] md:mr-[20vw] lg:w-[15vw] lg:mr-20 ">
                    <h1 class="text-lg text-gray-600 font-semibold">What's new</h1>
                    <div>Book Appoinment</div>
                    <div>Services</div>
                    <div>Features</div>
                </div>
                <div class="space-y-3 md:w-[20vw] md:mr-[20vw] lg:w-[15vw] lg:mr-20">
                    <h1 class="text-lg text-gray-600 font-semibold">Book Appoinment</h1>
                    <div>Select Hospital</div>
                    <div>Select Doctor</div>
                    <div>Book Bed</div>
                    <div>Book Emergency Bed</div>
                    <div>Book Embulance</div>
                </div>
                <div class="space-y-3 md:w-[20vw] md:mr-[20vw] lg:w-[15vw] lg:mr-20">
                    <h1 class="text-lg text-gray-600 font-semibold">Services</h1>
                    <div>Select Hospital</div>
                    <div>Select Doctor</div>
                    <div>Book Bed</div>
                    <div>Book Emergency Bed</div>
                    <div>Book Embulance</div>
                </div>
                <div class="space-y-3 md:w-[20vw] md:mr-[20vw] lg:w-[15vw] lg:mr-20">
                    <h1 class="text-lg text-gray-600 font-semibold">Paterns</h1>
                    <div>Book Appoinment</div>
                    <div>Services</div>
                    <div>Features</div>
                    <div>Select Doctor</div>
                    <div>Book Bed</div>
                </div>
                
                <div class="text-sm md:flex md:items-center md:space-x-64 lg:space-x-96">
                    <div>English (India)</div>
                    <div class="flex items-center justify-start space-x-2 flex-wrap my-4 text-[12px]">
                        <div>Contact </div>
                        <div>Microsoft</div>
                        <div>Privacy</div>
                        <div>Terms of use</div>
                        <div>Trademarks</div>
                        <div>About our ads </div>
                        <div>© Microsoft 2022</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
