import { useState, useEffect } from "react";
import supabase from '../../utils/supabaseClient'
import SponsorCard from "../SponsorCard/SponsorCard";
import MobileSponsorCard from "../MobileSponsorCard/MobileSponsorCard";
import "./Sponsors.css";
import MobileCarousel from "../MobileCarousel/MobileCarousel";

function Sponsors() {
  const [ sponsors, setSponsors ] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSponsors = async () => {
    try{
      const { data, error } = await supabase
          .from('sponsors')
          .select('*')
      if(error){
          throw error
      }
      setSponsors(data)
    }catch(error){
      console.log('Error fetching Sponsors:', error.message)
    }finally{
      setLoading(false)
    }
}

  useEffect(() => {
    fetchSponsors()
  },[])
  if (loading){
    return  <div>Loading...</div>
  } 
  return (
    <>
       <div className="sponsors">
        <h2>Sponsors</h2>
        <p className="sponsors__description">
          Partner with Us, Grow Your Brand, Support the Tech Community
        </p>
        <div className="desktop-container">
          <div className="sponsors__tiles">
            {sponsors && sponsors.map((sponsor) => {
              return <SponsorCard sponsor={sponsor} key={sponsor.id} />;
            })}
          </div>
          <div className="buttor_bar">
            <button className="sponsor_button">
              <a href="mailto:bmorecodecoffee@gmail.com" className="sponsors__partner-link">
                Partner With Us
              </a>
            </button>
          </div>
        </div>
      </div> 

      <MobileCarousel CardType={MobileSponsorCard} slides={sponsors}/> 
    </>
    );
}

export default Sponsors;
