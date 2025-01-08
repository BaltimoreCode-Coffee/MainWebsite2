import react from 'react';
import './BlogHero.css';

export default function BlogHero() {

    return (
        <div className="blog-hero">
            <a href='' className="bloglink"><h2 className='title'>Blog Title</h2></a>
            <div className='tag-container'>
                <span className="tag">Tag 1</span>
            </div>
            
        </div>
    )
}