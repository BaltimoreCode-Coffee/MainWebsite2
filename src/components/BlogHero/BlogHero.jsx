import "./BlogHero.css";

export default function BlogHero({ className }) {
  return (
    <div className={`blog-hero ${className}`}>
      <a href="" className="bloglink">
        <h2 className="title">Blog Title</h2>
      </a>
      <div className="tag-container">
        <span className="tag">Tag 1</span>
      </div>
    </div>
  );
}
