import { useLocation } from 'react-router-dom';
import EventTypeCard from '../EventTypeCard/EventTypeCard';
import EventTypeData from './EventTypeData'
import "./EventTypes.css";
import { useEffect } from 'react';

export default function EventTypes() {
  const location = useLocation(); // Get the current URL

  useEffect(() => {
    if (location.pathname.startsWith('/event-types/')) {
      const tag = location.pathname.split('/').pop(); // Extract tag from URL
      const element = document.getElementById(tag);
      if (element) {
        element.scrollIntoView({behavior: 'instant'});
      }
    }
  }, [location]);

  return(
    <div className="event-types__container">
      <div className="event-types__header">
        <h1>Explore Our Diverse Range of Events</h1>
      </div>
      <div className="event-types__cards">
        {EventTypeData.map((eventType) => {
            return <EventTypeCard eventType={eventType} key={eventType.id} />;
          })}
      </div>
    </div>
  )
}
