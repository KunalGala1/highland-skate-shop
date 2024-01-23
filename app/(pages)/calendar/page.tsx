"use client";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
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

        setEvents(data.data);
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
        plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
        initialView="timeGridWeek"
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        dayHeaderContent={(arg) => {
          // Format the day of the week (e.g., "SUN")
          const dayOfWeek = arg.date
            .toLocaleDateString("en-US", { weekday: "short" })
            .toUpperCase();
          // Check if the current view is the week view
          if (arg.view.type === "timeGridWeek") {
            // Format the date of the month (e.g., "21")
            const dateOfMonth = arg.date.getDate();

            // Return the custom header content with Tailwind CSS classes for the week view
            return {
              html: `<div class="text-slate-600/80 font-semibold text-[11px] mt-1">${dayOfWeek}</div><div class="text-slate-600/80 text-[26px] mt-1 font-normal">${dateOfMonth}</div>`,
            };
          } else {
            // Return empty content for month view
            return {
              html: `<div class="text-slate-600/80 font-semibold text-[11px] mt-1">${dayOfWeek}</div>`,
            };
          }
        }}
        eventContent={(arg) => {
          // Custom function to format time
          const formatTime = (date: Date): string => {
            if (!date) return "";

            let hours = date.getHours();
            let minutes = date.getMinutes(); // minutes is a number
            let ampm = hours >= 12 ? "pm" : "am";

            hours = hours % 12;
            hours = hours || 12; // the hour '0' should be '12'

            let minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();
            let strTime = minutes === 0 ? `${hours}` : `${hours}:${minutesStr}`;

            return strTime + ampm;
          };

          let startTime = arg.event.start
            ? formatTime(new Date(arg.event.start))
            : "";
          let endTime = arg.event.end
            ? formatTime(new Date(arg.event.end))
            : "";

          // Week view formatting
          if (arg.view.type === "timeGridWeek") {
            // Week view formatting
            if (startTime && endTime) {
              startTime = startTime.replace(/am|pm/, "");
            }
            let timeText =
              startTime && endTime ? `${startTime} - ${endTime}` : "";

            let weekViewContent = `
              <div class="fc-event-main">
                <div class="fc-event-title">${arg.event.title}</div>
                <div class="fc-event-time">${timeText}</div>
              </div>
            `;
            return { html: weekViewContent };
          }

          // Month view formatting
          if (arg.view.type === "dayGridMonth") {
            let monthViewContent = `
              <div class="fc-daygrid-event-dot" aria-hidden="true" style="border-color: ${arg.backgroundColor}"></div>
              <div class="fc-event-time">${startTime}</div>
              <div class="fc-event-title">${arg.event.title}</div>
            `;
            return { html: monthViewContent };
          }
        }}
      ></FullCalendar>

      {/* <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
        initialView="timeGridWeek"
        googleCalendarApiKey="AIzaSyDBST1zTpZkzSuhvDcQCI4vlg1CYMyFWjQ"
        events={{
          googleCalendarId:
            "384a95546dccc578044e385e888a3d22838677b09dd50ecf2105484441149e11@group.calendar.google.com",
          color: "defaultColor", // A default color if the Google Calendar event doesn't specify one
          textColor: "defaultTextColor", // Default text color
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        eventClick={(info) => {
          info.jsEvent.preventDefault();
        }}
        eventContent={(arg) => {
          // Custom function to format time
          const formatTime = (date: Date): string => {
            if (!date) return "";

            let hours = date.getHours();
            let minutes = date.getMinutes(); // minutes is a number
            let ampm = hours >= 12 ? "pm" : "am";

            hours = hours % 12;
            hours = hours || 12; // the hour '0' should be '12'

            let minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();
            let strTime = minutes === 0 ? `${hours}` : `${hours}:${minutesStr}`;

            return strTime + ampm;
          };

          let startTime = arg.event.start
            ? formatTime(new Date(arg.event.start))
            : "";
          let endTime = arg.event.end
            ? formatTime(new Date(arg.event.end))
            : "";

          // Month view formatting
          if (arg.view.type === "dayGridMonth") {
            let monthViewContent = `
              <div class="fc-daygrid-event-dot" aria-hidden="true"></div>
              <div class="fc-event-time">${startTime}</div>
              <div class="fc-event-title">${arg.event.title}</div>
            `;
            return { html: monthViewContent };
          }

          // Week view formatting
          if (startTime && endTime) {
            startTime = startTime.replace(/am|pm/, "");
          }
          let timeText =
            startTime && endTime ? `${startTime} - ${endTime}` : "";
          let eventColor = arg.event.extendedProps.color || "";
          let style = { backgroundColor: eventColor, borderColor: eventColor };

          let weekViewContent = `
            <div class="fc-event-main" style="background-color: ${style.backgroundColor}; border-color: ${style.borderColor};">
              ${arg.event.title} <br>
              <span class="fc-event-time">${timeText}</span>
            </div>
          `;
          return { html: weekViewContent };
        }}
      ></FullCalendar> */}
    </section>
  );
};
export default CalendarPage;
