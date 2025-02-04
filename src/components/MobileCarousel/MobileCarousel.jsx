import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import Options from './MobileCarouselOptions'
import './MobileCarousel.css'

function MobileCarousel({CardType, slides}) {
    if (!Array.isArray(slides)) {
        return <div>Carousel unavailable</div>; 
    }

    return ( 
        <div className="mobile-carousel">
            <Splide hasTrack={false} aria-label="Image Carousel"  options={Options}  >
                <SplideTrack>
                    {
                        slides.map((slide, i) => {
                            return (
                                <SplideSlide key={i}>
                                    <CardType content={slide}/>
                                </SplideSlide>
                            )
                        })
                    }
                </SplideTrack>
            </Splide>
        </div>
    );
}

export default MobileCarousel