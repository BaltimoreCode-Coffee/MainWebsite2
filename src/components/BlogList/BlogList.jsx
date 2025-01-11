import {useState, useEffect} from "react";
import {uid} from "uid"
import "./BlogList.css"
import BlogCard from "../BlogCard/BlogCard"
import supabase from "../../utils/supabaseClient"


export default function BlogList(){
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            const {data, error} = await supabase
                .from('blogs')
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
            <h2>Blog</h2>
            <div className="blog-list__cards">
                {blogs && blogs.map((blog) => {
                    return <BlogCard blog={blog} key={uid()} />
                })}
            </div>
        </div>
    )
}