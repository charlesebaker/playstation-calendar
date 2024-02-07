const API_URL =
  import.meta.env.VITE_API_URL || 'https://amock.io/api/CharlesBake/playstation/events';

export const fetchEvents = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      console.error('Network response of fetching events was not ok.');

      throw new Error('Failed to fetch events.');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Error fetching events: ${error}`);

    throw new Error('Failed to fetch events.');
  }
};
