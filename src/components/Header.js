import Searchbar from "./Searchbar";
import Menu from "./Menu";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = ({ handleToken, token, search, setSearch }) => {
  return (
    <header>
      <section>
        <Menu />
        <Searchbar
          // className="input-search"
          search={search}
          setSearch={setSearch}
        />
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <div>
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
      <img
        style={{
          marginTop: "10px",
          width: "100%",
          height: "200px",
          objectFit: "contain",
        }}
        src={logo}
        alt=""
      />
    </header>
  );
};

export default Header;
