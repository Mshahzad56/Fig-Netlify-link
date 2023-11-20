import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillBellFill } from "react-icons/bs";
import Searchuser from "./Searchuser";

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Call the onSearch callback with the search query
    onSearch(searchQuery);
  };

  return (
 <>
    <div className="search-top">
      <div className="search">
        <button onClick={handleSearch}>
          <FiSearch />
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <span>
        <BsFillBellFill /> <i>2</i>
      </span>
    </div>
    {/* <div className="search-user">
        <Searchuser/>
    </div> */}
    
    </>
  );
};

export default Search;
