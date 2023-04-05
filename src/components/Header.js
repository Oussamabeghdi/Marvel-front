import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Searchbar from "./Searchbar";
import Menu from "./Menu";

// import logo from "../img/logo.png";

import fond from "../img/fond-decran-marvel.jpg";

const Header = ({ handleToken, token, searchResults, setSearchResults }) => {
  const navigate = useNavigate();

  return (
    <header>
      <section>
        <Menu />
        <FontAwesomeIcon icon="bars" />
        <Searchbar
          // className="input-search"
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
      </section>
      <div className="header-logo">
        <img src={fond} alt="" />
      </div>
    </header>
  );
};

export default Header;
