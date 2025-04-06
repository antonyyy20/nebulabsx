import Link from "next/link";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const Pricing = () => {
  return (

    <section id="pricing" className="flex flex-col items-center  text-white py-16 px-4 w-full ">
      <div className="w-[90%] md:w-[40%] md:m-0 m-5">
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          Choose the perfect plan for <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent font-playfair">Your Agency</span>
        </h2>
        <p className=" text-center mb-16 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent ">
          Flexible pricing options to meet the needs of every team, from startups to large agencies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 w-[90%] justify-center">
        {/* Starter Plan */}
        <div className="bg-black p-6 rounded-2xl w-[100%] md:w-80 text-start ">
          <h3 className="text-xl ">STARTER</h3>
          <p className="text-5xl">$5000</p>
          <p className="text-gray-400  my-8">Perfect for individuals and small teams getting started.</p>
          <ul className="text-left space-y-2 ">
            <li className="flex justify-start gap-2 items-center"><IoCheckmarkCircle />Unlimited Projects</li>
            <li className="flex justify-start gap-2 items-center"><IoCheckmarkCircle />Basic Task Management</li>
            <li className="flex justify-start gap-2 items-center"><IoCheckmarkCircle />Real-Time Collaboration</li>
            <li className="flex justify-start gap-2 items-center"><IoCheckmarkCircle />Community Support</li>
          </ul>
          <button className="bg-white text-black py-2 px-4  mt-8 w-full rounded-xl">
          <Link href="/book-a-call">Start Your Free Trial </Link>
          </button>
        </div>

         {/* Starter Plan */}
         <div className="bg-black p-6 rounded-2xl md:w-80 text-start w-[100%] ">
          <h3 className="text-xl ">STARTER</h3>
          <p className="text-5xl">Free</p>
          <p className="text-gray-400  my-8">Perfect for individuals and small teams getting started.</p>
          <ul className="text-left space-y-2 ">
            <li className="flex justify-start gap-2 items-center"><IoCheckmarkCircle />Unlimited Projects</li>
            <li className="flex justify-start gap-2 items-center"><IoCheckmarkCircle />Basic Task Management</li>
            <li className="flex justify-start gap-2 items-center"><IoCheckmarkCircle />Real-Time Collaboration</li>
            <li className="flex justify-start gap-2 items-center"><IoCheckmarkCircle />Community Support</li>
          </ul>
          <button className="bg-white text-black py-2 px-4  mt-8 w-full rounded-xl">
          <Link href="/book-a-call">Start Your Free Trial </Link>
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default Pricing;
