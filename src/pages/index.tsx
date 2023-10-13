import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/@core/components/button/Button";
import { useCallback, useState } from "react";
import EventComponent from "@/views/first-page/EventComponent";
import EventModal from "../views/first-page/EventModal";
import { Event } from "@/models/event";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dataEvent, setDataEvent] = useState<Event | null>(null);

  return (
    <>
      <EventModal dataEvent={dataEvent} />
      <main className="h-full text-xl grid grid-flow-row auto-rows-max">
        <EventComponent setDataEvent={setDataEvent} />
        <h4 className="text-black mt-10 mb-1 text-center font-semibold">
          โต๊ะว่าง
        </h4>
        <div className="grid grid-cols-3 text-black">
          <div className="cursor-pointer border-2 border-green-500 w-20 h-20 rounded-full  mx-auto flex justify-center items-center hover:scale-105 duration-200">
            <div className="text-center">
              <p>05/10</p>
              <p className="text-sm">หลังมอ</p>
            </div>
          </div>
          <div className=" cursor-pointer border-2 border-red-500 w-20 h-20 rounded-full  mx-auto flex justify-center items-center hover:scale-105 duration-200">
            <div className="text-center">
              <p>07/07</p>
              <p className="text-sm">หลังมอ</p>
            </div>
          </div>
          <div className="cursor-pointer border-2 border-gray-700 w-20 h-20 rounded-full  mx-auto flex justify-center items-center hover:scale-105 duration-200">
            <div className="text-center">
              <p>เร็วๆนี้</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
