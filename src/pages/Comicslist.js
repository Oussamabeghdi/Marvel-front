import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

const Comicslist = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.characterId;
  console.log(params.characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://site--marvel-backend--9gtnl5qyn2yw.code.run/comics/" + id
          "http://localhost:4000/comics/" + id
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log({ message1: error.message });
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <section>
      {data.results.map((elem, index) => {
        // console.log(elem);
        return (
          <div key={index}>
            <img
              src={elem.thumbnail.path + "." + elem.thumbnail.extension}
              alt="comics"
            />
            <p>{elem.title} </p>
            <p>{elem.description} </p>
          </div>
        );
      })}
    </section>
  );
};

export default Comicslist;
