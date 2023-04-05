import { useEffect, useState } from "react";
import axios from "axios";
import Paginate from "../components/Paginate";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";
// import Paginate from "../components/Paginate";

// import Comicslist from "./Comicslist";

const Comics = ({
  searchResults,
  currentPageData,
  onChangeCurrentPage,
  onChangeCurrentPageData,
  currentPage,
}) => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9gtnl5qyn2yw.code.run/comics?title=${searchResults}`
          // `http://localhost:4000/comics?title=${searchResults}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchData();
  }, [searchResults]);

  return isloading ? (
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
    <section className="wrapper-comics">
      <div className="comics-container">
        {currentPageData.map((item, index) => {
          return (
            <div key={index} className="comics">
              <Link to={`/comics/${item._id}`}>
                <div>
                  <p className="comics-title ">{item.title}</p>
                  <p className="comics-description ">{item.description}</p>
                </div>

                <img
                  src={item.thumbnail.path + "." + item.thumbnail.extension}
                  alt="comics "
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <Paginate
          data={data.results}
          itemsPerPage={28}
          onChangeCurrentPageData={onChangeCurrentPageData}
          currentPage={currentPage}
          onChangeCurrentPage={onChangeCurrentPage}
        />
      </div>
    </section>
  );
};

export default Comics;
