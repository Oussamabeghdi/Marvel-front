import axios from "axios";
import { useEffect, useState } from "react";

const Characters1 = ({ search }) => {
  const [character, setChracter] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await axios.get(
          `site--marvel-backend--9gtnl5qyn2yw.code.run/characters?name=${search}`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacter();
  }, []);

  //   return <div>Characters1</div>;
};

export default Characters1;
