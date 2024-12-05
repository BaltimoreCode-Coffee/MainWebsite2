import './OrganizerCard.css'

const OrganizerCard = ({organizer}) => {
  return (
    <div className="organizer-card" id = {organizer.id}>
        <div className="organizer-card__top">
            <img 
                src = {organizer.img} 
                alt = {organizer.name}
                className="organizer-card__img" 
            />
        </div>
        <div className="organizer-card__bottom">
            <h3 className="organizer-card__name">
                {organizer.name}
            </h3>
            <p className="organizer__desc">
                {organizer.desc}
            </p>
        </div>
    </div>
  )
}

export default OrganizerCard