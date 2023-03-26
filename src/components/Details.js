import { Link } from "react-router-dom";
// import CharacterCard from "./CharaterCard";
// import { useState } from "react";
// import Cookies from "js-cookie";

const Details = ({ item }) => {
  // const [favorites, setFavorites] = useState(
  //   Cookies.getJSON("favorites") || []
  // );
  const picture = item.thumbnail.path + "." + item.thumbnail.extension;
  return (
    <section className="main-container">
      <Link to={`/character/${item._id}`}>
        <div className="details-container">
          <p className="character-name">{item.name}</p>
          <p className="character-description">{item.description} </p>
          <img className="image-character" src={picture} alt="heros" />
        </div>
      </Link>
    </section>
  );
};

export default Details;
