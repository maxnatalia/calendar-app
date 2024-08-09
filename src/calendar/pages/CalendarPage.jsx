import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";
import { localizer, getMessages } from "../../helpers";

import { CalendarEvent, Navbar } from "../";

const events = [
  {
    title: "Cumpleanos del jefe",
    notes: "Hay que comprar un pastel",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: {
      _id: "123",
      name: "Natalia",
    },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347C",
      opacity: 0.8,
      color: "white",
    };

    return { style };
  };
  return (
    <>
      <Navbar />

      <Calendar
        culture="pl"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
      />
    </>
  );
};
