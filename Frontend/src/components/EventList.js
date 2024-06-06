import  { useState, useEffect } from "react";
import "./style/EventList.css";
import EventCard from "./EventCard.js";
import Navigation from "./Navigation.js";
import "./style/Navigation.css";

const EventList = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/details"); 
      const data = await response.json();
      setEventList(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      );
    });
  };

  return (
    <div>
      <Navigation />
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventList;
