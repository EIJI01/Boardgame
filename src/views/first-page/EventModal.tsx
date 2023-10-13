import Modal from "@/@core/components/modal/Modal";
import useEventModal from "@/@core/hook/useEventModal";
import React from "react";
import { EventModalProps } from "./type";

const EventModal = ({ dataEvent }: EventModalProps) => {
  const eventModal = useEventModal();
  const body = (
    <div className="w-full h-auto mx-auto grid grid-flow-row auto-rows-max gap-4 mb-5">
      <img src={dataEvent?.image} alt="..." />
      <p className="text-black text-sm text-center font-semibold">
        {dataEvent?.details}
      </p>
    </div>
  );
  return (
    <Modal
      isOpen={eventModal.isOpen}
      onClose={eventModal.onClose}
      body={body}
      header={dataEvent?.title}
    />
  );
};

export default EventModal;
