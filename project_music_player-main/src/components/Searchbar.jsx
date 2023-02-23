import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-9  w-80">
      <label htmlFor="search-field" className="sr-only">
        Search all files
      </label>
      <div className="fixed flex-row justify-start items-center mt-5  ">
        
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-[#f5f5f7] rounded-xl p-1  placeholder-gray-500 outline-none text-center text-black "
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
