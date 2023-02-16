import { useEffect, useState } from "react";
import axios from "axios";
const Comics = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
        console.log(response.data);
        res.json(response.data);
        setData(response.data);
        setIsloading(true);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
    fetchData();
  }, []);

  return isloading ? (
    <p>Loading....</p>
  ) : (
    <div>
      {data.results.map((item) => {
        return (
          <article
            style={{ height: 200, width: 300, border: "1px solid red" }}
            key={item._id}
          >
            <p>{item.title}</p>
            <img
              src={
                item.results.thumbnail.path +
                " " +
                item.results.thumbnail.extension
              }
            />
            {item.description}
          </article>
        );
      })}
    </div>
  );
};

export default Comics;
