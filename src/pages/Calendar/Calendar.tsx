import { useParams } from 'react-router-dom';

import { useEvents } from '@hooks';
import { Event } from '@types';

export const Calendar = () => {
  const { year, month } = useParams<{ year: string; month: string }>();
  const { events, loading, error } = useEvents(year, month);

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
