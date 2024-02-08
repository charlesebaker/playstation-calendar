import { useEffect, useMemo, useState } from "react";

import { useWindowWidth } from "@hooks";
import { getWeekDays, getDatesInMonthlyView, findClosestGreaterDivisibleNumber } from "@utils";
import { Event, EventDate } from "@types";
import { EventCell } from "./EventCell";
import { EventDetails } from "./EventDetails";

interface EventsGridProps {
  events: Event[];
  year: string;
  month: string;
}

export const EventsGrid = ({ events, year, month }: EventsGridProps) => {
  const [eventDates, setEventDates] = useState<EventDate[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);
  const [wrappedDateIndex, setWrappedDateIndex] = useState<number>(0);
  const windowWidth = useWindowWidth();

  const datesInMontlyView = useMemo<Date[]>(
    () => getDatesInMonthlyView(year, month),
    [year, month],
  );

  useEffect(() => {
    setWeekDays(getWeekDays(windowWidth > 1024 ? "EEEE" : "EEE"));
  }, [windowWidth]);

  useEffect(() => {
    setEventDates(
      datesInMontlyView.map((date) => {
        const event = events.find((event) => {
          return new Date(event.launchDate).toDateString() === date.toDateString();
        });

        return {
          date,
          event: event ?? null,
          active: date.getMonth() === new Date(`${year}/${month}`).getMonth(),
        };
      }),
    );
  }, [datesInMontlyView, events, year, month]);

  useEffect(() => {
    setWrappedDateIndex(0);
    setSelectedEventIndex(null);
  }, [year, month]);

  const handleClickEvent = (idx: number) => {
    if (idx === selectedEventIndex) {
      setWrappedDateIndex(0);
      setSelectedEventIndex(null);

      return;
    }

    setWrappedDateIndex(findClosestGreaterDivisibleNumber(idx, 7));
    setSelectedEventIndex(idx);
  };

  return (
    <div className="grid grid-cols-7 gap-2 py-8">
      {weekDays.map((day: string) => (
        <div key={day} className="text-center font-semibold">
          {day}
        </div>
      ))}
      {eventDates.slice(0, wrappedDateIndex).map((eventDate, idx) => (
        <EventCell
          key={eventDate.date.toISOString()}
          index={idx}
          eventDate={eventDate}
          handleClickEvent={handleClickEvent}
        />
      ))}
      {selectedEventIndex ? (
        <div className="w-ful col-span-7 h-96 md:h-[420px] lg:h-[480px] xl:h-[540px]">
          <EventDetails event={eventDates[selectedEventIndex].event} />
        </div>
      ) : (
        <></>
      )}
      {eventDates.slice(wrappedDateIndex).map((eventDate, idx) => (
        <EventCell
          key={eventDate.date.toISOString()}
          index={wrappedDateIndex + idx}
          eventDate={eventDate}
          handleClickEvent={handleClickEvent}
        />
      ))}
    </div>
  );
};
