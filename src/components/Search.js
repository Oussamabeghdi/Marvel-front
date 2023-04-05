// import Modal from "react-modal";

// function SearchResultsModal(props) {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (searchQuery) => {
//     // Effectuer la recherche ici, en utilisant le query comme entrée
//     // et en mettant à jour le state de searchResults avec les résultats de recherche

//     // Par exemple, en utilisant une API de recherche
//     fetch(`https://api.example.com/search?q=${searchQuery}`)
//       .then((response) => response.json())
//       .then((data) => setSearchResults(data.results));

//     // Ouvrir la modal pour afficher les résultats de recherche
//     setModalIsOpen(true);
//   };

//   const handleCloseModal = () => {
//     // Fermer la modal
//     setModalIsOpen(false);

//     // Effacer les résultats de recherche pour la prochaine recherche
//     setSearchResults([]);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(event) => handleSearch(event.target.value)}
//       />

//       <Modal isOpen={modalIsOpen}>
//         <button onClick={handleCloseModal}>Fermer</button>

//         <h2>Résultats de recherche</h2>

//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id}>{result.title}</li>
//           ))}
//         </ul>
//       </Modal>
//     </div>
//   );
// }

// export default SearchResultsModal;
