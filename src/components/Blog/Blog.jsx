import "./Blog.css";

import FullBlogList from "../FullBlogList/FullBlogList";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
export default function Blog() {
  return <div className="blog">

    <section className="blog-header">
    <h1>Our Blogs</h1>
    <h4>Daily Brew of Tech Insights, Community Stories and Coding Tips</h4>
    </section>

 

    <section className="blog-cards">
      <FullBlogList />
      </section>
      <Stack spacing={2}>
    
      
      <Pagination count={10} color="secondary" />
     
    </Stack>
  </div>;
}
