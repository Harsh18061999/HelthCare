import { Link } from "react-router-dom";

export const MenuItem = ({ to, text }) => (
    <li>
      <Link to={to} className="active">{text}</Link>
    </li>
);

