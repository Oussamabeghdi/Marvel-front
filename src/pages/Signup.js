import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post(
        "https://site--marvel-backend--9gtnl5qyn2yw.code.run/signup",
        {
          username: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
        }
      );
      // console.log(response.data);
      if (response.data.token) {
        handleToken(response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.data.message === "This email already has an account") {
        setErrorMessage(
          "Cet email est déjà utilisé, veuillez créer un compte avec un mail valide."
        );
      }
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez remplir tous les champs svp.");
      }
    }
  };

  return (
    <div className="form-container">
      <form
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={handleSignup}
      >
        <h1>S'inscrire</h1>
        <label htmlFor="Nom d'utilisateur">Nom d'utilisateur</label>
        <input
          id="Nom d'utilisateur"
          value={username}
          type="text"
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          value={email}
          type="mail"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlFor="Mot de passe">Mot de passe</label>
        <input
          id="Mot de passe"
          value={password}
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <label htmlFor="Confirmer votre mot de passe">
          Confirmer votre mot de passe
        </label>
        <input
          id="Confirmer votre mot de passe"
          value={confirmPassword}
          type="password"
          placeholder="Confirmer votre mot de passe"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />

        <input type="submit" value="S'inscrire" />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Link to="/login">
          <p>Tu as déjà un compte, connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
