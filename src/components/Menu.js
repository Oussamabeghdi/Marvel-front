import { Link, useNavigate } from "react-router-dom";

const Menu = ({ token }) => {
  const navigate = useNavigate();

  const handleClickCharacters = () => {
    if (token) {
      navigate("/characters");
    } else {
      navigate("/login");
    }
  };
  const handleClickComics = () => {
    if (token) {
      navigate("/comics");
    } else {
      navigate("/login");
    }
  };

  return (
    <ul className="menu">
      <div className="nav-link">
        {" "}
        <li>
          <button onClick={handleClickCharacters}>Characters</button>
        </li>
        <li>
          <button onClick={handleClickComics}>Comics</button>
        </li>
        <li>
          <Link>
            <button>Favories</button>
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default Menu;
