import {useState, useEffect} from "react";
import {uid} from "uid"
import "./FullBlogList.css"
import BlogCard from "../BlogCard/BlogCard"
import BlogHero from "../BlogHero/BlogHero"
import supabase from "../../utils/supabaseClient"


export default function FullBlogList(){
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            const {data, error} = await supabase
                .from('blog')
                .select()
            if(error){
                setBlogs(null)
                console.error(error)
            }
            if(data){
                setBlogs(data)
            }
        }
        fetchBlogs()
    }, [])
    
    return (
        <div className="blog-list">
            <div className="blog-list__card-container">
               {blogs && blogs.length > 0 && (
                <>
                <div className="blog-list__cards__hero">
                    <BlogHero blog={blogs[0]} key={uid()}/>
                </div>
                <div className="blog-list__cards" id="full-blog-list">
                    {blogs.slice(1).map((blog) => (
                        <BlogCard blog={blog} key={uid()}/>
                    ))}
                </div>
                </>
               )}
            </div>
        </div>
    )
}