import { useState, useEffect } from "react";
import { uid } from "uid";
import supabase from '../../utils/supabaseClient'
import SponsorCard from "../SponsorCard/SponsorCard";
import "./Sponsors.css";

function Sponsors() {
  const [ sponsors, setSponsors ] = useState(null)
  
  useEffect(() => {
    const fetchSponsors = async () => {
        const { data, error } = await supabase
            .from('sponsors')
            .select()
        if(error){
            setSponsors(null)
            console.error(error)
        }
        if(data){
            setSponsors(data)
        }
    }
    fetchSponsors()
  },[])
  return (
      <div className="sponsors">
        <h2>Sponsors</h2>
        <p className="sponsors__description">
          Partner with Us to Grow Your Brand and Support the Tech Community
        </p>
        <div className="sponsors__tiles">
          {sponsors && sponsors.map((sponsor) => {
            return <SponsorCard sponsor={sponsor} key={uid()} />;
          })}
        </div>
        <a href="emailto:test@example.com" className="sponsors__partner-link">
          Partner With Us
        </a>
      </div>
    );
}

export default Sponsors;
