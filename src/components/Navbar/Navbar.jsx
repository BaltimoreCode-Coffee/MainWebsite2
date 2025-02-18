<<<<<<< HEAD
// src/components/Navbar.jsx
import "../DropdownMenu/DropdownMenu";
=======
// src/components/Navbar/Navbar.jsx
>>>>>>> d5f5ee31ff4f9307cf396ec93e74f3ea1721b9e8
import DropdownMenu from "../DropdownMenu/DropdownMenu";
//import logo from "../../assets/BCC_logo.png";
import logo from "../../assets/bcc-nav.png";
import HamburgerMenuIcon from "@mui/icons-material/Menu";
import EventCalIcon from "../../assets/event_cal_icon.svg";
import EventTypeIcon from "../../assets/event_type_icon.svg";
import route_names from "../../data_obj/RouteNames";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MobileSlidingMenu from "../MobileSlidingMenu/MobileSlidingMenu";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenuDisplay() {
    if (window.innerWidth < 740) {
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
    navigate(route_names.event_type);
  }
  //
  function navigateToEventCalPage() {
    navigate(route_names.event_cal);
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
            <Link className="navbar__link" to={route_names.about_us}>
              About Us
            </Link>
          </li>
          <li className="navbar__desktop-menu-item">
            <Link className="navbar__link" to={route_names.blog}>
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
            <Link className="navbar__link" to={route_names.volunteer}>
              Volunteer
            </Link>
          </li>
        </ul>
      )}
      {isMobileMenuOpen && (
        <MobileSlidingMenu
          buttonId="mobileNavEventsButton"
          menuId="mobileNavEventsMenu"
          buttonIcon={<HamburgerMenuIcon fontSize="large" />}
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
                navigate(route_names.event_type);
              },
              icon: EventTypeIcon,
            },
            {
              name: "Event Calendar",
              id: "mobileEventCalBtn",
              handleClick: () => {
                navigate(route_names.event_cal);
              },
              icon: EventCalIcon,
            },
            {
              name: "About Us",
              id: "mobileAboutUsBtn",
              handleClick: () => {
                navigate(route_names.about_us);
              },
            },
            {
              name: "Blog",
              id: "mobileBlogBtn",
              handleClick: () => {
                navigate(route_names.blog);
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
                navigate(route_names.volunteer);
              },
            },
          ]}
        ></MobileSlidingMenu>
      )}
    </nav>
  );
}

export default Navbar;