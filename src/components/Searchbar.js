const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="searchbar">
      <input
        value={search}
        type="text"
        placeholder="Recherche"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default Searchbar;
