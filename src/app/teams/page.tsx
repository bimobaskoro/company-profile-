import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import LocalData from "./_data/data";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaVoicemail,
} from "react-icons/fa";

const Teams = async () => {
  const rest = await fetch("https://randomuser.me/api/?results=6");
  const data: Users = await rest.json();

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

  return (
    <div>
      <div className="relative">
        <div
          className="bg-cover bg-center h-60 w-full"
          style={{ backgroundImage: `url("/images/teams.jpg")` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute w-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-1">
              Our Teams
            </h1>
            <div className="flex justify-center items-center w-auto">
              <p className="text-sm md:text-xl lg:text-2xl">Home / </p>
              <p className="text-sm md:text-xl lg:text-2xl">About / </p>
              <p className="text-sm md:text-xl lg:text-2xl">Our Service / </p>
              <p className=" text-slate-400 text-sm md:text-xl lg:text-2xl">
                Our Teams
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-teams-page mt-4">
        {data.results?.map((d, i) => (
          <div className="grid-teams-item">
            <div className="px-4 py-2">
              <Card className="card-item p-2 w-[350px] h-[250px]">
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
                </div>
                <CardContent className="p-2">
                  <center className="">
                    <div className=" font-bold text-[16px]">
                      {d.name.first} {d.name.last}
                    </div>
                    <div className="text-[12px]">
                      <div>{LocalData[i].title}</div>
                      <div>{LocalData[i].exer}</div>
                    </div>
                    <div className="flex justify-center items-center pt-2">
                      <FaLinkedin className="mr-1" />
                      <FaGithub />
                      <FaInstagram className="ml-1" />
                    </div>
                  </center>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
