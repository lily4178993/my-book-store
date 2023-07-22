import React from 'react';
import PropTypes from 'prop-types';
import BooksCardCSS from 'components/styles/BooksCard.module.css';

const BooksCard = ({ booksData }) => (
  <>
    {booksData.map((book) => (
      <div
        key={book.id}
        className={BooksCardCSS.LessonPanel}
      >
        <div>
          <div>
            <p className={BooksCardCSS.SchoolOf}>{book.category}</p>
            <h2 className={BooksCardCSS.Title}>{book.title}</h2>
            <p className={BooksCardCSS.Author}>{book.author}</p>
          </div>
          <div className={BooksCardCSS.BookActionBox}>
            <button type="button" title="Comment" className={BooksCardCSS.BookAction}>Comment</button>
            <button type="button" title="Edit" className={BooksCardCSS.BookAction}>Edit</button>
            <button type="button" title="Remove" className={BooksCardCSS.BookAction}>Remove</button>
          </div>
        </div>
        <div className={BooksCardCSS.LessonPanel2}>
          <div className={BooksCardCSS.CompletionPercentageBox}>
            <div className={BooksCardCSS.Oval2} />
            <div>
              <span className={BooksCardCSS.PercentComplete}>{book.percentageCompletion}</span>
              <span className={BooksCardCSS.Completed}>Completed</span>
            </div>
            <div className={BooksCardCSS.Line2} />
          </div>
          <div>
            <span className={BooksCardCSS.CurrentChapter}>Current Chapter</span>
            <span className={BooksCardCSS.CurrentLesson}>{book.CurrentChapter}</span>
            <button type="button" title="Update Progress" className={BooksCardCSS.Rectangle2}>Update progress</button>
          </div>
        </div>
      </div>
    ))}
    ;
  </>
);

BooksCard.propTypes = {
  booksData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      percentageCompletion: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BooksCard;
