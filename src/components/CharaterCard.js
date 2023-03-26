// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";

// const CharacterCard = ({ item, name, description, id }) => {
//   const [isFavorite, setIsFavorite] = useState([]);

//   useEffect(() => {
//     const favoritesCharacters = Cookies.get("favoriteCharaters") || [];
//     // console.log(favoritesCharacters);
//     setIsFavorite(favoritesCharacters.includes(name));
//     // console.log(favoritesCharacters);
//   }, [name]);

//   const handleFavoriteClick = () => {
//     const favoriteCharaters = Cookies.get("favoritesCharacters") || [];
//     console.log(favoriteCharaters);
//     if (isFavorite) {
//       const index = favoriteCharaters.indexOf(id);
//       console.log(index);
//       if (index > -1) {
//         favoriteCharaters.slice(index, 1);
//       }
//     } else {
//       favoriteCharaters.push(name, description, id);
//       // console.log(description);
//       // console.log(name);
//       // console.log(isFavorite);
//       // console.log(favoriteCharaters);
//     }
//     // JSON.stringify(favoriteCharaters);
//     // console.log(favoriteCharaters);
//     Cookies.set("favoritesCharacters  ", favoriteCharaters, { expires: 14 });
//     console.log(favoriteCharaters);
//     setIsFavorite(!isFavorite);
//   };
//   return (
//     <div>
//       <button onClick={handleFavoriteClick}>
//         {isFavorite ? "Remove from favorites" : "Add to favorites"}
//       </button>
//     </div>
//   );
// };

// export default CharacterCard;
// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";

// const CharacterCard = ({ item, handleFavorite, id, description, name }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   useEffect(() => {
//     const favorites = Cookies.get("favorites") || [];
//     setIsFavorite(favorites.includes(id));
//   }, [id]);
//   const handleFavoriteClick = () => {
//     const favoriteCharaters = Cookies.get("favoritesCharacters") || [];
//     console.log(favoriteCharaters);
//     if (isFavorite) {
//       const index = favoriteCharaters.indexOf(id);
//       console.log(index);
//       if (index > -1) {
//         favoriteCharaters.slice(index, 1);
//       }
//     } else {
//       favoriteCharaters.push(name, description, id);
//     }

//     Cookies.set("favoritesCharacters  ", favoriteCharaters, { expires: 14 });
//     console.log(favoriteCharaters);
//     setIsFavorite(!isFavorite);
//     handleFavorite(item.id);
//   };
//   // const handleOnClick = () => {
//   //   setIsFavorite(!isFavorite);
//   //   handleFavorite(item.id);
//   // };

//   return (
//     <div className="character-card">
//       {/* <h3>{item.name}</h3>
//       <p>{item.description}</p> */}
//       <button onClick={handleFavoriteClick}>
//         {isFavorite ? "Remove from favorites" : "Add to favorites"}
//       </button>
//     </div>
//   );
// };
// export default CharacterCard;
// const Characters = ({ characters }) => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const favorites = Cookies.get("favorites") || "[]";
//     setFavorites(JSON.parse(favorites));
//   }, []);

//   const handleFavorite = (characterId) => {
//     const favorites = Cookies.get("favorites") || "[]";
//     const parsedFavorites = JSON.parse(favorites);

//     if (parsedFavorites.includes(characterId)) {
//       const newFavorites = parsedFavorites.filter((id) => id !== characterId);
//       Cookies.set("favorites", JSON.stringify(newFavorites));
//       setFavorites(newFavorites);
//     } else {
//       const newFavorites = [...parsedFavorites, characterId];
//       Cookies.set("favorites", JSON.stringify(newFavorites));
//       setFavorites(newFavorites);
//     }
//   };

//   return (
//     <div className="characters">
//       {characters.map((character) => (
//         <CharacterCard
//           key={character.id}
//           character={character}
//           handleFavorite={handleFavorite}
//         />
//       ))}
//       <h2>Favorites</h2>
//       {favorites.length > 0 ? (
//         favorites.map((favorite) => (
//           <div key={favorite}>
//             <p>{characters.find((c) => c.id === favorite.name}</p>
//           </div>
//         ))
//       ) : (
//         <p>No favorites yet.</p>
//       )}
//     </div>
//   );
// };

// export default Characters;
