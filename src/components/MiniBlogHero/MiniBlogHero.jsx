import "./MiniBlogHero.css";  


export default function MiniBlogHero({ blog }) {    

return (
    <div className="mini-blog-hero">
      <img src={blog.image} alt={blog.title} />
      <div className="mini-blog-hero-info">
        <div className="mini-blog-hero-tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="mini-blog-hero-tag">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mini-blog-hero-title">{blog.title}</h1>
        <p className="mini-blog-hero-date">{blog.post_date}</p>
      </div>
    </div>
  );
}
