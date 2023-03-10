import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Characters from "./pages/Characters";
import Infoscharacter from "./pages/Infoscharacter";
import Comics from "./pages/Comics";
import Comicslist from "./pages/Comicslist";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

function App() {
  // const [data, setData] = useState();
  const totalCharacters = 200;
  const [setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(100);
  const [token, setToken] = useState(Cookies.get("token-user" || null));

  const [search, setSearch] = useState("");

  const handleToken = (token) => {
    if (token) {
      setToken(token);

      Cookies.set("token-user", token, { expires: 28 });
    } else {
      setToken(null);

      Cookies.remove("token-user");
    }
  };

  // const indexOfLastData = currentPage * charactersPerPage;
  // const indexOfFirstData = indexOfLastData - charactersPerPage;
  // const currentCharacters = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <Header
        token={token}
        search={search}
        handleToken={handleToken}
        setToken={setToken}
        setSearch={setSearch}
      />

      <Routes>
        <Route path="/" element={<Characters search={search} />} />

        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route
          path="/character/:characterId"
          element={<Infoscharacter search={search} />}
        />
        <Route path="/comics/:characterId" element={<Comicslist />} />
        <Route path="/comics" element={<Comics search={search} />} />
      </Routes>
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={totalCharacters}
        paginate={paginate}
      />
      <Footer />
    </Router>
  );
}
export default App;
