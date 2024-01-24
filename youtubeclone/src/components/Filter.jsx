import React from 'react';
import filterData from '../assets/data/dataFilter';

const Filter = ({ setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='flex'>
      {
        filterData.map((data, i) => (
          <div
            onClick={() => handleCategoryClick(data.name)}
            key={i}
            className='space-x-4 mx-4 bg-gray-100 hover:bg-gray-300 rounded-full p-2 cursor-pointer text-sm'
          >
            {data.name}
          </div>
        ))
      }
    </div>
  );
}

export default Filter;
