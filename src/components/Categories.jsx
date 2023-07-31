import React from 'react';
import { useSelector } from 'react-redux';
import CategoriesCSS from 'components/styles/categories.module.css';

const Categories = () => {
  const statusCategories = useSelector((state) => state.category.status);

  return (
    <p className={CategoriesCSS.status}>{statusCategories}</p>
  );
};

export default Categories;
