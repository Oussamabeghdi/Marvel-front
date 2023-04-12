import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Searchbar from "./Searchbar";
import "../styles/Header.css";

const Menu = ({ token, handleToken }) => {
  const [nav, setNav] = useState(false);
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

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="nav-link">
      {/* <ul className="menu"> */}

      <ul className={nav ? "menu active" : " menu"}>
        <div className="header-btn">
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

          {token ? (
            <button
              onClick={() => {
                handleToken(null);
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button>
                  <p>S'inscrire</p>
                </button>
              </Link>
              <Link to="/login">
                <button>
                  <p>Se connecter</p>
                </button>
              </Link>
            </>
          )}
        </div>
      </ul>

      <div onClick={handleNav} className="mobile-btn">
        {nav ? (
          <FontAwesomeIcon icon="xmark" size="25" />
        ) : (
          <FontAwesomeIcon icon="bars" size="25" />
        )}
      </div>
    </div>
  );
};

export default Menu;
