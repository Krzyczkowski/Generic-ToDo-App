import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="searchBar">
      <input placeholder="Search tasks..." />
      <button className="searchButton">
        <FaSearch className="searchIcon" size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
