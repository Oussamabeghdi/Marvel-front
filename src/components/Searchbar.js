import { useState } from "react";
import Modal from "react-modal";

const Searchbar = ({ searchResults, setSearchResults }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => {
    // Fermer la modal
    setModalIsOpen(false);

    // Effacer les résultats de recherche pour la prochaine recherche
    setSearchResults([]);
  };

  return (
    <div>
      <input
        className="input-search"
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchResults(event.target.value)}
      />

      <Modal isOpen={modalIsOpen}>
        <button onClick={handleCloseModal}>Fermer</button>

        <h2>Résultats de recherche</h2>
        {/* 
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul> */}
      </Modal>
    </div>
  );
};
//   return (
//     <input
//       className="input-search"
//       value={search}
//       type="text"
//       placeholder="Recherche"
//       onChange={(event) => {
//         setSearch(event.target.value);
//       }}
//     ></input>
//   );
// };

export default Searchbar;
