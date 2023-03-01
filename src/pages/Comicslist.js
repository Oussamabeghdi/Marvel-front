import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

const Comicslist = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.characterId;
  // console.log(params.characterId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "site--marvel-backend--9gtnl5qyn2yw.code.run/comics/" + id
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {data.results.map((elem, index) => {
        return (
          <section>
            <img
              src={elem.thumbnail.path + "." + elem.thumbnail.extension}
              alt="comics"
            />
            <p>{elem.title} </p>
            <p>{elem.description} </p>
          </section>
        );
      })}
    </div>
  );
};

export default Comicslist;
