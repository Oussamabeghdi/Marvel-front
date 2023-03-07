import { Link } from "react-router-dom";
import CharacterCard from "./CharaterCard";
const Details = ({ item }) => {
  return (
    <section className="main-container">
      <Link to={`/character/${item._id}`}>
        <div className="details-container">
          <p className="character-name">{item.name}</p>
          <p className="character-description">{item.description} </p>
          <img
            className="image-character"
            src={item.thumbnail.path + "." + item.thumbnail.extension}
            alt="heros"
          />
        </div>
      </Link>

      <CharacterCard name={item.name} />
    </section>
  );
};

export default Details;
