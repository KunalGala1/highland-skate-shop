import FullCalendarWrapper from "@/app/components/FullCalendar";

// Fetch calendar events on server
async function getData() {
  const res = await fetch("/api/calendar", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

const CalendarPage = async () => {
  const data = await getData();
  const events = data.data;
  console.log("🚀 ~ CalendarPage ~ events:", events);

  return (
    <section className="sm:p-8">
      <FullCalendarWrapper events={events} />
    </section>
  );
};
export default CalendarPage;
