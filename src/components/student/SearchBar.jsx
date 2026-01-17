import React from "react";
import { assets } from "../../assets/assets";

const SearchBar = () => {
  return (
    <div>
      <form
        className="max-w-xl w-50 md:h-12 h-10 flex items-center 
      bg-white border border-gray-500/20 rounded"
      >
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="md:w-auto w-10 px-3"
        />
        <input
          type="text"
          placeholder="Search for courses"
          className="w-full h-full outline-none text-gray-500/80"
        />
        <button
          type="submit"
          className="bg-blue-600 rounded text-white 
        md:px-10 px-6 md:py-3 py-2 ml-50"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
