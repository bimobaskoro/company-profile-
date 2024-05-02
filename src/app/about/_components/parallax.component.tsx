"use client";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";

export function ParallaxComponent() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: "/images/about-us-2.jpg",
            speed: -10,
            // translateX: [0, 15],
            // scale: [0.1, 1.1, "easeOutCubic"],
          },
        ]}
        className="aspect-[5/3]"
      >
        <div className="history absolute inset-0 bg-white pl-40 pr-3 md:pl-80 lg:pl-96 xl:pl-[550px]">
          <div className="text-black text-2xl font-bold flex justify-center items-center max-[320px]:mt-3 min-[375px]:mt-10 min-[425px]:mt-16 md:mt-40 lg:text-5xl xl:mt-56">
            History
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className=" w-32 h-1 my-2 bg-gray-900 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-2 -translate-x-1/1 bg-white left-1/1 dark:bg-gray-900">
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
          <div className="text-[10px] mt-2 lg:text-[16px]">
            <center>
              Since 2010, Elite Motors has been synonymous with luxury and
              sophistication in the automotive industry. With a passion for fine
              automobiles, we've built a reputation for excellence and
              integrity.
            </center>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
}

export function ParallaxComponent2() {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: "/images/about-us-2.jpg",
            speed: -10,
            // translateX: [0, 15],
            // scale: [0.1, 1.1, "easeOutCubic"],
          },
        ]}
        className="aspect-[5/3]"
      >
        <div className="culture absolute inset-0 bg-white pl-3 pr-40 md:pr-72 lg:pr-80 xl:pr-[550px] xl:pl-44">
          <div className="text-black text-2xl  font-bold flex justify-center items-center max-[320px]:mt-3 min-[375px]:mt-9 min-[425px]:mt-14 md:mt-40 lg:text-5xl lg:mt-52 ">
            Culture
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className=" w-32 h-1 my-2 bg-gray-900 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-2 -translate-x-1/1 bg-white left-1/1 dark:bg-gray-900">
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
          <div className="text-[10px] lg:text-[16px] mt-2">
            <center>
              At Elite Motors, we believe in providing an exceptional experience
              for every customer. Our team is committed to delivering
              unparalleled service with integrity, professionalism, and a
              passion for luxury cars.
            </center>
          </div>
        </div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
}
