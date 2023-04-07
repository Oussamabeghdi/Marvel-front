import { Link } from "react-router-dom";
// import CharacterCard from "./CharaterCard";
import { useState, useEffect } from "react";

const Details = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Récupération des favoris actuels de l'utilisateur depuis Local Storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlreadyFavorite = favorites.includes(item._id);

    setIsFavorite(isAlreadyFavorite);
  }, [item]);

  const onAddFavoriteInLocalStorage = () => {
    if (!isFavorite) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      // Ajouter le personnage aux favoris
      const newFavorites = [...favorites, item._id];

      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
    setIsFavorite(true);
  };

  const onRemoveFavorite = () => {
    if (isFavorite) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      // Supprimer le personnage des favoris
      const newFavorites = favorites.filter(
        (favorite) => favorite !== item._id
      );

      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return setIsFavorite(false);
    }
  };
  const picture = item.thumbnail.path + "." + item.thumbnail.extension;
  return (
    <section>
      <div className="details-container">
        <Link to={`/character/${item._id}`}>
          <p className="character-name">{item.name}</p>
          <p className="character-description">{item.description} </p>
          <div className="image-container">
            <img className="image-character" src={picture} alt="heros" />
          </div>
        </Link>
        <button
          onClick={isFavorite ? onRemoveFavorite : onAddFavoriteInLocalStorage}
        >
          {isFavorite ? "-" : "+"}
        </button>
      </div>
    </section>
  );
};

export default Details;
