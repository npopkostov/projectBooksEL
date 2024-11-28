import React from "react";
import Header from "./Header/Header.jsx";
import "./Main.css";

import BookList from "./BookList/BookList.jsx";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <BookList />
    </div>
  );
};

export default Main;
