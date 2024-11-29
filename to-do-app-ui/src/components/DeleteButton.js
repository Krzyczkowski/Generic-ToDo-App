import React from 'react';
import { FaTrash } from 'react-icons/fa';

const DeleteButton = ({ onDelete }) => {
  return (
    <button onClick={onDelete} className="deleteButton">
      <FaTrash size={30}/>
    </button>
  );
};

export default DeleteButton;
