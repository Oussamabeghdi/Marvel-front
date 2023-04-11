import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import "../styles/Infoscharacter.css";

const Infoscharacter = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  // console.log(params);
  const id = params.characterId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--9gtnl5qyn2yw.code.run/character/${id}`
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
    <section className="infos-container">
      <div className="infos-div">
        <div className="container-title-description">
          {" "}
          <h1 className="title">{data.name}</h1>
          <p className="desciption">{data.description}</p>
        </div>

        <img
          src={
            data.thumbnail.path +
            "/portrait_incredible" +
            "." +
            data.thumbnail.extension
          }
          alt=""
        />
      </div>
      <div className="comic-list">
        <h1>Liste des comics :</h1>
        {data.comics.map((id, index) => {
          return (
            <ul key={index}>
              <li> id : {id}</li>
            </ul>
          );
        })}
      </div>
    </section>
  );
};
export default Infoscharacter;
