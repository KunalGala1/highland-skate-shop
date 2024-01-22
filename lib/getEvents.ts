import getAccessToken from "./calendar";

export default async function getEvents() {
  const apiUrl = new URL(
    // "https://www.googleapis.com/calendar/v3/calendars/primary/events"
    "https://www.googleapis.com/calendar/v3/calendars/384a95546dccc578044e385e888a3d22838677b09dd50ecf2105484441149e11@group.calendar.google.com/events"
  );

  const res = await fetch(apiUrl, {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getAccessToken()}`,
    },
  });

  const json = await res.json();

  return json;
}
