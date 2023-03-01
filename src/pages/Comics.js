import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Comicslist from "./Comicslist";

const Comics = ({ search }) => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-marvel-api.herokuapp.com/comics?title=${search}`
        );
        console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchData();
  }, [search]);

  return isloading ? (
    <p>Loading....</p>
  ) : (
    <div className="comics-container">
      {data.results.map((item, index) => {
        return (
          // <Comicslist key={item._id} comicslist={item} />
          <Link key={index} to={`/comics/${item._id}`}>
            <article>
              <p className="comics-title ">{item.title}</p>
              <p className="comics-description ">{item.description}</p>
              <img
                // className="image-character"
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt="comics"
              />
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Comics;
