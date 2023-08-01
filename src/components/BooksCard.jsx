import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'components/buttons/RemoveButton';
import BooksCardCSS from 'components/styles/BooksCard.module.css';
import { fetchBooks } from 'redux/books/booksSlice';

const BooksCard = () => {
  const percentageCompletion = Math.round(Math.random() * 100);
  const currentChapter = Math.round(Math.random() * 50);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const booksData = useSelector((state) => state.book);

  if (booksData.loading) {
    return <div>Loading...</div>;
  }

  if (booksData.error) {
    return (
      <div>
        Error:
        {booksData.error}
      </div>
    );
  }

  if (!booksData.books || Object.keys(booksData.books).length === 0) {
    return <div>There are no books</div>;
  }
  return (
    <>
      {Object.values(booksData.books).map((bookArray) => (
        <div key={bookArray[0].item_id}>
          {bookArray.map((bookData) => (
            <div
              key={bookData.item_id}
              className={BooksCardCSS.LessonPanel}
            >
              <div>
                <div>
                  <p className={BooksCardCSS.SchoolOf}>{bookData.category}</p>
                  <h2 className={BooksCardCSS.Title}>{bookData.title}</h2>
                  <p className={BooksCardCSS.Author}>{bookData.author}</p>
                </div>
                <div className={BooksCardCSS.BookActionBox}>
                  <button
                    type="button"
                    title="Comment"
                    className={BooksCardCSS.BookAction}
                  >
                    Comment
                  </button>
                  <button
                    type="button"
                    title="Edit"
                    className={BooksCardCSS.BookAction}
                  >
                    Edit
                  </button>
                  <Button id={bookData.item_id} />
                </div>
              </div>
              <div className={BooksCardCSS.LessonPanel2}>
                <div className={BooksCardCSS.CompletionPercentageBox}>
                  <div className={BooksCardCSS.Oval2} />
                  <div>
                    <span className={BooksCardCSS.PercentComplete}>
                      {percentageCompletion}
                      %
                    </span>
                    <span className={BooksCardCSS.Completed}>Completed</span>
                  </div>
                  <div className={BooksCardCSS.Line2} />
                </div>
                <div>
                  <span className={BooksCardCSS.CurrentChapter}>Current Chapter</span>
                  <span className={BooksCardCSS.CurrentLesson}>
                    Chapter &nbsp;
                    {currentChapter}
                  </span>
                  <button
                    type="button"
                    title="Update Progress"
                    className={BooksCardCSS.Rectangle2}
                  >
                    Update progress
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default BooksCard;
