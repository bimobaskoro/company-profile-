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
      <div className="mb-4">
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
      <div className="grid-teams-page">
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
