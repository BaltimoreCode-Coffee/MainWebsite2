import regular_meeting from '../../assets/carouselImages/regular_meeting.jpg'
import workshop from '../../assets/carouselImages/workshop.png'
import lightning_talk from '../../assets/carouselImages/lightning_talk.jpg'
import demo_day from '../../assets/carouselImages/demo_day.jpg'
import symposium from '../../assets/carouselImages/symposium_cropped.jpg'

const about_route = '/event-types'//Find more info on the event types page
//@todo : each event route should have a filter that shows events of that type only
const event_route = '/event-calendar'

const Slides = [
    {"image": regular_meeting, "title": "Regular Meetings", "tag": "meetings"}, 
    {"image": demo_day, "title": "Demo Days", "tag": "demo-days"},
    {"image": workshop, "title": "Workshops", "tag": "workshops"},
    {"image": lightning_talk, "title": "Lightning Talks", "tag": "lightning-talks"},
    {"image": symposium, "title": "Symposiums", "tag": "symposiums"}
    
]

export default Slides
