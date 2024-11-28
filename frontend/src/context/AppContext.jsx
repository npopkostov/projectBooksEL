import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([]);
  const [sortedBooks, setSortedBooks] = useState([]);
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/data/books").then((response) => {
      if (response.status === 200) {
        setAllBooks(response.data);
        setSortType("author");
      }
    });
  }, []);

  useEffect(() => {
    if (searchedResults !== false && searchedResults.length > 0) {
      switch (sortType) {
        case "author":
          setSortedBooks(searchedResults.sort((a, b) => a.author.localeCompare(b.author)));
          setLoading(false);
          break;
        case "title":
          setSortedBooks(searchedResults.sort((a, b) => a.title.localeCompare(b.title)));
          setLoading(false);
          break;
        case "genre":
          setSortedBooks(searchedResults.sort((a, b) => a.genre.localeCompare(b.genre)));
          setLoading(false);
          break;
      }
    } else if (typeof searchedResults === "object" && searchedResults.length === 0) {
      switch (sortType) {
        case "author":
          setSortedBooks(allBooks.sort((a, b) => a.author.localeCompare(b.author)));
          setLoading(false);
          break;
        case "title":
          setSortedBooks(allBooks.sort((a, b) => a.title.localeCompare(b.title)));
          setLoading(false);
          break;
        case "genre":
          setSortedBooks(allBooks.sort((a, b) => a.genre.localeCompare(b.genre)));
          setLoading(false);
          break;
      }
    } else if (searchedResults === false) {
      setSortedBooks([]);
    }
  }, [sortType, searchedResults]);

  const handleSearch = (query) => {
    const regex = new RegExp(query, "i");
    if (allBooks && query) {
      const result = allBooks.filter((book) => {
        return regex.test(book.title) || regex.test(book.author) || regex.test(book.genre);
      });

      if (result.length > 0) {
        setSearchQuery(query);
        setSearchedResults(result);
      } else {
        setSearchedResults(false);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        homePage: {
          setSortType,
          sortedBooks,
          setLoading,
          handleSearch,
          searchedResults,
          setSearchedResults,
          searchQuery,
          setSearchQuery,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
