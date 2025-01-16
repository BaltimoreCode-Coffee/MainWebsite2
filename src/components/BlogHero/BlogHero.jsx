import "./BlogHero.css";

export default function BlogHero({ blog }) {
  return (
    <div className="card" id="blog-hero">
      <div className="card-info">
        <div className="card-tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="card-title">{blog.title}</h3>
      </div>
    </div>
  );
}
