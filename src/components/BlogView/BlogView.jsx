import react from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './BlogView.css';

export default function BlogView() {

    return (
        <div className="blog-view">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    )

}