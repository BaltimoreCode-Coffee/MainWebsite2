import "./Volunteer.css";
import collage from "../../assets/volunteer_collage.png";

export default function Volunteer() {
  // const collage = "../../assets/volunteer_collage.png";

  return <section className="volunteer">
  
    <h1 className="volunteer">Make Your Mark</h1>
    <div className="volunteer_top">
      <h2 className="volunteer">Play an active role in Baltimore’s rise as a tech hub</h2>
      <h2 className="volunteer">by joining our volunteer team!</h2>
    </div>

    <img src={collage} className="volunteer collage"/>

    <div className="volunteer_bottom">
      <h2 className="">If you’re passionate about coding and looking to increase your involvement in the 
        tech community, becoming a volunteer at Code Coffee might be for you. As a volunteer, 
        you’ll have the opportunity to turn your technical skills into leadership skills, and 
        contribute to maintaining a vibrant tech ecosystem. Join us today and be a part of 
        something meaningful!</h2>
    </div>

    <button className="volunteer button">Volunteer</button>

  </section>;
}
