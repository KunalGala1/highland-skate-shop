"use client";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "../../FullCalendarStyles.css";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/calendar", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        setEvents(data.data.items);
      } catch (error) {
        // Handle error here
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <section className="p-8">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
      ></FullCalendar>
    </section>
  );
};
export default CalendarPage;
