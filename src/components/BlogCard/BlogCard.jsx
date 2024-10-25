import react from 'react';
import './BlogCard.css';

export default function BlogCard() {



    return (
        <div className="blog-card">
            <img src="https://via.placeholder.com/250" alt="placeholder" />
            <div className='tag-container'>
                <span className="tag">Tag 1</span>
                <span className="tag">Tag 2</span>
            </div>
            <a href=''><h2 className='title'>Blog Title</h2></a>
            <p className='desc'>Blog Description</p>
            
        </div>
    )
}