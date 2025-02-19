import "./Blog.css";

import FullBlogList from "../FullBlogList/FullBlogList";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
export default function Blog() {
  return (
    <section className="blog">
      <div className="blog-header">
        <h1>Our Blogs</h1>
        <h4>Daily Brew of Tech Insights, Community Stories and Coding Tips</h4>
      </div>
      <div className="mini-blog-header">
        <h1>Code and Coffee Review</h1>
      </div>
    
        <FullBlogList />
      <br />
      <br />
      <br />
      
      <Stack spacing={2}>
        <Pagination count={10} color="secondary" />
      </Stack>
    </section>
  );
}
