import React from 'react';

const SortMenu = ({ setSortBy }) => {
  return (
    <div>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
    </div>
  );
};

export default SortMenu;
