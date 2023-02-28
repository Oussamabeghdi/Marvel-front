import { Link } from "react-router-dom";

const Details = ({ item }) => {
  return (
    <Link to={`/character/${item._id}`}  >
     
     <section className="main-container" >
        <div className="details-container">
          <p className="character-name">{item.name}</p>
          <p className="character-description">{item.description} </p>
          <img
            className="image-character"
            src={item.thumbnail.path + "." + item.thumbnail.extension}
            alt="heros"
          />
        </div>
        </section>
    </Link>
  );
};

export default Details;
