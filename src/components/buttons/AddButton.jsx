import React from 'react';
import AddButtonCSS from 'components/buttons/styles/AddButton.module.css';

const AddButton = () => (

  <button
    type="submit"
    title="Add Book"
    className={AddButtonCSS.Rectangle2}
  >
    ADD BOOK
  </button>
);
export default AddButton;
