import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CompleteButton = ({ onComplete }) => {
  return (
    <button onClick={onComplete} className="completeButton">
      <FaCheck size={30} />
    </button>
  );
};

export default CompleteButton;
