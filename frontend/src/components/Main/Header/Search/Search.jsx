import React, { useState, useContext } from "react";
import "./Search.css";
import { AppContext } from "../../../../context/AppContext";

const Search = () => {
  const { homePage } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
          homePage.handleSearch(searchQuery);
        }
      }}
    >
      <input
        className="search__input"
        type="text"
        onChange={(e) => {
          if (e.target.value) {
            setSearchQuery(e.target.value);
          } else {
            setSearchQuery("");
            homePage.setSearchedResults([]);
            homePage.setSearchQuery();
          }
        }}
      />
      <button className="search__btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
