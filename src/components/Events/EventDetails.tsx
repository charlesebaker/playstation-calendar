import { format as formatDate } from "date-fns";

import { ButtonLink } from "@components";
import { Event } from "@types";

interface EventDetailsProps {
  event: Event;
}

export const EventDetails = ({ event }: EventDetailsProps) => {
  return (
    <div className="relative h-full transition-opacity duration-1000 ease-in-out">
      <img
        src={`/assets/${event.imageFilenameFull}.webp`}
        alt={event.title}
        className="absolute z-[-1] h-full w-full object-cover"
      />
      <div className="flex h-full w-3/4 flex-col justify-center gap-4 px-8 py-4 md:w-3/4 md:gap-6 md:px-16 md:py-6 lg:gap-8 lg:px-24 lg:py-8 xl:w-1/2 xl:px-32">
        <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">{event.title}</h1>
        <summary className="text-normal list-none text-pretty text-gray-300 md:text-lg">
          {event.summary}
        </summary>
        <p className="text-normal font-bold text-gray-200 md:text-lg">
          Available {formatDate(event.launchDate, "MMMM do yyy")}
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <ButtonLink
            to={event.learnMoreLink}
            className="rounded-3xl bg-blue-500 font-semibold text-gray-200 md:text-lg"
          >
            Learn More
          </ButtonLink>
          <ButtonLink
            to={event.purchaseLink}
            className="rounded-3xl bg-orange-700 font-semibold text-gray-200 md:text-lg"
          >
            Pre Order Now
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
