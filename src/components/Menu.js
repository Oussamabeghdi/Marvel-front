// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ token }) => {
  // const [nav, setNav] = useState(false);
  // const [showFavorites, setShowFavorites] = useState(false);
  // const [favorites, setFavorites] = useState([]);

  // const handleFavoriteClick = () => {
  //   const storedFavorites = JSON.parse(
  //     localStorage.getItem("favorites") || "[]"
  //   );
  //   setFavorites(storedFavorites);
  //   setShowFavorites(true);
  // };
  const navigate = useNavigate();

  const handleClickCharacters = () => {
    if (token) {
      navigate("/characters");
    } else {
      navigate("/login");
    }
  };

  // const handleNav = () => {
  //   setNav(!nav);
  // };
  // const handleShowFavorites = () => {

  // };

  return (
    <div className="nav-link">
      <ul className="menu">
        <li>
          <button onClick={handleClickCharacters}>Characters</button>
        </li>
        <Link to={token ? "/comics" : "/login"}>
          <li>
            <button>Comics</button>
          </li>
        </Link>

        <li>
          <Link>
            <button>Favories</button>
          </Link>
        </li>
      </ul>
      <FontAwesomeIcon icon="xmark" />
      <FontAwesomeIcon icon="bars" className="nav-bar" />
      {/* <div className="">
        <li>
          <button onClick={handleClickCharacters}>Characters</button>
        </li>
        <Link to={token ? "/comics" : "/login"}>
          <li>
            <button>Comics</button>
          </li>
        </Link>

        <li>
          <Link>
            <button>Favories</button>
          </Link>
        </li>
      </div> */}
    </div>
  );
};

export default Menu;
