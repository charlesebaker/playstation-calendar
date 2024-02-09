import { Event } from "@types";

export const randomizeDatesOfEvents = (events: Event[], dates: Date[]) => {
  return events.map((evt) => {
    // Generate random index to pick a date from the array.
    const idx = Math.floor(Math.random() * dates.length);

    // Create a new event object with the new launch date.
    const newEvt = {
      ...evt,
      launchDate: dates[idx].toISOString(),
    };

    // Remove the date from the array to avoid reusing it.
    dates.splice(idx, 1);

    return newEvt;
  });
};
