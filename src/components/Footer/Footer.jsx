import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMeetup,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import logo from "../../assets/whitetranslogo.png";
import EventCalIcon from "../../assets/event_cal_icon.svg";
import EventTypeIcon from "../../assets/event_type_icon.svg";
import route_names from "../../data_obj/RouteNames";


function Footer() {
  const navigate = useNavigate();

 function navigateToEventTypesPage() {
    navigate(route_names.event_type);
  }

  function navigateToEventCalPage() {
    navigate(route_names.event_cal);
  }

  return (
    <footer>
      <section className="top-half">
        <div className="footer-logo-container">
          <img
            src={logo}
            id="footer-logo"
            alt="Baltimore Code and Coffee logo"
          />
          <span className="email">
            <FontAwesomeIcon id="envelope" icon={faEnvelope} />{" "}
            <a href="mailto:bmorecodecoffee@gmail.com"> bmorecodecoffee@gmail.com</a>
          </span>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <Link to={route_names.about_us}>About Us</Link>
            </li>
            <li>
              <DropdownMenu
              className="footer-events"
                buttonId="footerEventsButton"
                menuId="footerEventsMenu"
                buttonTitle="Event"
                menuItems={[
                  {
                    name: "Type of Events",
                    id: "footerEventType",
                    handleClick: navigateToEventTypesPage,
                    icon: EventTypeIcon,
                  },
                  {
                    name: "Event Calendar",
                    id: "footerEventCalendar",
                    handleClick: navigateToEventCalPage,
                    icon: EventCalIcon,
                  },
                ]}
              />
            </li>
            <li>
              <Link to={route_names.blog}>Blog</Link>
            </li>
            <li>
              <a
                href="https://hcb.hackclub.com/donations/start/baltimore-code-and-coffee"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor
              </a>
            </li>
            <li>
              <Link to={route_names.volunteer}>Volunteer</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="bottom-half">
        <p className="copyright">
          © 2024 Baltimore Code and Coffee All rights reserved.
        </p>
        <ul className="social-list">
          <li>
            <a
              href="https://www.linkedin.com/company/baltimore-code-coffee/"
              className="social-button"
            >
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://baltimoretech.slack.com/archives/CTDNSM6EP"
              className="social-button"
            >
              <FontAwesomeIcon className="social-icon" icon={faSlack} />
            </a>
          </li>
          <li>
            <a
              href="https://www.meetup.com/baltimore-code-and-coffee"
              className="social-button"
            >
              <FontAwesomeIcon className="social-icon" icon={faMeetup} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;