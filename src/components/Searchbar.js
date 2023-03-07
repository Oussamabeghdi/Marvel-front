const Searchbar = ({ search, setSearch }) => {
  return (
    <input
      className="input-search"
      value={search}
      type="text"
      placeholder="Recherche"
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    ></input>
  );
};

export default Searchbar;
