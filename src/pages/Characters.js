import { useEffect, useState } from "react";
import axios from "axios";
import Details from "../components/Details";
// import { Link } from "react-router-dom";

const Characters = ({ search }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `https://site--marvel-backend--9gtnl5qyn2yw.code.run/characters?name=${search}`
          `http://localhost:4000/characters?name=${search}`
        );

        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="container">
      {data.results.map((character) => {
        return <Details key={character._id} item={character} />;
      })}
    </div>
  );
};

export default Characters;
