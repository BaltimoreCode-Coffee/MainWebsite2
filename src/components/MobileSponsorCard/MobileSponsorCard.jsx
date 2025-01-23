import './MobileSponsorCard.css' 

function MobileSponsorCard({content}) {
    return   ( 
        <div className="mobile-sponsor-card" id={content.id}>
            <img src={content.image_url} className="mobile-sponsor-card__logo" />
            <h3>{content.name}</h3>
            <p>{content.description}</p>
            {/* <div className="mobile-sponsor-card__top">
                
            </div>
            <div className="mobile-sponsor-card__bottom">
                
                <p>{content.description}</p>
            </div> */}
        </div>
     )
    
}
export default MobileSponsorCard;