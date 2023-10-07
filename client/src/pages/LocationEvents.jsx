import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import MusicLocationsAPI from "../services/MusicLocationsAPI";
import MusicEventsAPI from "../services/MusicEventsAPI";
import "../css/LocationEvents.css";

const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchLocation = async () => {
      const data = await MusicLocationsAPI.getAllLocations();
      setLocation(data[index]);
    };

    const fetchEvents = async () => {
      const data = await MusicEventsAPI.getMusicEventsByLocation(index);
      setEvents(data);
    };

    fetchLocation();
    fetchEvents();
  }, [index]); // Include index in the dependency array to refetch data when index changes

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          <img src={location.image} alt={`${location.name} venue`} />
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>
            {location.address}, {location.city}, {location.state} {location.zip}
          </p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event, index) => (
            <Event
              key={event.id}
              id={event.id}
              artist={event.artist} 
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i>{" "}
            {"No events scheduled at this location yet!"}
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
