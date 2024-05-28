import FullCalendarWrapper from "@/app/components/FullCalendar";

import getEvents from "@/lib/getEvents";

async function getData() {
  const events = await getEvents();
  return events;
}

const CalendarPage = async () => {
  const events = await getData();
  console.log("🚀 ~ CalendarPage ~ events:", events);

  return (
    <section className="sm:p-8">
      <FullCalendarWrapper events={events} />
    </section>
  );
};
export default CalendarPage;
