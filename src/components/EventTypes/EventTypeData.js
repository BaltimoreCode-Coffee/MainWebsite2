import lightningTalk from '../../assets/carouselImages/lightning_talk.jpg'
import symposium from '../../assets/carouselImages/symposium.jpg'
import regularMeeting from '../../assets/carouselImages/regular_meeting.png'
import workshop from '../../assets/carouselImages/workshop.png'
import demoDay from '../../assets/carouselImages/demo_day.jpg'

const EventTypeData = [
    {
        name: "Lightning Talks",
        description: "In our lighting talks, speakers present for 10 minutes on a topic of interest ranging from innovation, software, education, design, art, & architecture etc — with the underlying theme of technology. At the end of each talk the floor is open for you to ask questions and have a dialogue with the speakers as well as with the crowd. The talks form a fast paced and energetic scene, where you can laugh, learn and leave inspired.",
        img: lightningTalk,
        btnTxt: 'Sign Up',
        link: '/event-types',
        id: "lightning-talk-card"
    },
    {
        name: "Symposiums",
        description: "Our symposium panel is a conversation among four experts from various fields and backgrounds around a central topic. The panel is split into two groups, one in favor of the topic of interest, the other against . To start the discussion, each panelist will give a 3 minute max opener making a case for the opposing side. After this we have 2 30-40 minute rounds of discussion, with a 15 minute intermission & time for questions during the second round.",
        img: symposium,
        btnTxt: 'Sign Up',
        link: '/event-types',
        id: "symposium-card"
    },
    {
        name: "Regular Meetings",
        description: "Welcome to the stomping ground of coders across the city! Beginners, professionals, students, hobbyists— All are welcome. Bring your work, project, questions, or just bring you. Enjoy the  fresh coffee and donuts and flowing conversation.",
        img: regularMeeting,
        btnTxt: 'View Events',
        link: '/event-calendar',
        id: "regular-meeting-card"
    },
    {
        name: "Workshops",
        description: "Our workshops are a fun,  hands on, introduction to various topics in CS and adjacent fields. Typically participants just need two prerequisites: A laptop and enthusiasm! We’ve had workshops ranging from the use of GIT in open source and communication skills for developers.",
        img: workshop,
        btnTxt: 'Sign Up',
        link: '/event-types',
        id: "workshop-card"
    },
    {
        name: "Demo Days",
        description: "Demo day is a chance for talented folks in the community to show off their hard work. Cool projects of various kinds, software, hardware (or both) are welcome. At the end, we vote for the best project!",
        img: demoDay,
        btnTxt: 'Sign Up',
        link: '/event-types',
        id: "demo-day-card"
    },
]

export default EventTypeData