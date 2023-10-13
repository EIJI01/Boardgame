import React, { useCallback } from "react";
import { ModalProps } from "../type";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, body, header }: ModalProps) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);
  if (!isOpen) return;
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-10 backdrop-blur-md">
      <div className="bg-white h-auto w-5/6 mx-auto p-5  rounded-lg">
        <div className="w-full text-black flex justify-between items-center hover:text-opacity-50 cursor-pointer mb-5">
          <div className="text-black text-lg font-bold">{header}</div>
          <AiOutlineClose size={30} onClick={handleClose} />
        </div>
        {body}
      </div>
    </div>
  );
};

export default Modal;
