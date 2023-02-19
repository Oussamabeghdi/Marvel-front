import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://localhost:4000/login", {
        email: email,
        password: password,
      });
      console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      //   console.log(error.message);
      console.log(error.response.data);
    }
  };

  return (
    <div className="form-container">
      <form
        style={{ display: "flex", flexDirection: "column", gap: "30px" }}
        onSubmit={handleLogin}
      >
        <h1>Se connecter</h1>
        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="Se connecter" />
        <Link to="/signup">
          <p>Pas encore de compte ? Inscris-toi</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
