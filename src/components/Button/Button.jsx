import "./Button.css";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

// use either path OR externalLink props not both
export default function Button({ text, path, externalLink, uniqueClassName }) {
  const navigate = useNavigate();

  function handleClick() {
    if (path && externalLink) {
      throw new Error(
        "You can only pass path prop OR externalLink prop not both"
      );
    } else if (path) {
      navigate(path);
    } else if (externalLink) {
      window.open(externalLink, "_blank");
    }
  }

  return (
    <button
      className={`button ${uniqueClassName}`}
      type="button"
      onClick={handleClick}
    >
      {text}
      <EastIcon fontSize="small" />
    </button>
  );
}
