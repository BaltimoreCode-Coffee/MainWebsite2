import './AboutUsCard.css'
import cafeImg from '../../assets/code&coffee.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const AboutUsCard = () => {
  return (
    <div className="about-us__container">
        <div className="about-us__text">
            <div className="about-us__text-header">
                <h1>Welcome to Code & Coffee</h1>
            </div>
            <div className="about-us__text-content">
                <p>Code & Coffee is a place where people with passion for tech can come together, exchange ideas, & learn from one another. It’s a place that encourages cross-pollination between
                    technologists of varied backgrounds leaving them with new ideas & doubled energy to be poured back into the community
             </p>
            </div>
            <div className="about-us__text-btn">
                <button className = "about-us__btn">
                    <div className="about-us__btn-txt">Learn More</div>
                    <div className="about-us__btn-icon"><ArrowRightAltIcon /></div>
                </button>
            </div>
        </div>
        <div className="about-us__img">
            <img src={cafeImg} alt="" />
        </div>
    </div>
  )
}

export default AboutUsCard