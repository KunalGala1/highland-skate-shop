const CalendarPage = () => {
  return (
    <>
      <section>
        <div>
          <iframe
            src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f957f6&ctz=America%2FLos_Angeles&showTz=0&showCalendars=0&showPrint=0&src=YjA3ODBjODgzMGRmYzY5YzcxYTAwZjM1OGNkOTI5OGM4NTZjNTIwYjIxMGIxNWZkNjgyZGY3NTk5YTI4NGNjN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5'
            width='800'
            height='600'
            className='w-full relative z-10 min-h-screen'
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default CalendarPage;
