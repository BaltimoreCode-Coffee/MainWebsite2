import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faLinkedin,
  faSlack
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <span className="email"><a href="">bmorecodecoffee@gmail.com</a></span>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/resources">Volunteer</Link>
          </li>
          </ul>
      </div>
      {/* <div className="menus">
      <div className="mini-menu" id="events">
        <h4>Event</h4>
        <ul>
          <li>Placeholder</li>
          <li>Placeholder</li>  
        </ul>
      </div>
      <div className="mini-menu" id="resources">
        <h4>About Us</h4>
        <ul>
          <li>Our Story</li>
          <li>Our Works</li>
        </ul>
      </div>
        <div className="mini-menu" id="Volunteer">
            <h4>Volunteer</h4>
            <ul>
                <li>FAQs</li>
                <li>Join us</li>
            </ul>
        </div> 
      </div> */}
      
        
      <div className="bottom-half"> 
        <p className="copyright">© 2024 Baltimore Code and Coffee All rights reserved.</p>
        <ul className="social-list">
          <li>
            {" "}
            <a href="https://www.linkedin.com/company/baltimore-code-coffee/"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
          </li>
          <li>
            {" "}
            <a href="https://baltimoretech.slack.com/archives/CTDNSM6EP"><FontAwesomeIcon className="social-icon" icon={faSlack} /></a>
          </li>  
          <li>
            {" "}
            <a href="https://www.meetup.com/baltimore-code-and-coffee"><FontAwesomeIcon className="social-icon" icon={faMeetup} /></a>
          </li>
        </ul>
      </div>
     
    </footer>
  );
}

export default Footer;
