import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/booksSlice';
import { v4 as uuid } from 'uuid';
import Button from 'components/buttons/AddButton';
import FormCSS from 'components/form/styles/Form.module.css';

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({
      item_id: uuid(), title, author, category,
    }));

    setTitle('');
    setAuthor('');
    setCategory('Business');
  };

  return (
    <div>
      <h2 className={FormCSS.Title}>Add New Book</h2>
      <form className={FormCSS.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={FormCSS.LessonPanel}
        />
        <input
          type="text"
          placeholder="Book Author"
          name="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className={FormCSS.LessonPanel}
        />
        <select
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className={FormCSS.LessonPanel2}
        >
          <option value="Business">Business</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Education">Education</option>
          <option value="Engineering">Engineering</option>
          <option value="Fiction">Fiction</option>
          <option value="Humanities">Humanities</option>
          <option value="Journalism, Media Studies & Communication">Journalism, Media Studies & Communication</option>
          <option value="Law">Law</option>
          <option value="Medecine">Medecine</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Natural-sciences">Natural Sciences</option>
          <option value="Non-fiction">Non Fiction</option>
          <option value="Romancce">Romance</option>
          <option value="Social-sciences">Social Sciences</option>
          <option value="Student-success">Student Success</option>
        </select>
        <Button />
      </form>
    </div>
  );
}

export default Form;
