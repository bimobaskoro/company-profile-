"use client";
import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import { IoCarSport, IoSettings } from "react-icons/io5";
import { MdPayments, MdPeople } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="bg-white w-screen">
      <div className="justify-end max-w-full relative">
        <div className="bg-white w-full overflow-hidden relative">
          <ParallaxProvider>
            <ParallaxBanner
              layers={[
                { image: "/images/slide-3.jpg", speed: -20 },
                {
                  speed: -15,
                  children: (
                    <>
                      <div className="absolute top-0 left-0 w-full h-100 bg-gradient-to-b from-black to-transparent opacity-70 z-10"></div>
                      <div className="absolute text-left w-full lg:w-[70%] xl:mt-32 pl-2 lg:pl-0 lg:pr-0 pr-5 top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 text-white z-20 min-[375px]:mt-10">
                        <div className="text-[16px] font-bold md:text-[30px] lg:text-[40px]">
                          "Elevate Your Driving Experience"
                        </div>
                        <div className="text-[12px] md:text-[16px] lg:text-[20px] w-70">
                          Established in 2010, Elite Motors has quickly become a
                          leading luxury car dealership. With a passion for
                          excellence and a commitment to customer satisfaction,
                          we have earned the trust of discerning car
                          enthusiasts.
                        </div>
                        <div>
                          <button className="bg-white text-[#861112] font-bold p-1 mt-1 rounded-[5px]">
                            Find More
                          </button>
                        </div>
                      </div>
                    </>
                  ),
                  style: { height: "1000px" }, // Atur ukuran gambar di sini
                },
              ]}
              className="aspect-[1/1] md:aspect-[2/1]"
            />
          </ParallaxProvider>
        </div>
      </div>
      <div className="ps-section mt-5">
        <div className="flex font-bold justify-center items-center">
          <div className="text-4xl">OUR SERVICE</div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-8 bg-gray-900 border-0 rounded dark:bg-gray-700" />
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
        <div className="justify-center">
          <center className="mt-7">
            <div className="grid-ps">
              <div className="grid-ps-item">
                <center>
                  <div className="octagonWrap">
                    <div className="octagon">
                      <IoCarSport className="icon" />
                    </div>
                  </div>
                  <div className="pt-2 font-bold text-[25px]">Car Sales</div>
                  <div className="pt-2">
                    <div className="upper-line"></div>
                    <div className="bottom-line"></div>
                  </div>
                  <div className="text-[15px] p-2">
                    Explore our exclusive collection of luxury vehicles,
                    including high-end sedans, sports cars, SUVs, and exotics
                  </div>
                </center>
              </div>
              <div className="grid-ps-item">
                <center>
                  <div className="octagonWrap">
                    <div className="octagon">
                      <IoSettings className="icon" />
                    </div>
                  </div>
                  <div className="pt-2 font-bold text-[25px]">
                    Customization Services
                  </div>
                  <div className="pt-2">
                    <div className="upper-line"></div>
                    <div className="bottom-line"></div>
                  </div>
                  <div className="text-[15px] p-2">
                    Personalize your luxury car with our bespoke customization
                    options, from custom paint finishes to interior upgrades
                  </div>
                </center>
              </div>
              <div className="grid-ps-item">
                <center>
                  <div className="octagonWrap">
                    <div className="octagon">
                      <MdPayments className="icon" />
                    </div>
                  </div>
                  <div className="pt-2 font-bold text-[25px]">
                    Financing Options
                  </div>
                  <div className="pt-2">
                    <div className="upper-line"></div>
                    <div className="bottom-line"></div>
                  </div>
                  <div className="text-[15px] p-2">
                    We offer flexible financing solutions tailored to your
                    needs, making it easier to drive home your dream car
                  </div>
                </center>
              </div>
              <div className="grid-ps-item">
                <center>
                  <div className="octagonWrap">
                    <div className="octagon">
                      <MdPeople className="icon" />
                    </div>
                  </div>
                  <div className="pt-2 font-bold text-[25px]">
                    Concierge Service
                  </div>
                  <div className="pt-2">
                    <div className="upper-line"></div>
                    <div className="bottom-line"></div>
                  </div>
                  <div className="text-[15px] p-2">
                    Our concierge team ensures a seamless buying experience,
                    handling everything from vehicle delivery to registration
                  </div>
                </center>
              </div>
            </div>
          </center>
        </div>
      </div>
      <div className="brand-section bg-white mt-5">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div style={{ width: "100%", height: "100%" }}>
                  <Card className=" bg-white !border-none pt-5 pb-5">
                    <center>
                      <Image
                        src={`/logo-${index}.svg`}
                        alt={`logo ${index}`}
                        // layout="fill"
                        // objectFit="cover"
                        height="50"
                        width="50"
                        style={{
                          minHeight: "50px",
                          maxHeight: "50px",
                          aspectRatio: 1,
                        }}
                        priority={true}
                      />
                    </center>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="testimonial-section mt-5">
        <div className="flex font-bold justify-center items-center">
          <div className="text-4xl">OUR CLIENT</div>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-8 bg-gray-900 border-0 rounded dark:bg-gray-700" />
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
        <div className="justify-center pl-7 pr-7">
          <center className="grid-testimonial">
            <Card className="h-55 p-5 mt-3">
              <Image
                src="/images/dummy-profile.jpg"
                height={100}
                width={100}
                alt=""
                layout="fixed"
                style={{ borderRadius: "100px" }}
              />
              <div className=" text-sm mt-1">
                "Elite Motors provided me with the perfect car buying
                experience. Their professionalism and attention to detail were
                exceptional."
              </div>
              <div className="text-sm font-bold mt-1">James L.</div>
            </Card>
            <Card className="h-55 p-5 mt-3">
              <Image
                src="/images/dummy-profile.jpg"
                height={100}
                width={100}
                alt=""
                layout="fixed"
                style={{ borderRadius: "100px" }}
              />
              <div className=" text-sm mt-1">
                . "I couldn't be happier with my purchase from Elite Motors.
                They went above and beyond to find me the exact car I was
                looking for."
              </div>
              <div className="text-sm font-bold mt-1">Sarah K.</div>
            </Card>
          </center>
        </div>
      </div>
    </div>
  );
}
