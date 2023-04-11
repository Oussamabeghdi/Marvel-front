import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = ({ token }) => {
  const [nav, setNav] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = () => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
    setShowFavorites(true);
  };
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
  const handleNav = () => {
    setNav(!nav);
  };
  // const handleShowFavorites = () => {

  // };

  return (
    <div className="nav-link">
      <ul className="menu">
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
      </ul>
    </div>
  );
};

export default Menu;
