import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");
  const searchSubmitHandler = (event) => {
    event.preventDefault();
    setSearchTerm(input);
  };
  return (
    <form className="search-bar" onSubmit={searchSubmitHandler}>
      <input
        type="search"
        placeholder="search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
