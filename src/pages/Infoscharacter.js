import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Infoscharacter = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.characterId;
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/character/" + id
        );
        console.log(response.data);
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
    <div className="infos-container">
      {/* <img
        src={
          data.results.thumbnail.path + "." + data.results.thumbnail.extension
        }
        alt=""
      /> */}
        {/* <h2>{item.name}</h2> */}
        {data.comics.map((tab, index) => {
        return (
         
          <ol key={index}>
            <li>id : {tab}</li>
          </ol>
        );
      })}
    
    </div>
  );
};
export default Infoscharacter;
