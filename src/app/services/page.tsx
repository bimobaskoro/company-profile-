import React from "react";
import TabsComponent from "./_components/tabs";

function services() {
  return (
    <div>
      <div className="relative">
        <div
          className="bg-cover bg-center h-60 w-full"
          style={{ backgroundImage: `url("/images/services-2.jpg")` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute w-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-1">
              Our Services
            </h1>
            <div className="flex justify-center items-center w-auto">
              <p className="text-sm md:text-xl lg:text-2xl">Home / </p>
              <p className="text-sm md:text-xl lg:text-2xl">About / </p>
              <p className=" text-slate-400 text-sm md:text-xl lg:text-2xl">
                Our Services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TabsComponent />
      </div>
    </div>
  );
}

export default services;
