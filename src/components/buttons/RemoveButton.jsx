import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from 'redux/books/booksSlice';
import RemoveButtonCSS from 'components/buttons/styles/RemoveButton.module.css';

const RemoveButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = (event, index = id) => {
    event.stopPropagation();
    dispatch(removeBook(index));
  };

  return (
    <button
      type="button"
      title="Remove"
      className={RemoveButtonCSS.BookAction}
      onClick={handleClick}
    >
      Remove
    </button>
  );
};

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveButton;
