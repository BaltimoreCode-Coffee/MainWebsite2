
import './BlogCard.css';
import { Link } from 'react-router-dom';

export default function BlogCard({blog}) {
    return (
       <div className="card">
             <img
               src={blog.image}
               alt="Placeholder"
               className="card-image"
             />
             <div className="card-info">
              <div className='card-tags'>
               {blog.tags.map((tag, index) => (
                <span key={index} className="card-tag">{tag}</span>
               )) }
               </div>
               <h3 className="card-title">
                {blog.title}
                </h3>
               <p className="card-desc">{blog.description}</p>
             </div>
           </div>
    )
}