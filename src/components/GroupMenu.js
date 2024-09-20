import React from 'react';

const GroupMenu = ({ setGroupBy }) => {
  return (
    <div>
      <select onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="assigned_to">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>
    </div>
  );
};

export default GroupMenu;
