import "./Button.css";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export default function Button({ text, path }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(path);
  }

  return (
    <button className="button" type="button" onClick={handleClick}>
      {text}
      <EastIcon fontSize="small" />
    </button>
  );
}
