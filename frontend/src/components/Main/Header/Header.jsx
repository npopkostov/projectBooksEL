import React, { useContext } from "react";
import "./Header.css";
import Search from "./Search/Search";
import { AppContext } from "../../../context/AppContext";

const Header = () => {
  const { homePage } = useContext(AppContext);
  return (
    <div className="header">
      <Search />
      <div className="header-sort">
        Sort by:
        <select
          className="header-sort__box"
          value={homePage.sortType}
          onChange={(e) => {
            homePage.setLoading(true);
            homePage.setSortType(e.target.value);
          }}
        >
          <option className="header-sort__type" value="author">
            Author Name
          </option>
          <option className="header-sort__type" value="title">
            Title
          </option>
          <option className="header-sort__type" value="genre">
            Genre
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
