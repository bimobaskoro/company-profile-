"use client";

import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

export function ParallaxHome() {
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
                  Established in 2010, Elite Motors has quickly become a leading
                  luxury car dealership. With a passion for excellence and a
                  commitment to customer satisfaction, we have earned the trust
                  of discerning car enthusiasts.
                </div>
                <div>
                  <button className="bg-white text-[#861112] font-bold p-1 mt-1 rounded-sm">
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
  </ParallaxProvider>;
}
