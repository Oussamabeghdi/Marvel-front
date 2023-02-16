import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../img/logo.png";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        // response.json(response.data);
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <div>
      <img src={logo} alt="" />
      {data.results.map((item) => {
        return (
          <article key={item._id}>
            <p>{item.name}</p>
            {/* <p>{item.description}</p> */}
            <img
              src={item.thumbnail.path + " " + item.thumbnail.extension}
              alt="character"
            />
          </article>
        );
      })}
    </div>
  );
};

export default Characters;
