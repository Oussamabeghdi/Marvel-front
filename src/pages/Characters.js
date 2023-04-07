import { useEffect, useState } from "react";
import axios from "axios";
import Details from "../components/Details";
import Paginate from "../components/Paginate";
import { Oval } from "react-loader-spinner";
// import { Link } from "react-router-dom";

const Characters = ({
  searchResults,
  currentPage,
  setCurrentPage,
  currentPageData,
  onChangeCurrentPage,
  onChangeCurrentPageData,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9gtnl5qyn2yw.code.run/characters?name=${searchResults}`
          // `http://localhost:4000/characters?name=${searchResults}`
        );

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [searchResults]);

  return isLoading ? (
    <Oval
      ariaLabel="loading-indicator"
      height={100}
      width={100}
      strokeWidth={1000}
      strokeWidthSecondary={1000}
      color="black"
      secondaryColor="red"
    />
  ) : (
    <div className="wrapper-characters">
      <div className="container">
        {currentPageData.map((character) => {
          return <Details key={character._id} item={character} />;
        })}
      </div>
      <div>
        <Paginate
          data={data.results}
          itemsPerPage={16}
          onChangeCurrentPageData={onChangeCurrentPageData}
          currentPage={currentPage}
          onChangeCurrentPage={onChangeCurrentPage}
        />
      </div>
    </div>
  );
};

export default Characters;
