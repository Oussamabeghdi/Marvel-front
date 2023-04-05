import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";

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
          "https://site--marvel-backend--9gtnl5qyn2yw.code.run/character/" + id

          // "http://localhost:4000/character/ " + id
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchData();
  }, [id]);

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
    <div className="infos-container">
      <h1>Liste des comics:</h1>

      {data.comics.map((id, index) => {
        return (
          <ol key={index}>
            {/* <li>{id && <p>L'ID est : {id}</p>} </li> */}
            <li> id : {id}</li>
          </ol>
        );
      })}
    </div>
  );
};
export default Infoscharacter;
