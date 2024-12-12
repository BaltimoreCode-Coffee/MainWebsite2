import regular_meeting from '../../assets/carouselImages/regular_meeting.jpg'
import workshop from '../../assets/carouselImages/workshop.png'
import lightning_talk from '../../assets/carouselImages/lightning_talk.jpg'
import demo_day from '../../assets/carouselImages/demo_day.jpg'
import symposium from '../../assets/carouselImages/symposium.jpg'

const about_route = '/event-types'//Find more info on the event types page
//@todo : each event route should have a filter that shows events of that type only
const event_route = '/event-calendar'

const Slides = [
    {"image": regular_meeting, "title": "Regular Meetings"}, 
    {"image": demo_day, "title": "Demo Days"},
    {"image": workshop, "title": "Workshops"},
    {"image": lightning_talk, "title": "Lightning Talks"},
    {"image": symposium, "title": "Symposiums"}
    
]

export default Slides
