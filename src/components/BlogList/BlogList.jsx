import { useState, useEffect } from "react";
import { uid } from "uid";
import "./BlogList.css";
import BlogCard from "../BlogCard/BlogCard";
import BlogHero from "../BlogHero/BlogHero";
import supabase from "../../utils/supabaseClient";

export default function BlogList() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("blog").select();
      if (error) {
        setBlogs(null);
        console.error(error);
      }
      if (data) {
        setBlogs(data);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-list">
      {blogs && blogs.length && (
        <>
          <BlogHero blog={blogs[0]} key={uid()} />
          {blogs.slice(1).map((blog) => (
            <BlogCard blog={blog} key={uid()} />
          ))}
        </>
      )}
    </div>
  );
}
