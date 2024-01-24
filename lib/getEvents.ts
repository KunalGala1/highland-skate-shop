import getAccessToken from "./calendar";

// Define types for the event and color data structures
interface Event {
  colorId?: string;
  [key: string]: any; // Additional properties of the event
}

interface Color {
  background: string;
  foreground: string;
}

interface ColorsResponse {
  kind: string;
  updated: string;
  calendar: { [key: string]: Color };
  event: { [key: string]: Color };
}

interface EventWithColor extends Event {
  color?: Color;
}

export default async function getEvents(): Promise<EventWithColor[]> {
  // Assuming you want to fetch events from 3 years in the past to 3 years in the future
  const yearsRange = 1;
  const currentDate = new Date();
  const timeMin = new Date(
    currentDate.getFullYear() - yearsRange,
    currentDate.getMonth(),
    currentDate.getDate()
  ).toISOString();
  const timeMax = new Date(
    currentDate.getFullYear() + yearsRange,
    currentDate.getMonth(),
    currentDate.getDate()
  ).toISOString();

  // Step 1: Get events from your calendar
  const eventsUrl = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/384a95546dccc578044e385e888a3d22838677b09dd50ecf2105484441149e11@group.calendar.google.com/events?singleEvents=true&timeMin=${timeMin}&timeMax=${timeMax}`
  );
  const eventsRes = await fetch(eventsUrl.toString(), {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getAccessToken()}`,
    },
  });
  const eventsJson = await eventsRes.json();
  console.log(eventsJson);

  // Step 2: Get color definitions
  const colorsUrl = new URL("https://www.googleapis.com/calendar/v3/colors");
  const colorsRes = await fetch(colorsUrl.toString(), {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getAccessToken()}`,
    },
  });
  const colorsJson: ColorsResponse = await colorsRes.json();

  // Step 3: Map colorId to actual colors and format for FullCalendar
  const formattedEvents: EventWithColor[] = eventsJson.items.map(
    (event: Event) => {
      const isAllDay = event.start.date && !event.start.dateTime;
      return {
        id: event.id,
        title: event.summary, // 'summary' from Google Calendar event is the 'title' in FullCalendar
        start: event.start.dateTime || event.start.date, // Use dateTime for timed events and date for all-day events
        end: event.end.dateTime || event.end.date, // Similarly for end time
        allDay: isAllDay, // Set allDay to true for all-day events
        backgroundColor: event.colorId
          ? colorsJson.event[event.colorId].background
          : undefined,
        textColor: "white",
        // ... include other properties from the event that you might need
      };
    }
  );

  return formattedEvents;
}
