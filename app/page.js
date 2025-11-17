import React from "react";

import Image from "next/image";
import SmartBoartDetails from "@/components/smartboard/SmartBoartDetails";
import OperatingSystem from "@/components/smartboard/OperatingSystem";
import Connectivity from "@/components/smartboard/Connectivity";
import Accessories from "@/components/smartboard/Accessories";
import Functionality from "@/components/smartboard/Functionality";
import Pricing from "@/components/smartboard/Pricing";
import Container from "@/components/Container";

export const metadata = {
  title: "RBD Smartboard",
  description: "All-in-one interactive touchscreen board with 4K display, multi-touch, and robust OS options.\nSeamless connectivity, rich accessories, and smart tools to elevate classrooms and meetings.",
};

const HomePage = () => {
  return (
    <div className="relative">
      <div className=" ">
        <div className="bg-cover flex  justify-center  bg-center h-[50vh] md:h-[767px] w-full bg-[url('/smartboard/backgroundpicture.jpg')]">
          <div className="flex  flex-col items-center">
            <Image
              className="md:pt-44 pt-20 md:max-w-[297px] max-w-[150px] w-full text-white"
              src="/smartboard/logo.png"
              height={106}
              width={297}
              alt="LOGO"
            />
            <h1 className="md:text-[60px] text-2xl text-white text-center font-fasterOne ">
              Interactive Touchscreen Boards
            </h1>
          </div>
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <Image
              className="object-cover w-screen absolute -top-[30%] -z-50 h-[3150px] blur-lg"
              src="/backgroundwave/blur_background1.png"
              width={1440}
              height={2340}
              alt="blurbg1"
              //
            />

            <Image
              className="object-contain md:object-cover w-screen absolute -top-[30%] -z-50 h-[2340px]"
              src="/backgroundwave/bg1.png"
              width={1440}
              height={2340}
              alt="Wavenumber1"
              // fill
            />

            <Image
              className="object-contain md:object-cover w-screen absolute top-[40%] -z-50 h-[2340px]"
              src="/backgroundwave/bg2.png"
              width={1440}
              height={2340}
              alt="bg2"
              //
            />
          </div>
          <SmartBoartDetails />
          <OperatingSystem />
          <Connectivity />
        </div>

        <div className="relative pb-40">
          <Image
            className="object-contain md:object-cover w-screen absolute -top-[30%] -z-50 h-[2340px]"
            src="/backgroundwave/bg3.png"
            width={1440}
            height={2340}
            alt="Wavenumber1"
            // fill
          />
          <Image
            className="object-contain md:object-cover w-screen absolute bottom-0 -z-50 h-[2340px]"
            src="/backgroundwave/bg4.png"
            width={1440}
            height={2340}
            alt="Wavenumber1"
            // fill
          />

          <Image
            className="object-cover w-screen absolute bottom-0 -z-50 h-[3150px] blur-lg"
            src="/backgroundwave/blur_background2.png"
            width={1440}
            height={2340}
            alt="blurbg1"
            //
          />
          <Container>
            <div className="flex flex-col items-center justify-center">
              <div className="pt-32 flex items-center justify-center">
                <Image
                  src="/smartboard/4th_Section.png"
                  width={980}
                  height={1020}
                  alt="section4"
                />
              </div>
              <div className="mt-20">
                <Image
                  src="/smartboard/5th_Section.png"
                  width={980}
                  height={1020}
                  alt="section4"
                />
              </div>
            </div>

            <Accessories />
            <Functionality />
            <Pricing />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
