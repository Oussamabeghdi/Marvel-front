import { useEffect, useState } from "react";
import axios from "axios";
import Details from "../components/Details";
// import { Link } from "react-router-dom";

const Characters = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `site--marvel-backend--9gtnl5qyn2yw.code.run/characters?name=${search}`
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
      {data?.results.map((item) => {
        return <Details key={item._id} item={item} />;
      })}
    </div>
  );
};

export default Characters;
