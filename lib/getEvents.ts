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
  backgroundColor?: string;
  textColor?: string;
  allDay?: boolean;
}

export default async function getEvents(): Promise<EventWithColor[]> {
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

  // Construct the events URL with environment variable for calendar ID
  const eventsUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR_ID}/events?singleEvents=true&timeMin=${timeMin}&timeMax=${timeMax}`;

  // Fetch events safely
  const eventsResponse = await fetchEventsWithSafety(new URL(eventsUrl));
  if (!eventsResponse) return []; // Early return if fetching events failed

  // Fetch colors safely
  const colorsUrl = new URL("https://www.googleapis.com/calendar/v3/colors");
  const colorsResponse = await fetchColorsWithSafety(colorsUrl);
  if (!colorsResponse) return []; // Early return if fetching colors failed

  // Map colorId to actual colors
  const formattedEvents: EventWithColor[] = eventsResponse.items.map(
    (event: Event) => {
      const isAllDay = event.start.date && !event.start.dateTime;
      return {
        id: event.id,
        title: event.summary || "No Title",
        start: event.start.date || event.start.dateTime,
        end: event.end.date || event.end.dateTime,
        allDay: !!isAllDay,
        backgroundColor: event.colorId
          ? colorsResponse.event[event.colorId].background
          : "rgb(0, 134, 120)",
        textColor: "white",
      };
    }
  );

  return formattedEvents;
}

async function fetchEventsWithSafety(
  eventsUrl: URL
): Promise<{ items: Event[] } | null> {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) throw new Error("Failed to retrieve access token");

    const response = await fetch(eventsUrl.toString(), {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return null;
  }
}

async function fetchColorsWithSafety(
  colorsUrl: URL
): Promise<ColorsResponse | null> {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) throw new Error("Failed to retrieve access token");

    const response = await fetch(colorsUrl.toString(), {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching colors:", error);
    return null;
  }
}
