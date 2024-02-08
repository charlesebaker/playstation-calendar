import { twMerge } from "tailwind-merge";

import { EventDate } from "@types";

interface EventCellProps {
  index: number;
  eventDate: EventDate;
  handleClickEvent: (idx: number) => void;
}

export const EventCell = ({ index, eventDate, handleClickEvent }: EventCellProps) => {
  const handleViewDetails = () => {
    if (eventDate.event && eventDate.active) {
      handleClickEvent(index);
    }
  };

  return (
    <div className="aspect-square w-full" onClick={handleViewDetails}>
      <div
        className={twMerge(
          "relative h-full",
          eventDate.event ? "" : "shadow-md",
          eventDate.active ? "bg-white" : "bg-gray-100",
          eventDate.event && eventDate.active ? "cursor-pointer" : "cursor-default",
        )}
      >
        {eventDate.event && (
          <img
            src={`/assets/${eventDate.event.imageFilenameThumb}.webp`}
            alt={eventDate.event.title}
            className="h-full w-full"
          />
        )}
        <span
          className={twMerge(
            "absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full font-semibold",
            eventDate.active && eventDate.event ? "bg-blue-600 text-gray-100" : "",
            eventDate.active && !eventDate.event ? "bg-transparent text-black" : "",
            !eventDate.active && eventDate.event ? "bg-blue-500 text-gray-200" : "",
            !eventDate.active && !eventDate.event ? "text-gray-600" : "",
          )}
        >
          {eventDate.date.getDate()}
        </span>
      </div>
    </div>
  );
};
