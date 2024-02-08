import { useState, useEffect } from "react";

import { fetchEvents } from "@service/api";
import { getYearMonthFromISODate, getDatesInMonthlyView } from "@utils";
import { Event } from "@types";

/**
 * Custom hook to fetch and filter events by year and month.
 * @param {string} year - The year to filter events by.
 * @param {string} month - The month to filter events by.
 * @param {boolean} includesNeighbourDates - Whether to include events from the previous and next months.
 * @return {Object} The state object containing events, loading, and error states.
 */
export const useEvents = (year: string, month: string, includesNeighbourDates: boolean = false) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const update = async () => {
      setEvents([]);
      setLoading(true);
      setError(null);

      try {
        let evts: Event[] = [];

        // Cache events for a minute for better user experience.
        const key = `cached-events-${year}-${month}`;
        const cachedEvts = localStorage.getItem(key);

        if (cachedEvts) {
          evts = JSON.parse(cachedEvts);
        } else {
          evts = await fetchEvents();

          localStorage.setItem(key, JSON.stringify(evts));

          // Remove cached events after 1 minute.
          setTimeout(() => {
            localStorage.removeItem(key);
          }, 60000);
        }

        setEvents(
          evts.filter((evt: Event) => {
            try {
              if (includesNeighbourDates) {
                return getDatesInMonthlyView(year, month).some(
                  (date: Date) =>
                    getYearMonthFromISODate(evt.launchDate) ===
                    getYearMonthFromISODate(date.toISOString()),
                );
              }

              return getYearMonthFromISODate(evt.launchDate) === `${year}/${month}`;
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

      // Cleanup function to reset state when the component using this hook unmounts or updates.
      return () => {
        setEvents([]);
        setLoading(false);
        setError(null);
      };
    };

    update();
  }, [year, month, includesNeighbourDates, setEvents, setLoading, setError]);

  return { events, loading, error };
};

export default useEvents;
