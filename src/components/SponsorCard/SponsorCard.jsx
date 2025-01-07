import './SponsorCard.css' 

function SponsorCard({sponsor}) {
    return ( 
        <div className="sponsor-card" id={sponsor.id}>
            <div className="sponsor-card__top">
                <img src={sponsor.image_url} className="sponsor-card__logo" />
            </div>
            <div className="sponsor-card__bottom">
                <h3>{sponsor.name}</h3>
                <p>{sponsor.description}</p>
            </div>
        </div>
     );
}

export default SponsorCard;