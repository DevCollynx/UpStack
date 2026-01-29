import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };

  return (
    <div className="flex gap-1 ml-10">
      <form onSubmit={onSearchHandler}
       id="myForm" className="max-w-xl w-full lg:w-110 md:h-12 h-10 flex items-center 
      bg-white gap-5 border border-gray-500/20 rounded"
      >
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="md:w-auto w-10 px-3"
        />
        <input 
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search for courses"
          className="w-full  h-full outline-none text-gray-500/80"
        />
      </form>
      <button
        type="Submit"
        form="myForm"
        className="bg-blue-600 rounded text-white 
        md:px-10 px-6 md:py-3 py-2 mx-1"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
