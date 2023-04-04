import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const { categoriesItems } = useSelector((store) => store.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Status
      </button>
      <h3>{categoriesItems}</h3>
    </div>

  );
};

export default Categories;
