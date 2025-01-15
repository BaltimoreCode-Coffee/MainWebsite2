
import './BlogCard.css';
//import BlogImage from '../../assets/BlogPlaceholder.jpg';


export default function BlogCard({blog}) {
    return (
       <div className="card">
             {/* <img
               src={blog.image}
               alt="Placeholder"
               className="card-image"
             /> */}
             <div className="card-info">
               <p className="card-tag">{blog.tags}</p>
               <h3 className="card-title">{blog.title}</h3>
               <p className="card-desc">{blog.description}</p>
             </div>
           </div>
    )
}