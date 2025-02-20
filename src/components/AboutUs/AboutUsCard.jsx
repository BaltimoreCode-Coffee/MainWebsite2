import './AboutUsCard.css'
import cafeImg from '../../assets/code&coffee.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "react-router-dom";
import route_names  from '../../data_obj/RouteNames'

const AboutUsCard = () => {
  return (
    <div className="about-us__container">
        <div className="about-us__text">
            <div className="about-us__text-header">
                <h1>Welcome to Code & Coffee</h1>
            </div>
            <div className="about-us__text-content">
                <p style={{ color: 'black' }}>Code & Coffee is a place where people with passion for tech can come together, exchange ideas, & learn from one another. It’s a place that encourages cross-pollination between
                    technologists of varied backgrounds leaving them with new ideas & doubled energy to be poured back into the community.
             </p>
            </div>
            <div className="about-us__text-btn">
                <button className = "about-us__btn">
                    <div className="about-us__btn-txt"><Link to={route_names.about_us}  style={{ textDecoration: 'none' ,color: 'inherit'}}>Learn More</Link></div>
                    <div className="about-us__btn-icon"><ArrowRightAltIcon /></div>
                </button>
            </div>
        </div>
        <div className="about-us__img">
            <img src={cafeImg} alt="" />
        </div>
        <div className="about-us__mobile-text-btn">
            <button className="about-us__mobile-btn">
                <div className="about-us__mobile-btn-text"><Link to={route_names.about_us}  style={{ textDecoration: 'none' ,color: 'inherit'}}>Learn More</Link></div>
            </button>
        </div>
    </div>
  )
}


export default AboutUsCard