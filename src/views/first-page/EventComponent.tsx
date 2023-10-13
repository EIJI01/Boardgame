import mockEvent from "@/models/mock/event";
import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
import { EventComponentsProps } from "./type";
import { Event } from "@/models/event";
import useEventModal from "@/@core/hook/useEventModal";

const EventComponent = ({ setDataEvent }: EventComponentsProps) => {
  const [current, setCurrent] = useState<number>(0);
  const setAutoSlide = false;
  const handleArrowLeft = useCallback(() => {
    setCurrent((current) =>
      current === 0 ? mockEvent().length - 1 : current - 1
    );
  }, [setCurrent]);

  const handleArrowRight = useCallback(() => {
    setCurrent((current) =>
      current === mockEvent().length - 1 ? 0 : current + 1
    );
  }, [setCurrent]);
  const circleSlide = useCallback(
    (i: number) => {
      setCurrent(i);
    },
    [setCurrent]
  );

  useEffect(() => {
    if (!setAutoSlide) return;
    const interval = setInterval(() => {
      handleArrowRight();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);
  const eventModal = useEventModal();
  const handleCilckEvent = useCallback(
    (data: Event) => {
      setDataEvent(data);
      eventModal.onOpen();
    },
    [setDataEvent, eventModal]
  );
  return (
    <>
      <div className="h-52 bg-black/20 flex justify-center items-center rounded-box overflow-hidden relative shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] border-y-4 border-green-500">
        <div className="flex">
          {mockEvent().map((data, index) => (
            <img
              key={index}
              src={data.image}
              alt="..."
              style={{ transform: `translateX(-${current * 100}%)` }}
              className="w-full h-auto object-cover object-center transition-transform ease-out duration-1000"
              onClick={() => handleCilckEvent(data)}
            />
          ))}
        </div>
      </div>
      {/* <div className="w-full h-[200px] carousel rounded-box mx-auto">
        {mockEvent().map((data, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={data.image}
              alt="..."
              style={{ transform: `translateX(-${current * 100}%)` }}
              className="w-full h-auto object-cover object-center transition-transform ease-out duration-1000"
              onClick={() => handleCilckEvent(data)}
            />
          </div>
        ))}
      </div> */}
      <div className="flex justify-between items-center group rounded-lg mt-2">
        <div
          className="text-white/50 bg-black/30 rounded-sm  group-hover:flex justify-center items-center hover:text-black/90 hover:bg-white cursor-pointer"
          onClick={handleArrowLeft}
        >
          <BsFillArrowLeftSquareFill size={30} />
        </div>
        <div className="flex items-center justify-center gap-2">
          {mockEvent().map((_, i) => (
            <div
              key={i}
              onClick={() => circleSlide(i)}
              className={`transition-all w-2 h-2 bg-gray-600 rounded-full ${
                current === i ? "scale-150 duration-500" : "bg-opacity-50"
              } hover:scale-150 cursor-pointer duration-100 hover:bg-opacity-100 ease-linear`}
            ></div>
          ))}
        </div>
        <div
          className="text-white/50 bg-black/30 rounded-sm  group-hover:flex justify-center items-center hover:text-black/90 hover:bg-white cursor-pointer"
          onClick={handleArrowRight}
        >
          <BsFillArrowRightSquareFill size={30} />
        </div>
      </div>
    </>
  );
};

export default EventComponent;
