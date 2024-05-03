import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { FaBars, FaFacebook, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { Open_Sans } from "next/font/google";
import Navbar from "./_components/navbar";
import SmoothScroll from "./about/_components/smoothScroll";
const openSans = Open_Sans({ subsets: ["latin"] }); // Subset for Open Sans font

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} overflow-x-hidden bg-white`}>
        {/* <SmoothScroll /> */}
        <Navbar />
        {children}
        <footer className="bg-[#121420] mt-3">
          <div className="flex justify-between">
            <Image src="/logo.svg" width="100" height="100" alt="" />
            <div className="flex justify-center items-center text-white">
              <div className=" rounded-full border-white border p-1 mr-2 bg-[#1877F2]">
                <FaFacebook color="white" />
              </div>
              <div className=" rounded-full border-white border p-1 mr-2 bg-black">
                <FaXTwitter color="white" />
              </div>
              <div className=" rounded-full border-white border p-1 mr-2 bg-[#EA3981]">
                <RiInstagramFill color="white" />
              </div>
              <div className=" rounded-full border-white border p-1 mr-2 bg-[#FF0000]">
                <FaYoutube color="white" />
              </div>
            </div>
          </div>
          <div className="grid-cols-1 flex justify-center items-center border-t border-white text-white text-[10px] p-3">
            <a href="/" className="mr-2">
              Home
            </a>
            <a href="/about" className="mr-2">
              About Us
            </a>
            <a href="/services" className="mr-2">
              Our Service
            </a>
            <a href="/teams" className="mr-2">
              Teams
            </a>
          </div>
          <div className="bg-[#171717] text-white text-[8px]">
            <center>© Elite Motors</center>
          </div>
        </footer>
      </body>
    </html>
  );
}
