import EventTypeCard from '../EventTypeCard/EventTypeCard';
import EventTypeData from './EventTypeData'
import "./EventTypes.css";

export default function EventTypes() {
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
