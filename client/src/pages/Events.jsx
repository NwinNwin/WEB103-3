import { useEffect, useState } from "react";
import "../css/Event.css";
import MusicEventsAPI from "../services/MusicEventsAPI";
import Event from "../components/Event";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState("all");

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await MusicEventsAPI.getAllMusicEvents();
      setEvents(response);
    };
    fetchEvents();
  }, []);

  function handleChange(event) {
    setLocation(event.target.value);
  }

  return (
    <div className="location-events">
      <div className="event-selector">
        <select onChange={(event) => handleChange(event)}>
          <option value="all">Check out events at...</option>
          <option value="redrocks">Red Rocks Amphitheatre</option>
          <option value="royalalberthall">Royal Albert Hall</option>
          <option value="staplescenter">Staples Center</option>
          <option value="sydneyoperahouse">Sydney Opera House</option>
        </select>
      </div>
      <main>
        {events
          .filter((event) => {
            if (location === "all") {
              return event;
            }
            if (event.location === location) {
              return event;
            }
            return null; // Return null if no condition is met
          })
          .map((event) => (
            <Event
              key={event.id}
              id={event.id}
              artist={event.artist} 
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))}
      </main>
    </div>
  );
}
