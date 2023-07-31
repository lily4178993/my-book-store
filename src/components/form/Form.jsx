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
          <option value="business">Business</option>
          <option value="computer-science">Computer Science</option>
          <option value="education">Education</option>
          <option value="engineering">Engineering</option>
          <option value="fiction">Fiction</option>
          <option value="humanities">Humanities</option>
          <option value="JMSC">Journalism, Media Studies & Communication</option>
          <option value="law">Law</option>
          <option value="medecine">Medecine</option>
          <option value="mathematics">Mathematics</option>
          <option value="natural-sciences">Natural Sciences</option>
          <option value="non-fiction">Non Fiction</option>
          <option value="romancce">Romance</option>
          <option value="social-sciences">Social Sciences</option>
          <option value="student-success">Student Success</option>
        </select>
        <Button />
      </form>
    </div>
  );
}

export default Form;
