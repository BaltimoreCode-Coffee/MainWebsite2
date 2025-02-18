import './MobileEventsCard.css' 
import { Link } from "react-router-dom";
import route_names  from '../../data_obj/RouteNames'

function MobileEventsCard({content}) {
    console.log('slide content:', content)
    return   ( 
        <div className="mobile-events-card" id={content.id}>
            <h3>{content.title}</h3>
            <img src={content.image} alt={content.title} />
            <div className="buttons">
                <Link to={route_names.event_type}>About</Link>
                <Link to={route_names.event_cal}>View Events</Link>
            </div>
        </div>
     )
}
export default MobileEventsCard;