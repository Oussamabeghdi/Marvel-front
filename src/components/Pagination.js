// import { Link } from "react-router-dom";
import { useState } from "react";

const Pagination = ({ charactersPerPage, totalCharacters, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const handleClick = (number) => setCurrentPage(number);

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item${currentPage === number ? "active" : ""}`}
          >
            <button onClick={() => handleClick(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
