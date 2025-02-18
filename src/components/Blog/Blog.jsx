import "./Blog.css";
<<<<<<< HEAD

import FullBlogList from "../FullBlogList/FullBlogList";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
=======
>>>>>>> d5f5ee31ff4f9307cf396ec93e74f3ea1721b9e8
export default function Blog() {
  return (
    <section className="blog">
      <div className="blog-header">
<<<<<<< HEAD
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
=======
      <h1>Code & Coffee Review</h1>
        <h4>A Fresh Brew of Tech Insights, Community Stories, and Coding Tips</h4>
      </div>
      <div className="mini-blog-header">
        <h1>Code & Coffee Review</h1>
        

      </div>
      <div className="bottom_border"></div>
      <section className="bottom">
         <div className="blog_section" >
         <p>Articles Coming Soon !</p> 
          
          
        </div>
    </section>
     
    </section>
    
   
    
>>>>>>> d5f5ee31ff4f9307cf396ec93e74f3ea1721b9e8
  );
}
