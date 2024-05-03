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
                      <div className="grid-car-items xl:order-1 pr-4 pl-4 xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            LAMBORGHINI
                          </p>
                        </div>
                        <div className="text-left mt-3 md:text-[22px] xl:w-full xl:text-[16px]">
                          Lamborghini was founded in 1963 by Ferruccio
                          Lamborghini, an Italian entrepreneur who initially
                          manufactured tractors. Lamborghini began producing its
                          first super sports car, the Lamborghini 350 GT, in
                          1964. Lamborghini is known for its aggressive design,
                          V12 engines, and innovative technology. The company
                          continues to produce high-performance supercars,
                          including iconic models like the Countach, Diablo,
                          Gallardo, and Aventador
                        </div>
                        <div className="xl:flex xl:justify-start xl:items-start xl:pt-2">
                          <button className="text-white bg-[#861112] font-bold p-1 mt-1 rounded-[5px]">
                            Find More
                          </button>
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
                      <div className="grid-car-items xl:order-2 pr-4 pl-4 xl:mr-[120px] xl: xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            BMW
                          </p>
                        </div>
                        <div className="text-left mt-2 md:text-[22px] xl:w-[500px] xl:text-[16px]">
                          BMW, or Bayerische Motoren Werke AG, was founded in
                          1916 in Germany. The company initially produced
                          aircraft engines and didn't start making cars until
                          1928 with the small BMW 3/15. BMW is known for its
                          focus on performance, technology, and elegant design.
                          They have a wide range of products, from compact cars
                          to luxury vehicles, as well as sports cars under the M
                          brand (BMW M GmbH)
                        </div>
                        <div className="xl:flex xl:justify-start xl:items-start xl:pt-2">
                          <button className="text-white bg-[#861112] font-bold p-1 mt-1 rounded-[5px]">
                            Find More
                          </button>
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
                          className="mersi md:w-[597px] md:h-[379px] lg:w-[497px] lg:h-[279px] xl:w-[597px] xl:h-[379px]"
                        />
                      </div>
                      <div className="grid-car-items xl:order-1 pr-4 pl-4 xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            MERCEDEZ BENZ
                          </p>
                        </div>
                        <div className="text-left mt-3 md:text-[22px] xl:w-full xl:text-[16px]">
                          Mercedes-Benz, stemming from the merger of
                          Daimler-Motoren-Gesellschaft and Benz & Cie in 1926,
                          is one of the oldest car manufacturers in the world.
                          Its history began with Karl Benz's invention of the
                          first automobile in 1886. Mercedes-Benz is known for
                          its elegant luxury vehicles, technological
                          innovations, and superior safety. They have a diverse
                          range of models, from luxurious sedans like the
                          Mercedes-Benz S-Class to sports cars like the
                          Mercedes-AMG GT
                        </div>
                        <div className="xl:flex xl:justify-start xl:items-start xl:pt-2">
                          <button className="text-white bg-[#861112] font-bold p-1 mt-1 rounded-[5px]">
                            Find More
                          </button>
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
                          className="porche right-img md:w-[597px] md:h-[379px] lg:w-[497px] lg:h-[279px] xl:w-[597px] xl:h-[379px]"
                        />
                      </div>
                      <div className="grid-car-items xl:order-2 pr-4 pl-4 xl:mr-[120px] xl: xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            PORCHE
                          </p>
                        </div>
                        <div className="text-left mt-2 md:text-[22px] xl:w-[500px] xl:text-[16px]">
                          Porsche was founded by Ferdinand Porsche in 1931 in
                          Stuttgart, Germany. The company initially was an
                          engineering and prototype-building consultancy.
                          Porsche produced its first sports car, the Porsche
                          356, in 1948. Since then, Porsche has become one of
                          the leading sports car manufacturers in the world with
                          models like the Porsche 911, Porsche Boxster, and
                          Porsche Cayenne. They are known for high performance,
                          iconic design, and advanced technology
                        </div>
                        <div className="xl:flex xl:justify-start xl:items-start xl:pt-2">
                          <button className="text-white bg-[#861112] font-bold p-1 mt-1 rounded-[5px]">
                            Find More
                          </button>
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
                          className="ferari md:w-[597px] md:h-[379px] lg:w-[497px] lg:h-[279px] xl:w-[597px] xl:h-[379px]"
                        />
                      </div>
                      <div className="grid-car-items xl:order-1 pr-4 pl-4 xl:mt-[20px]">
                        <div className="xl:flex xl:justify-start xl:items-start">
                          <p className="font-bold text-[25px] md:text-[45px] lg:text-[55px] xl:text-[60px]">
                            FERARI
                          </p>
                        </div>
                        <div className="text-left mt-3 md:text-[22px] xl:w-full xl:text-[16px]">
                          Ferrari was founded by Enzo Ferrari in 1939 as
                          Scuderia Ferrari, a racing team that competed in Grand
                          Prix racing. Ferrari began producing its first sports
                          car, the Ferrari 125 S, in 1947. The brand is famous
                          for its legendary sports and racing cars, including
                          the Ferrari Testarossa, Ferrari F40, and Ferrari Enzo.
                          Ferrari is always known for its combination of high
                          performance, stunning design, and strong racing
                          heritage
                        </div>
                        <div className="xl:flex xl:justify-start xl:items-start xl:pt-2">
                          <button className="text-white bg-[#861112] font-bold p-1 mt-1 rounded-[5px]">
                            Find More
                          </button>
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
                  <Card className="h-[280px] border-white shadow-none">
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
                  <Card className="h-[280px] border-white shadow-none">
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
                  <Card className="h-[280px] border-white shadow-none">
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
                  <Card className="h-[280px] border-white shadow-none">
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
                  <Card className="h-[280px] border-white shadow-none">
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
            <div className="font-bold mt-4">
              <div className=" text-center text-3xl">Financing Options </div>
            </div>
            <div className="text-center pl-3 pr-3 pt-2">
              We understand that each customer has different financial needs.
              Therefore, we offer various flexible payment options tailored to
              your needs
            </div>
            <div className="grid-custom p-4">
              <div className="grid-custom-item">
                <Card className="h-[280px] border-white shadow-none">
                  <center className="p-2">
                    <Image src="/credit.svg" width="100" height="100" alt="" />
                    <div className="font-bold">Credit Financing</div>
                    <div>
                      We collaborate with leading financial institutions to
                      provide competitive credit financing packages. You can
                      choose a payment term that suits you, ranging from several
                      months to several years, to help you manage your monthly
                      payments more easily
                    </div>
                  </center>
                </Card>
              </div>
              <div className="grid-custom-item">
                <Card className="h-[280px] border-white shadow-none">
                  <center className="p-2">
                    <Image src="/cash.svg" width="100" height="100" alt="" />
                    <div className="font-bold">Cash Payment</div>
                    <div>
                      For those who prefer to pay directly without credit or
                      leasing, we also accept cash payments. You can pay the
                      full price of the car at the time of purchase to own the
                      car immediately without debt or additional charges
                    </div>
                  </center>
                </Card>
              </div>
              <div className="grid-custom-item">
                <Card className="h-[280px] border-white shadow-none">
                  <center className="p-2">
                    <Image src="/trade.svg" width="100" height="100" alt="" />
                    <div className="font-bold">Trade-In</div>
                    <div>
                      If you have a used car that you want to sell, we accept
                      trade-ins as part of the payment for your new car. The
                      trade-in value will be deducted from the purchase price of
                      your new car, allowing you to reduce the cost of your new
                      car purchase
                    </div>
                  </center>
                </Card>
              </div>
            </div>
          </Tab>
          <Tab eventKey="4" title="Concierge Services">
            <div className="font-bold mt-4">
              <div className=" text-center text-3xl">Concierge Services</div>
            </div>
            <div className="text-center pl-3 pr-3 pt-2">
              Our concierge team is ready to assist you at every stage of your
              car purchase. Here are some concierge services we provide
            </div>
            <div className="grid-custom p-4">
              <div className="grid-custom-item">
                <Card className="h-[280px] border-white shadow-none">
                  <center className="p-2">
                    <Image
                      src="/delivery.svg"
                      width="100"
                      height="100"
                      alt=""
                    />
                    <div className="font-bold">Car Delivery</div>
                    <div>
                      We will arrange the safe and timely delivery of your car
                      to your specified location.
                    </div>
                  </center>
                </Card>
              </div>
              <div className="grid-custom-item">
                <Card className="h-[280px] border-white shadow-none">
                  <center className="p-2">
                    <Image
                      src="/register.svg"
                      width="100"
                      height="100"
                      alt=""
                    />
                    <div className="font-bold">Vehicle Registration</div>
                    <div>
                      We will assist you with the vehicle registration process,
                      including handling the necessary documents and
                      administrative tasks
                    </div>
                  </center>
                </Card>
              </div>
              <div className="grid-custom-item">
                <Card className="h-[280px] border-white shadow-none">
                  <center className="p-2">
                    <Image src="/car.svg" width="100" height="100" alt="" />
                    <div className="font-bold">Test Drive</div>
                    <div>
                      We provide test drive services at a location convenient
                      for you
                    </div>
                  </center>
                </Card>
              </div>
              <div className="grid-custom-item">
                <Card className="h-[280px] border-white shadow-none">
                  <center className="p-2">
                    <Image src="/24.svg" width="100" height="100" alt="" />
                    <div className="font-bold">24/7 Emergency Services</div>
                    <div>
                      We are available to provide 24/7 emergency assistance if
                      you encounter any issues with your car
                    </div>
                  </center>
                </Card>
              </div>
              <div className="grid-custom-item">
                <Card className="h-[280px] border-white shadow-none">
                  <center className="p-2">
                    <Image
                      src="/maintenance.svg"
                      width="100"
                      height="100"
                      alt=""
                    />
                    <div className="font-bold">Maintenance and Servicing</div>
                    <div>
                      We can help you schedule routine maintenance and car
                      servicing, as well as provide advice on necessary
                      maintenance to ensure your car remains in top condition
                    </div>
                  </center>
                </Card>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
