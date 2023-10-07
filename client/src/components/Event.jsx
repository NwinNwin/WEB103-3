import React, { useState, useEffect } from "react";
import "../css/Event.css";

const Event = (props) => {
  const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    const configureRemaining = () => {
      const today = new Date();
      const eventDate = new Date(props.date);
      const diffInMs = eventDate - today;
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      setRemaining(diffInDays);
    };
    configureRemaining();
  }, [props.date]);

  return (
    <article className="event-information">
      <img src={props.image} alt={`${props.artist} event`} />{" "}
      {/* Updated alt text */}
      <div className="event-information-overlay">
        <div className="text">
          <h3>{props.artist}</h3> 
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {props.date}{" "}
            <br /> {props.time}
          </p>
          <p id={`remaining-${props.id}`}>{remaining} Days</p>
        </div>
      </div>
    </article>
  );
};

export default Event;
