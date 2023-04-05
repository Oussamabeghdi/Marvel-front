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
      const response = await axios.post(
        // "https://site--marvel-backend--9gtnl5qyn2yw.code.run/login",
        "http://localhost:4000/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);
        console.log(handleToken);
        navigate("/characters");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
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
