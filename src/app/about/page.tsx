import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbStarsFilled } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHandHolding } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import Image from "next/image";
import {
  ParallaxComponent,
  ParallaxComponent2,
} from "./_components/parallax.component";
import localdata from "./_data/data";

interface Users {
  results: User[];
}

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const About = async () => {
  const rest = await fetch("https://randomuser.me/api/?results=6");
  const data: Users = await rest.json();

  return (
    <div>
      <div className="relative">
        <div
          className="bg-cover bg-center h-60 w-full"
          style={{ backgroundImage: `url("/images/about-us.jpg")` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-1">
              About Us
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-sm md:text-xl lg:text-2xl">Home / </p>
              <p className=" text-slate-400 text-sm md:text-xl lg:text-2xl">
                About us
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <ParallaxComponent />
      </div>
      <div className="relative">
        <ParallaxComponent2 />
      </div>
      <div className="">
        <div className="flex font-bold justify-center items-center mt-4">
          <div className="text-3xl">WHY CHOOSE US</div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-2 bg-gray-900 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <svg
              className="w-4 h-4 text-gray-700 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>
        <div className="text-[12px] ml-5 mr-5 text-center md:ml-36 md:mr-36">
          Choosing Elite Motors means choosing excellence, integrity, and an
          unmatched luxury car buying experience.
        </div>
        <div className="grid-choose">
          <div className="grid-choose-item p-3">
            <Card className="h-[300px]">
              <CardHeader>
                <CardTitle className="text-right">01</CardTitle>
                <CardDescription>
                  <div className="icon-2-container rounded-full w-10 h-10 flex justify-center items-center shadow-sm">
                    <TbStarsFilled className="icon-2 w-8 h-8" />
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-bold">Unparalleled Expertise</div>
                <div>
                  Our team comprises seasoned automotive experts dedicated to
                  providing expert guidance and advice
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid-choose-item p-3">
            <Card className="h-[300px]">
              <CardHeader>
                <CardTitle className="text-right">02</CardTitle>
                <CardDescription>
                  <div className="icon-2-container rounded-full w-10 h-10 flex justify-center items-center shadow-sm">
                    <MdVerifiedUser className="icon-2 w-8 h-8" />
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-bold">Curated Selection</div>
                <div>
                  We offer premium vehicles from top luxury brands, ensuring
                  high standards of quality, performance, and style
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid-choose-item p-3">
            <Card className="h-[300px]">
              <CardHeader>
                <CardTitle className="text-right">03</CardTitle>
                <CardDescription>
                  <div className="icon-2-container rounded-full w-10 h-10 flex justify-center items-center shadow-sm">
                    <RiCustomerService2Fill className="icon-2 w-8 h-8" />
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-bold">Exceptional Service</div>
                <div>
                  Customer satisfaction is our top priority. Our sales team
                  understands your needs, while our service department ensures
                  vehicles are meticulously maintained
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid-choose-item p-3">
            <Card className="h-[300px]">
              <CardHeader>
                <CardTitle className="text-right">04</CardTitle>
                <CardDescription>
                  <div className="icon-2-container rounded-full w-10 h-10 flex justify-center items-center shadow-sm">
                    <FaHandHolding className="icon-2 w-8 h-8" />
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-bold">Personalized Attention</div>
                <div>
                  We offer tailored solutions for your individual needs, whether
                  it's customizations, financing, or concierge services
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid-choose-item p-3">
            <Card className="h-[300px]">
              <CardHeader>
                <CardTitle className="text-right">05</CardTitle>
                <CardDescription>
                  <div className="icon-2-container rounded-full w-10 h-10 flex justify-center items-center shadow-sm">
                    <FaHandshake className="icon-2 w-8 h-8" />
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-bold">Integrity and Transparency</div>
                <div>
                  We conduct business with honesty and transparency, ensuring a
                  straightforward and trustworthy car buying experience
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* {d.gender} */}
      <div className="teams-section">
        <div className="text-black text-2xl font-bold flex justify-center items-center max-[320px]:mt-3 min-[375px]:mt-10 min-[425px]:mt-16 md:mt-20 lg:text-5xl xl:mt-32">
          Our Teams
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-2 bg-gray-900 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <svg
              className="w-4 h-4 text-gray-700 dark:text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="teams-grid">
        {data.results?.map((d, i) => (
          <div className="px-4 py-2">
            <Card className="card-item p-2">
              <div className="p-2">
                <center>
                  <Image
                    src={d.picture.large}
                    width="100"
                    height="100"
                    className=" rounded-full"
                    alt=""
                  />
                </center>
                <div className="overlay text-sm text-white">
                  <center className="p-2">
                    <div className=" text-justify">{localdata[i].desc}</div>
                  </center>
                </div>
              </div>
              <CardContent className="p-2">
                <div className="">
                  <center className="">
                    <div className=" font-bold text-[16px]">
                      {d.name.first} {d.name.last}
                    </div>
                    <div className="text-[14px]">{localdata[i].title}</div>
                  </center>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
