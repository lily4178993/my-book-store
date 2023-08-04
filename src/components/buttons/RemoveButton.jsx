import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, removeBook } from 'redux/books/booksSlice';
import RemoveButtonCSS from 'components/buttons/styles/RemoveButton.module.css';

const RemoveButton = ({ dataKey }) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch(removeBook(dataKey)).then(() => dispatch(fetchBooks()));
  };

  const { loading, error } = useSelector((state) => state.book);

  return (
    <button
      type="button"
      title="Remove"
      className={RemoveButtonCSS.BookAction}
      onClick={handleClick}
    >
      Remove
      {loading ? <span className={RemoveButtonCSS.Loading}> Please wait...</span> : null}
      {error ? <span className={RemoveButtonCSS.Error}>{`Error: ${error}`}</span> : null}
    </button>
  );
};

RemoveButton.propTypes = {
  dataKey: PropTypes.string.isRequired,
};

export default RemoveButton;
