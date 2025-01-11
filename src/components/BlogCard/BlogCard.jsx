import react from 'react';
import './BlogCard.css';
import BlogInfo from '../BlogInfo/BlogInfo';

export default function BlogCard(props) {

    console.log(props)

    return (
       <div className="card">
             <img
               src={BlogImage}
               alt="Placeholder"
               className="card-image"
             />
             <div className="card-info">
               <p className="card-tag">{tag}</p>
               <h3 className="card-title">{title}</h3>
               <p className="card-desc">{desc}</p>
             </div>
           </div>
    )
}