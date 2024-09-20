import React from 'react';
import './Card.css';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <h4>{ticket.title}</h4>
      <p>{ticket.description}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>User:</strong> {ticket.assigned_to}</p>
    </div>
  );
};

export default Card;
