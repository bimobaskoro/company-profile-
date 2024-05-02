"use client";

import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import ScrollComponent from "./scrollComponent";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function tabs() {
  return (
    <>
      <div className="w-100">
        <Tabs
          defaultActiveKey="1"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="1" title="Car Sales" className="p-2">
            <Card className="border-white shadow-none">
              <CardContent>
                <center>
                  <div className="">
                    <div className="grid-section-car ">
                      <div className="grid-car-items xl:order-2">
                        <Image
                          src="/Images/aventador-1.jpg"
                          width="280"
                          height="244"
                          alt=""
                          className="right-img md:w-[597px] md:h-[379px] lg:w-[497px] lg:h-[279px] xl:w-[597px] xl:h-[379px]"
                        />
                      </div>
                      <div className="grid-car-items xl:order-1 pr-8 pl-8 xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            LAMBORGHINI
                          </p>
                        </div>
                        <div className="text-left mt-3 md:text-[22px] xl:w-full xl:text-[16px]">
                          The Revuelto is the beginning of a new era for
                          Lamborghini, who has harnessed the power of
                          hybridization technology to create the first HPEV
                          (High Performance Electrified Vehicle). Responding to
                          the need for sustainability and powerful performance,
                          the Lamborghini Revuelto rewrites all paradigms and
                          represents a technical masterpiece beyond anyone’s
                          imagination. The iconic V12 engine finds a new life in
                          this futuristic automotive masterwork that delivers
                          unparalleled performance and driving emotions
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </CardContent>
            </Card>
            <Card className="border-white shadow-none">
              <CardContent>
                <center>
                  <div className="">
                    <div className="grid-section-car ">
                      <div className="p-2 grid-car-items xl:order-1">
                        <Image
                          src="/Images/bmw-1.png"
                          width="497"
                          height="279"
                          alt=""
                          className="md:w-[597px] md:h-[379px] lg:w-[497px] lg:h-[279px] xl:w-[597px] xl:h-[379px]"
                        />
                      </div>
                      <div className="grid-car-items xl:order-2 pr-8 pl-8 xl:mr-[120px] xl: xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            BMW
                          </p>
                        </div>
                        <div className="text-left mt-2 md:text-[22px] xl:w-[500px] xl:text-[16px]">
                          The Revuelto is the beginning of a new era for
                          Lamborghini, who has harnessed the power of
                          hybridization technology to create the first HPEV
                          (High Performance Electrified Vehicle). Responding to
                          the need for sustainability and powerful performance,
                          the Lamborghini Revuelto rewrites all paradigms and
                          represents a technical masterpiece beyond anyone’s
                          imagination. The iconic V12 engine finds a new life in
                          this futuristic automotive masterwork that delivers
                          unparalleled performance and driving emotions
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </CardContent>
            </Card>
            <Card className="border-white shadow-none">
              <CardContent>
                <center>
                  <div className="">
                    <div className="grid-section-car ">
                      <div className="grid-car-items xl:order-2">
                        <Image
                          src="/Images/mersi-1.png"
                          width="280"
                          height="244"
                          alt=""
                          className=" md:w-[597px] md:h-[379px] lg:w-[497px] lg:h-[279px] xl:w-[597px] xl:h-[379px]"
                        />
                      </div>
                      <div className="grid-car-items xl:order-1 pr-8 pl-8 xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            MERCEDEZ BENZ
                          </p>
                        </div>
                        <div className="text-left mt-3 md:text-[22px] xl:w-full xl:text-[16px]">
                          The Revuelto is the beginning of a new era for
                          Lamborghini, who has harnessed the power of
                          hybridization technology to create the first HPEV
                          (High Performance Electrified Vehicle). Responding to
                          the need for sustainability and powerful performance,
                          the Lamborghini Revuelto rewrites all paradigms and
                          represents a technical masterpiece beyond anyone’s
                          imagination. The iconic V12 engine finds a new life in
                          this futuristic automotive masterwork that delivers
                          unparalleled performance and driving emotions
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </CardContent>
            </Card>
            <Card className="border-white shadow-none">
              <CardContent>
                <center>
                  <div className="">
                    <div className="grid-section-car ">
                      <div className="p-2 grid-car-items xl:order-1">
                        <Image
                          src="/Images/porc-1.jpg"
                          width="497"
                          height="279"
                          alt=""
                          className=" right-img md:w-[597px] md:h-[379px] lg:w-[497px] lg:h-[279px] xl:w-[597px] xl:h-[379px]"
                        />
                      </div>
                      <div className="grid-car-items xl:order-2 pr-8 pl-8 xl:mr-[120px] xl: xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            PORCHE
                          </p>
                        </div>
                        <div className="text-left mt-2 md:text-[22px] xl:w-[500px] xl:text-[16px]">
                          The Revuelto is the beginning of a new era for
                          Lamborghini, who has harnessed the power of
                          hybridization technology to create the first HPEV
                          (High Performance Electrified Vehicle). Responding to
                          the need for sustainability and powerful performance,
                          the Lamborghini Revuelto rewrites all paradigms and
                          represents a technical masterpiece beyond anyone’s
                          imagination. The iconic V12 engine finds a new life in
                          this futuristic automotive masterwork that delivers
                          unparalleled performance and driving emotions
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </CardContent>
            </Card>
            <Card className="border-white shadow-none">
              <CardContent>
                <center>
                  <div className="">
                    <div className="grid-section-car ">
                      <div className="grid-car-items xl:order-2">
                        <Image
                          src="/Images/ferari-1.png"
                          width="280"
                          height="244"
                          alt=""
                          className=" md:w-[597px] md:h-[379px] lg:w-[497px] lg:h-[279px] xl:w-[597px] xl:h-[379px]"
                        />
                      </div>
                      <div className="grid-car-items xl:order-1 pr-8 pl-8 xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            FERARI
                          </p>
                        </div>
                        <div className="text-left mt-3 md:text-[22px] xl:w-full xl:text-[16px]">
                          The Revuelto is the beginning of a new era for
                          Lamborghini, who has harnessed the power of
                          hybridization technology to create the first HPEV
                          (High Performance Electrified Vehicle). Responding to
                          the need for sustainability and powerful performance,
                          the Lamborghini Revuelto rewrites all paradigms and
                          represents a technical masterpiece beyond anyone’s
                          imagination. The iconic V12 engine finds a new life in
                          this futuristic automotive masterwork that delivers
                          unparalleled performance and driving emotions
                        </div>
                      </div>
                    </div>
                  </div>
                </center>
              </CardContent>
            </Card>
          </Tab>
          <Tab eventKey="2" title="Customization Services">
            <div className="">
              <div className="font-bold mt-4">
                <div className=" text-center text-3xl">
                  CUSTOMIZATION SERVICES
                </div>
              </div>
              <div className="text-center pl-3 pr-3 pt-2">
                With our customization services, you can transform your luxury
                car into a work of art that fits your taste and style
              </div>
              <div className="grid-custom p-4">
                <div className="grid-custom-item">
                  <Card className="min-h-[70px]">
                    <center className="p-2">
                      <Image src="/paint.svg" width="100" height="100" alt="" />
                      <div className="font-bold">Custom Paint Options</div>
                      <div>
                        You can choose from a variety of exclusive paint colors
                        to personalize your car to match your personality
                      </div>
                    </center>
                  </Card>
                </div>
                <div className="grid-custom-item">
                  <Card className="min-h-[70px]">
                    <center className="p-2">
                      <Image
                        src="/premium.svg"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div className="font-bold">Premium Interior</div>
                      <div>
                        Upgrade your car's interior with premium materials such
                        as high-quality leather, fine wood veneers, or carbon
                        fiber to create a luxurious and elegant ambiance
                      </div>
                    </center>
                  </Card>
                </div>
                <div className="grid-custom-item">
                  <Card className="min-h-[70px]">
                    <center className="p-2">
                      <Image
                        src="/technology.svg"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div className="font-bold">
                        Entertainment and Technology System
                      </div>
                      <div>
                        Add the latest technology features such as high-end
                        audio systems, touchscreen with GPS navigation, or rear
                        entertainment systems to enhance your driving comfort
                        and pleasure
                      </div>
                    </center>
                  </Card>
                </div>
                <div className="grid-custom-item">
                  <Card className="min-h-[70px]">
                    <center className="p-2">
                      <Image src="/speed.svg" width="100" height="100" alt="" />
                      <div className="font-bold">Performance Package </div>
                      <div>
                        Personalize your car's performance with engine upgrade
                        packages, suspension enhancements, or exhaust systems to
                        improve performance and provide a more satisfying
                        driving experience
                      </div>
                    </center>
                  </Card>
                </div>
                <div className="grid-custom-item">
                  <Card className="min-h-[70px]">
                    <center className="p-2">
                      <Image
                        src="/custom.svg"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div className="font-bold">Custom Detail</div>
                      <div>
                        From custom wheels to custom LED headlights, we offer a
                        variety of custom detail options that can add an
                        exclusive touch to your car
                      </div>
                    </center>
                  </Card>
                </div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="3" title="Financing Options">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="4" title="Concierge Services">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
