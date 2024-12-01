import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const[searchPhrase,setSearchPhrase] = useState("");

  const handleInputChange= (e) =>{
    setSearchPhrase(e.target.value);
    onSearch(e.target.value);
  };
  
  const handleSearch = () =>{
    onSearch(searchPhrase);
  }

  return (
    <div className="searchBar">
      <input id="searchPhrase" placeholder="Search tasks..." onChange={handleInputChange}/>
      <button className="searchButton">
        <FaSearch className="searchIcon" size={20} onClick={handleSearch}/>
      </button>
    </div>
  );
};

export default SearchBar;
