import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import GroupMenu from './GroupMenu';
import SortMenu from './SortMenu';
import './Board.css';

const Board = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        // Check if 'tickets' is an array
        if (Array.isArray(data.tickets)) {
          setTickets(data.tickets); // Assuming you use 'setTickets' to update the state
        } else {
          console.error('API response does not contain a valid tickets array', data);
        }
      })
      .catch(error => console.error('Error fetching tickets:', error));
  }, []);
  

  const groupTickets = (tickets) => {
    const grouped = {};
    tickets.forEach(ticket => {
      const groupKey = ticket[groupBy];
      if (!grouped[groupKey]) {
        grouped[groupKey] = [];
      }
      grouped[groupKey].push(ticket);
    });
    return grouped;
  };

  const sortedTickets = (group) => {
    return group.sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      return a.title.localeCompare(b.title);
    });
  };

  const groupedTickets = groupTickets(tickets);

  return (
    <div>
      <GroupMenu setGroupBy={setGroupBy} />
      <SortMenu setSortBy={setSortBy} />
      <div className="board-container">
        {Object.keys(groupedTickets).map(group => (
          <div key={group} className="column">
            <h3>{group}</h3>
            {sortedTickets(groupedTickets[group]).map(ticket => (
              <Card key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
