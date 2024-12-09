import { useState } from "react";
import { uid } from "uid";
import SponsorCard from "../SponsorCard/SponsorCard";
import SponsorData from "./SponsorData";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div className="sponsors">
      <h2>Sponsors</h2>
      <p className="sponsors__description">
        Partner with Us to Grow Your Brand and Support the Tech Community
      </p>
      <div className="sponsors__tiles">
        {SponsorData.map((sponsor) => {
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
