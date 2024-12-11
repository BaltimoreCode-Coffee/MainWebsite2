import "./Blog.css";
import BlogHero from "../BlogHero/BlogHero";
import BlogCard from "../BlogCard/BlogCard";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
export default function Blog() {
  return <div className="blog">

    <section className="blog-header">
    <h1>Our Blogs</h1>
    <h4>Daily Brew of Tech Insights, Community Stories and Coding Tips</h4>
    </section>

    <section className="blog-highlight">
      <BlogHero id="highlight"/> 
    </section>

    <section className="blog-cards">
    
      </section>
      <Stack spacing={2}>
    
      
      <Pagination count={10} color="secondary" />
     
    </Stack>
  </div>;
}
