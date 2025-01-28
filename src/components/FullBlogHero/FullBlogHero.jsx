import "./FullBlogHero.css";

export default function FullBlogHero({ blog }) {
  return (
    <div className="full-blog-hero">
      <img src={blog.image} alt={blog.title} />
      <div className="full-blog-hero-info">
        <div className="full-blog-hero-tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="full-blog-hero-tag">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="full-blog-hero-title">{blog.title}</h1>
        <p className="full-blog-hero-desc">{blog.description}</p>
      </div>
    </div>
  );
}
