// // import { Link } from "react-router-dom";

// const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul>
//         {pageNumbers.map((number) => (
//           <li key={number}>
//             <button onClick={() => paginate(number)}>{number}</button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
