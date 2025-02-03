import { useState, useEffect } from "react";
import { uid } from "uid";
import "./FullBlogList.css";
import FullBlogHero from "../FullBlogHero/FullBlogHero";
import BlogCard from "../BlogCard/BlogCard";
import supabase from "../../utils/supabaseClient";
import MiniBlogHero from "../MiniBlogHero/MiniBlogHero";

export default function FullBlogList() {
    const [blogs, setBlogs] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const fetchBlogs = async () => {
            const { data, error } = await supabase
                .from('blog')
                .select();
            if (error) {
                setBlogs(null);
                console.error(error);
            }
            if (data) {
                setBlogs(data);
            }
        };
        fetchBlogs();

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="full-blog-list-container">
            <div className="blog-list__card-container">
                {blogs && blogs.length > 0 && (
                    <>
                        <div className="blog-list__cards__hero">
                            {windowWidth > 680 && (
                                <FullBlogHero blog={blogs[0]} key={uid()} className="full-blogHero" />
                            )}
                            {windowWidth <= 680 && (
                                <MiniBlogHero blog={blogs[0]} key={uid()} className="mini-blogHero" />
                            )}
                        </div>
                        <div className="blog-list__cards" id="full-blog-list">
                            {blogs.slice(1).map((blog) => (
                                <BlogCard blog={blog} key={uid()} className="full-blogCards" />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}