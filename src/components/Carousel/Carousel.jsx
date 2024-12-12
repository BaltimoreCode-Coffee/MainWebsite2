import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Link } from "react-router-dom";
import { uid } from 'uid'
import Slides from './Slides'
import route_names  from '../../data_obj/RouteNames'
import Options from './SlideOptions'
import Arrow from './CarouselArrow/CarouselArrow'
import './Carousel.css'

function Carousel() {
    return ( 
        <div className="carousel">
            <Splide hasTrack={false} aria-label="Image Carousel"  options={Options}
            extensions={{ AutoScroll }}>
                <SplideTrack>
                    {
                        Slides.map(slide => {
                            return (
                                <SplideSlide key={uid()}>
                                    <img src={slide.image} alt={slide.title} />
                                    <div className="slide-buttons">
                                        <div className="about-btn"><Link to={route_names.event_type}>About</Link></div>
                                        <div className="view-events-btn"><Link to={route_names.event_cal}>View Events</Link></div>
                                    </div>
                                    <div className="slide-label">{slide.title}</div>
                                </SplideSlide>
                            )
                        })
                    }
                </SplideTrack>
                
                <div className="splide__arrows">
                    <Arrow direction="prev"/>
                    <Arrow direction="next"/>
                </div>
            </Splide>
        </div>
     );
}

export default Carousel