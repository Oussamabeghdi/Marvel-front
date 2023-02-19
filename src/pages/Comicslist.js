import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";

const Comicslist = ({ comicslist }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost4000/comics/${id}`);
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
    // <Link to={`/comics/${comicslist._id}`}>
    <div>
      <p>{data.comicslist.title} </p>
      <p>{data.comicslist.description} </p>
      {/* <img src={item} alt="" /> */}
      {/* {data.results.comics.map((comics) => {
          return <Comicslist key={comics._id} comicslist={comics} />;
        })} */}
    </div>
    // </Link>
  );
};

export default Comicslist;
