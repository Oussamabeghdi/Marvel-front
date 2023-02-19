import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Infoscharacter = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://loclhost4000/character/${id}`);
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
    <p>Loading...</p>
  ) : (
    <div>
      <img
        src={
          data.results.thumbnail.path + "." + data.results.thumbnail.extension
        }
        alt=""
      />
      <p>{data.results.name} </p>
      <p>{data.results._id} </p>
    </div>
  );
};
export default Infoscharacter;
