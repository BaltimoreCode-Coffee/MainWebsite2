// src/components/Navbar/Navbar.jsx
import "../DropdownMenu/DropdownMenu";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import logo from "../../assets/BCC_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import EventCalIcon from "../../assets/event_cal_icon.svg";
import EventTypeIcon from "../../assets/event_type_icon.svg";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenuDisplay() {
    if (window.innerWidth < 650) {
      setIsMobileMenuOpen(true);
    } else {
      setIsMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    toggleMenuDisplay();
    window.addEventListener("resize", toggleMenuDisplay);

    return () => {
      window.removeEventListener("resize", toggleMenuDisplay);
    };
  }, []);

  function navigateToEventTypesPage() {
    navigate("/event-types");
  }

  function navigateToEventCalPage() {
    navigate("/event-calendar");
  }

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="BCC logo" className="navbar__icon" />
      </Link>
      {!isMobileMenuOpen && (
        <ul className="navbar__desktop-menu">
          <li className="navbar__desktop-menu-item">
            <DropdownMenu
              buttonId="navEventsButton"
              menuId="navEventsMenu"
              buttonTitle="Event"
              menuItems={[
                {
                  name: "Type of Events",
                  id: "eventType",
                  handleClick: navigateToEventTypesPage,
                  icon: EventTypeIcon,
                },
                {
                  name: "Event Calendar",
                  id: "eventCalendar",
                  handleClick: navigateToEventCalPage,
                  icon: EventCalIcon,
                },
              ]}
            />
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to="/about-us">
              About Us
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link
              className="navbar__link"
              to="https://hcb.hackclub.com/donations/start/baltimore-code-and-coffee"
              target="blank"
            >
              Sponsor
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to="/volunteer">
              Volunteer
            </Link>
          </li>
        </ul>
      )}
      {isMobileMenuOpen && (
        <DropdownMenu
          buttonId="mobileNavEventsButton"
          menuId="mobileNavEventsMenu"
          buttonIcon={<MenuIcon fontSize="large" />}
          menuItems={[
            {
              name: "Event",
              id: "mobileEventBtn",
              disabled: true,
            },
            {
              name: "Type of Events",
              id: "mobileEventTypeBtn",
              handleClick: () => {
                navigate("/event-types");
              },
              icon: EventTypeIcon,
            },
            {
              name: "Event Calendar",
              id: "mobileEventCalBtn",
              handleClick: () => {
                navigate("/event-calendar");
              },
              icon: EventCalIcon,
            },
            {
              name: "About Us",
              id: "mobileAboutUsBtn",
              handleClick: () => {
                navigate("/about-us");
              },
            },
            {
              name: "Blog",
              id: "mobileBlogBtn",
              handleClick: () => {
                navigate("/blog");
              },
            },
            {
              name: "Sponsor",
              id: "mobileSponsorBtn",
              handleClick: () => {
                window.open(
                  "https://hcb.hackclub.com/donations/start/baltimore-code-and-coffee"
                );
              },
            },
            {
              name: "Volunteer",
              id: "mobileVolunteerBtn",
              handleClick: () => {
                navigate("/volunteer");
              },
            },
          ]}
        ></DropdownMenu>
      )}
    </nav>
  );
}

export default Navbar;
