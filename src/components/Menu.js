import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul style={{ display: "flex" }}>
      <li>
        <Link to="/">
          <button style={{ width: "80px" }}>Characters</button>
        </Link>
      </li>
      <li>
        <Link to="/comics">
          <button style={{ width: "80px" }}>Comics</button>
        </Link>
      </li>
      <li>
        <Link>
          <button style={{ width: "80px" }}>Favories</button>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
