import { Link } from "react-router-dom";

export default function Button({ children: [path, text, arrowFunction] }) {
  return (
    <Link to={path === '' ? "" : path} >
      <div className="button" onClick={arrowFunction}>
        <span>{text}</span>
      </div>
    </Link>
  )
}