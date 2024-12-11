
import BlogImage from "../../assets/BlogPlaceHolder.jpg";
import "./Card.css";

export default function Card({ title, tag, desc }) {
  return (
    <div className="card">
      <img
        src={BlogImage}
        alt="Placeholder"
        className="card-image"
      />
      <div className="card-info">
        <p className="card-tag">{tag}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
}
