import React from "react";
import { ChildrenProps } from "./type";
import themeConfig from "@/config/themeConfig";
import Image from "next/image";

const CircleLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="p-2">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[100vh] w-full">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-800">
          <div className="hidden dark:block w-full h-full">
            <div className="bg-gradient-to-br from-white from-10% via-white via-30% to-green-100 to-90%  h-full">
              <div className=" h-2/6 w-full relative rounded-b-[50%] shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]">
                <div
                  style={{ backgroundImage: `url(${themeConfig.background})` }}
                  className="w-full h-full bg-cover rounded-b-[50%]  rounded-t-[2rem]"
                ></div>
                <div className="absolute inset-0 flex justify-center items-end">
                  <div className="relative w-28 h-28 rounded-full mb-[-40px] border-4 border-black shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]">
                    <Image
                      fill
                      style={{ objectFit: "cover", borderRadius: "100%" }}
                      src={themeConfig.imageLink.homeImage}
                      alt="HomeService"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-16 w-full h-full p-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleLayout;
