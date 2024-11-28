import React, { useContext, useEffect, useState } from "react";
import "./BookList.css";
import { AppContext } from "../../../context/AppContext";
import BookCard from "./BookCard/BookCard";

const BookList = () => {
  const { homePage } = useContext(AppContext);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBooks(homePage.sortedBooks);
    setLoading(false);
  }, [homePage.change]);

  useEffect(() => {
    if (homePage.searchQuery && books.length > 0) {
      const regex = new RegExp(homePage.searchQuery, "i");
      const bookContentElements = document.querySelectorAll(".bookCard-info-item__content");
      bookContentElements.forEach((element) => {
        const originalText = element.textContent;
        const highlightedText = originalText.replace(
          regex,
          (match) => `<span class="bookCard-info-item__content--active">${match}</span>`
        );
        element.innerHTML = highlightedText;
      });
    } else if (!homePage.searchQuery && books.length > 0) {
      const bookContentElements = document.querySelectorAll(".bookCard-info-item__content--active");
      if (bookContentElements) {
        bookContentElements.forEach((element) => {
          element.className = "bookCard-info-item__content";
        });
      }
    }
  }, [homePage.searchQuery, books, homePage.change]);

  return (
    <ul className="bookList">
      {loading === false && books.length !== 0 ? (
        books.map((book) => (
          <li>
            <BookCard key={book.id} book={book} />
          </li>
        ))
      ) : (
        <p className="bookList__text"> No results found </p>
      )}
    </ul>
  );
};

export default BookList;
