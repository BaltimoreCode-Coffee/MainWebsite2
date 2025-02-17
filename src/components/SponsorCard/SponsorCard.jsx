import "./SponsorCard.css";

function SponsorCard({ sponsor }) {
  return (
    <div className="sponsor-card" id={sponsor.id}>
      <div className="sponsor-card__top">
        <img src={sponsor.image_url} className="sponsor-card__logo" />
      </div>
      <div className="sponsor-card__bottom">
        <a href={sponsor.website} target="_blank">
          <h3 className="sponsor-card__link">{sponsor.name}</h3>
        </a>
        <p>{sponsor.description}</p>
      </div>
    </div>
  );
}

export default SponsorCard;
