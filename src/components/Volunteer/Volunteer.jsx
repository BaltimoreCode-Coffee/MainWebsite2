import "./Volunteer.css";
import collage from "../../assets/volunteer_collage.png";
import { Link } from "react-router-dom";

export default function Volunteer() {
  // const collage = "../../assets/volunteer_collage.png";

  return <section className="volunteer">
  
    <h1 className="volunteer">Make Your Mark</h1>
    <div className="volunteer_top">
      <p>Play an active role in Baltimore’s rise as a tech hub by joining our volunteer team!</p>
   
    </div>
   
    <img src={collage} className="collage"/>

    <div className="volunteer_bottom">
      <p>If you’re passionate about coding and looking to increase your involvement in the 
        tech community, becoming a volunteer at Code Coffee might be for you. 
        <br /> <br /> As a volunteer, you’ll have the opportunity to turn your technical skills into leadership skills, and 
        contribute to maintaining a vibrant tech ecosystem. Join us today and be a part of 
        something meaningful!</p>
    </div>

    <button className="volunteer button"> <Link to="https://forms.gle/1TGsVjN8LLFPm8eH9"> Volunteer</Link></button>

  </section>;
}
