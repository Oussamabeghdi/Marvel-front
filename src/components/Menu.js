import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <ul style={{ display: "flex", width: "15%" }}>
      <li>
        <Link to="/characters">
          <button>Characters</button>
        </Link>
      </li>
      <li>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
      </li>
      <li>
        <Link>
          <button>Favories</button>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
