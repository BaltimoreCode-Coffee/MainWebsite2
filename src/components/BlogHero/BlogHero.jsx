import "./BlogHero.css";

export default function BlogHero({ blog }) {
  console.log(blog);
  return (
    <div className="card" id="blog-hero" style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover' }}>
      <div className="card-info">
        <div className="card-tags" id="highlight-tags">
          {blog.tags.map((tag, index) => (
            <span key={index} className="card-tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="card-title" id="highlight-title">{blog.title}</h3>
      </div>
    </div>
  );
}
