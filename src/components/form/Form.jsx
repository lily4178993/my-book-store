import React from 'react';
import FormCSS from 'components/form/styles/Form.module.css';

function Form() {
  return (
    <div>
      <h2 className={FormCSS.Title}>Add New Book</h2>
      <form className={FormCSS.form}>
        <input type="text" placeholder="Book title"  className={FormCSS.LessonPanel} />
        <select name="category" className={FormCSS.LessonPanel}>
            <option value="category1">category</option>
            <option value="category1">category1</option>
            <option value="category2">category2</option>
        </select>
        <button type="submit" title="Add Book"  className={FormCSS.Rectangle2}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;