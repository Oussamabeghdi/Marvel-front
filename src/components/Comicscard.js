import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comicscard = ({ item }) => {
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
  return (
    <div className="comics">
      <Link to={`/comics/${item._id}`}>
        <div>
          <p className="comics-title ">{item.title}</p>
          <p className="comics-description ">{item.description}</p>
        </div>

        <img
          className="comics-img"
          src={item.thumbnail.path + "." + item.thumbnail.extension}
          alt="comics "
        />
      </Link>
      <button
        onClick={isFavorite ? onRemoveFavorite : onAddFavoriteInLocalStorage}
      >
        <FontAwesomeIcon icon="heart" color={isFavorite ? "red" : "gray"} />
      </button>
    </div>
  );
};

export default Comicscard;
