import Searchbar from "./Searchbar";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = ({ handelToken, token, search, setSearch }) => {
  return (
    <section className="header-container">
      {token ? (
        <button
          onClick={() => {
            handelToken(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <div className="header-block">
          <Searchbar search={search} setSearch={setSearch} />

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

      <img
        style={{
          width: "100%",
          height: "300px",
          objectFit: "contain",
        }}
        src={logo}
        alt=""
      />
    </section>
  );
};

export default Header;
