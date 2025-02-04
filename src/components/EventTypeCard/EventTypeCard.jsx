import { Link } from 'react-router-dom'
import './EventTypeCard.css'
import { useEffect, useState } from 'react'

const EventTypeCard = ({eventType}) => {
    const [isMobile, setIsMobile] = useState(false)

    // Determine screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches)
        }

        handleResize() // Initial check for window size
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize) // Cleanup
        }
    }, [])

    // Set the background image based on the window size
    const backgroundImage = isMobile
        ? null
        : eventType.img

    return (
        <div 
            className="EventTypeCard"
            id={eventType.id}
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="EventTypeCard__container">
                <div className="EventTypeCard__title-container">
                    <div className="EventTypeCard__title">
                        <p>{eventType.name}</p>
                    </div>
                </div>

                <div className="EventTypeCard__btn-container">
                    <button className="EventTypeCard__btn">
                        <Link to = {eventType.link}>{eventType.btnTxt}</Link>
                    </button>
                </div>
                
                <div className="EventTypeCard__description">
                    <p>{eventType.description}</p>
                </div>
                
            </div>
        </div>
    )
}

export default EventTypeCard