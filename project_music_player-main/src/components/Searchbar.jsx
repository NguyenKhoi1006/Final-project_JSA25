//import libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


// searchbar
const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className=" float p-2 bg-gradient-to-br rom-[#acb1bf] to-[#121286] rounded-3xl ">
      
      <div className="flex p2  ">
        
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className=" bg-[#f5f5f7] rounded-xl p-1  placeholder-gray-500 outline-none text-center text-black ml-[650px] w-[500px] mt-[30px]"
          placeholder="Search something ........."
          
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </div>
    </form>
  );
};

export default Searchbar;
