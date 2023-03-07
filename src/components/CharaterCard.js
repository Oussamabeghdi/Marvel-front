import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CharacterCard = ({ name }) => {
  const [isFavorite, setIsFavorite] = useState([]);

  useEffect(() => {
    const favoritesCharacters = Cookies.get("favoriteCharaters") || [];
    setIsFavorite(favoritesCharacters.includes(name));
  }, [name]);

  const handleFavoriteClick = () => {
    const favoriteCharaters = Cookies.get("favoritesCharacters") || [];
    if (isFavorite) {
      const index = favoriteCharaters.indexOf(name);
      if (index > -1) {
        favoriteCharaters.splice(index, 1);
      }
    } else {
      favoriteCharaters.push(name);
    }
    Cookies.set("favoritesCharacters  ", favoriteCharaters, { expires: 14 });

    setIsFavorite(!isFavorite);
  };
  return (
    <div>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
};

export default CharacterCard;
