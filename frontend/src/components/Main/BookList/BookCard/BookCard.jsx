import React from "react";
import "./BookCard.css";
import img from "./assets/book.png";

const BookCard = ({ book }) => {
  return (
    <div className="bookCard">
      <img className="bookCard-img" src={img} />
      <div className="bookCard-info">
        <p className="bookCard-info-item">
          <span className="bookCard-info-item__category">Title:</span>
          <span className="bookCard-info-item__content">{book.title}</span>
        </p>
        <p className="bookCard-info-item">
          <span className="bookCard-info-item__category">Author:</span>
          <span className="bookCard-info-item__content">{book.author}</span>
        </p>
        <p className="bookCard-info-item">
          <span className="bookCard-info-item__category">Genre:</span>
          <span className="bookCard-info-item__content">{book.genre}</span>
        </p>
        <p className="bookCard-info-item">
          <span className="bookCard-info-item__category">Rating:</span>
          <span className="bookCard-info-item__content">{book.rating}</span>
        </p>
      </div>
    </div>
  );
};

export default BookCard;
