import { useState, useEffect } from "react";
import { parseISO, format } from "date-fns";

import { fetchEvents } from "@service/api";
import { Event } from "@types";

/**
 * Custom hook to fetch and filter events by year and month.
 * @param {string} year - The year to filter events by.
 * @param {string} month - The month to filter events by.
 * @return {Object} The state object containing events, loading, and error states.
 */

export const useEvents = (year: string, month: string) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const update = async () => {
      setEvents([]);
      setLoading(true);
      setError(null);

      try {
        const evts = await fetchEvents();

        setEvents(
          evts.filter((evt: Event) => {
            try {
              return format(parseISO(evt.launchDate), "yyyy/M") === `${year}/${month}`;
            } catch (error) {
              console.error(`Error parsing launch date (${evt.launchDate}): ${error}`);

              return false;
            }
          }),
        );
      } catch (error) {
        setError(error as Error);
      }

      setLoading(false);

      // cleanup function to reset state when the component using this hook unmounts or updates
      return () => {
        setEvents([]);
        setLoading(false);
        setError(null);
      };
    };

    update();
  }, [year, month]);

  return { events, loading, error };
};

export default useEvents;
