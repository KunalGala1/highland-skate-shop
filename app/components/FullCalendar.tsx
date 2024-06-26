"use client";

// Full calendar https://fullcalendar.io/docs/react
import FullCalendar from "@fullcalendar/react";
// Full calendar plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

// Full calendar css
import "../FullCalendarStyles.css";

interface FullCalendarWrapperProps {
  events: any[];
}

const FullCalendarWrapper: React.FC<FullCalendarWrapperProps> = ({
  events,
}) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, googleCalendarPlugin]}
      initialView="timeGridWeek"
      firstDay={0}
      events={events}
      headerToolbar={{
        left: "prev,next,today",
        center: "title",
        right: "dayGridMonth,timeGridWeek",
      }}
      titleFormat={{
        month: "long",
        year: "numeric",
      }}
      slotLabelFormat={{
        hour: "numeric",
        meridiem: true,
        hour12: true,
      }}
      dayHeaderContent={(arg) => {
        // Format the day of the week (e.g., "SUN")
        const dayOfWeek = arg.date
          .toLocaleDateString("en-US", { weekday: "short" })
          .toUpperCase();

        // Custom function to get the following day of the week
        const getFollowingDayOfWeek = (dateString: string) => {
          const date = new Date(dateString);

          date.setDate(date.getDate() + 1);

          const followingDayOfWeek = date
            .toLocaleDateString("en-US", {
              weekday: "short",
            })
            .toUpperCase();

          return followingDayOfWeek;
        };

        const fixedDayOfWeek = getFollowingDayOfWeek(
          arg.date.toLocaleDateString()
        );

        const dateOfMonth = arg.date.getDate();

        // Check if the current view is the week view
        if (arg.view.type === "timeGridWeek") {
          // Return the custom header content with Tailwind CSS classes for the week view
          return {
            html: `<div class="text-slate-600/80 font-semibold text-[11px] mt-1">${dayOfWeek}</div><div class="text-slate-600/80 sm:text-[26px] text-[13px] mt-1 font-normal">${dateOfMonth}</div>`,
          };
        } else {
          // Return empty content for month view
          return {
            html: `<div class="text-slate-600/80 font-semibold text-[11px] mt-1">${fixedDayOfWeek}</div>`,
          };
        }
      }}
      eventContent={(arg) => {
        if (arg.event.allDay) {
          // Render only the title for all-day events
          return {
            html: `<div class="fc-event-title">${arg.event.title}</div>`,
          };
        }
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
        let endTime = arg.event.end ? formatTime(new Date(arg.event.end)) : "";

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
          <div class="flex items-center w-full text-white sm:text-black rounded month-text py-px px-0.5  sm:p-0">
            <div class="fc-daygrid-event-dot" aria-hidden="true" style="border-color: ${arg.backgroundColor}"></div>
            <div class="fc-event-time">${startTime}</div>
            <div class="fc-event-title">${arg.event.title}</div>
          </div>
          <style>
          .month-text {
            background-color: ${arg.backgroundColor};
          }
          @media (min-width: 640px) {
            .month-text {
              background-color: transparent;
            }
          }
          </style>
        `;
          return { html: monthViewContent };
        }
      }}
    ></FullCalendar>
  );
};

export default FullCalendarWrapper;
