import "./MemberCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function MemberCard({
  name,
  img,
  profile,
  role
}) {



  //Defines the structure of individual member cards

  return (
   
      <div className="member-card">
        <div className="member-card_img">
        <img src={img} alt={name} className="member-card_img" />
           </div>
        
        <div className="member-info">
          <h2 className="member-name">{name}</h2>
          <div className="member-role">
          <p className="member-role"> {role}</p>
          </div>

          <div className="member-profile">
          <Link to = {profile} target = '_blank'>
          <a href={profile} target="_blank" rel="noopener noreferrer" className="member-profile">
                    Profile
                  </a>
            </Link>
            </div>
        </div>
    
      </div>
   
  )
}
