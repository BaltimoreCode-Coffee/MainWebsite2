import react from 'react';
import './BlogCard.css';
import BlogInfo from '../BlogInfo/BlogInfo';

export default function BlogCard() {



    return (
        <div>
            <BlogInfo title="Blog Title" tag="Blog Tag" desc="Blog Description" />
        </div>
    )
}