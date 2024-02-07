import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useEvents } from "@hooks";
import { isValidYearMonth, getCurrentYearMonth } from "@utils";
import { Event } from "@types";

export const Calendar = () => {
  const { year, month } = useParams<{ year: string; month: string }>();
  const navigate = useNavigate();
  const { events, loading, error } = useEvents(year, month);

  useEffect(() => {
    if (!isValidYearMonth(year, month)) {
      navigate(`/${getCurrentYearMonth()}`);

      toast.error("Invalid year or month. Redirected to current year and month.");
    }
  }, [year, month, navigate]);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error fetching events: {error.message}</div>;

  return (
    <div>
      <h2>
        Events for {month}/{year}
      </h2>
      <ul>
        {events.map((event: Event) => (
          <li key={event.id}>
            {event.imageFilenameFull} - {event.launchDate}
          </li>
        ))}
      </ul>
    </div>
  );
};
