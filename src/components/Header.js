import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import Menu from "./Menu";
import "../styles/Header.css";
// import logo from "../img/logo.png";

import fond from "../img/fond-decran-marvel.jpg";

const Header = ({ handleToken, token, searchResults, setSearchResults }) => {
  const navigate = useNavigate();

  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={fond} alt="marvel" />
      </div>
      <div>
        <Menu token={token} />
      </div>

      <Searchbar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
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
        <div className="menu-container">
          {/* <Searchbar search={search} setSearch={setSearch} /> */}

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
        </div>
      )}
    </header>
  );
};

export default Header;
