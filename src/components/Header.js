import Searchbar from "./Searchbar";
import Menu from "./Menu";
import "../styles/Header.css";

import fond from "../img/fond-decran-marvel.jpg";

const Header = ({ handleToken, token, searchResults, setSearchResults }) => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={fond} alt="marvel" />
      </div>
      <div className="menu-component">
        <Menu token={token} handleToken={handleToken} />
      </div>

      <Searchbar
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      {/* {token ? (
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
      )} */}
    </header>
  );
};

export default Header;
