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
    <article className="comics">
      <Link to={`/comics/${item._id}`}>
        <div>
          <p className="comics-title ">{item.title}</p>
          {/* <p className="comics-description ">{item.description}</p> */}
        </div>
        <div className="comics-image-container">
          <img
            className="comics-image"
            src={
              item.thumbnail.path +
              "/portrait_medium" +
              "." +
              item.thumbnail.extension
            }
            alt="comics "
          />
        </div>
      </Link>
      <button
        onClick={isFavorite ? onRemoveFavorite : onAddFavoriteInLocalStorage}
      >
        <FontAwesomeIcon icon="heart" color={isFavorite ? "red" : "gray"} />
      </button>
    </article>
  );
};

export default Comicscard;
