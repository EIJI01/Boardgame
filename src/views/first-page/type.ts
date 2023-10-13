import { Event } from "@/models/event";

export type EventComponentsProps = {
  setDataEvent: (dataEvent: Event) => void;
};

export type EventModalProps = {
  dataEvent: Event | null;
};
