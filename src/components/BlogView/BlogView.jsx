

import BlogList from '../BlogList/BlogList';

import './BlogView.css';

export default function BlogView() {
    return (
        <div className="blog-view-wrapper">
            <div className="blog-view">
                <h2><b>Our Blog</b></h2>
                <div className="blog-view-desc">
                    <h3>Your Daily Brew of Tech Insights, Community, Stories and Coding Tips</h3>
                </div>
               
                    <BlogList />
              
                <div className="blog-view-footer">
                    <a href="/blog" className="blog-view-footer-link">See All Articles</a>
                </div>
            </div>
        </div>
    );
}